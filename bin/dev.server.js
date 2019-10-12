'use strict';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const { LAUNCH_HOST, LAUNCH_PORT } = require('../scripts/utils/handleUrl');
const { appPublicPath } = require('../scripts/utils/helper');
const appConfig = require('../scripts/webpack/webpack.app');
const chalk = require('chalk');

const protocol = process.env.PROTOCOL === 'https' ? 'https' : 'http';

const devAppBuildTarget = {
	entry: './app/index.tsx',
	output: './release/app/',
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
	publicPath: '/',
	https: protocol === 'https',
	host: LAUNCH_HOST,
	overlay: false,
	historyApiFallback: {
		disableDotRule: true
	}
};

const compile = () =>
	new Promise((resolve, reject) => {
		try {
			const config = appConfig(devAppTargetName, devAppBuildTarget);
			const compiler = webpack(config);
			console.log(appConfig);
			resolve(compiler);
		} catch (err) {
			reject(err);
		}
	});

const runServer = compiled =>
	new Promise(() => {
		const devServer = new WebpackDevServer(compiled, serverConfig);

		devServer.listen(LAUNCH_PORT, LAUNCH_HOST, err => {
			err && console.log(chalk.red(err));
			// process.stdout.isTTY &&
			console.log(chalk.green(`Silent development server running on ${LAUNCH_HOST}:${LAUNCH_PORT} ...\n`));
			process.stdout.write(process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H');
			// openBrowser(urls.localUrlForBrowser);
		});
	});

(async function() {
	const result = await compile()
		.then(val => val)
		.catch(err => console.error(chalk.red('webpack compile error')));
	await runServer(result);
})();
