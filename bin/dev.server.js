/* eslint-disable no-console */
'use strict';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const { LAUNCH_HOST, LAUNCH_PORT } = require('../scripts/utils/preHandleDev');
const openBrowser = require('../scripts/utils/openBrowser');
const { appPublicPath } = require('../scripts/utils/helper');
const {
	reportResultIfSuccess,
	reportErrors,
	reportWarnings,
	reportInvalidResult
} = require('../scripts/utils/reportResults');
const appConfig = require('../scripts/webpack/webpack.app');
const chalk = require('chalk');
const url = require('url');

const protocol = process.env.PROTOCOL === 'https' ? 'https' : 'http';

const targetAddress = url.format({
	protocol: protocol,
	hostname: LAUNCH_HOST,
	port: LAUNCH_PORT
});

const devAppBuildTarget = {
	entry: './app/index.tsx',
	output: './app/public',
	cssName: 'app.css',
	libraryTarget: 'umd'
};

const devAppTargetName = './static/js/silent_doc_site.js';

const serverConfig = {
	compress: true,
	clientLogLevel: 'none',
	contentBase: appPublicPath,
	watchContentBase: true,
	hot: true,
	quiet: true,
	publicPath: '/',
	https: protocol === 'https',
	host: LAUNCH_HOST,
	overlay: false,
	historyApiFallback: {
		disableDotRule: true
	}
};

const compilerHooks = compiler => {
	compiler.hooks.done.tap('done', function(stats) {
		const statsJson = stats.toJson();
		console.clear();
		reportResultIfSuccess(statsJson, targetAddress);
		reportErrors(statsJson);
		reportWarnings(statsJson);
	});

	compiler.hooks.invalid.tap('invalid', reportInvalidResult);
};

const compile = () => {
	return new Promise((resolve, reject) => {
		try {
			const config = appConfig(devAppTargetName, devAppBuildTarget);
			const compiler = webpack(config);
			compilerHooks(compiler);
			resolve(compiler);
		} catch (err) {
			reject(err);
		}
	});
};

const runServer = compiler => {
	return new Promise(() => {
		const devServer = new WebpackDevServer(compiler, serverConfig);
		devServer.listen(LAUNCH_PORT, LAUNCH_HOST, err => {
			err && console.log(chalk.red(err));
			openBrowser(targetAddress);
		});
		['SIGINT', 'SIGTERM'].forEach(signal => {
			process.on(signal, () => {
				devServer.close();
				process.exit();
			});
		});
	});
};

(async function() {
	const compiler = await compile()
		.then(val => val)
		.catch(err => console.trace(chalk.red('webpack compile error', err)));
	await runServer(compiler);
})();
