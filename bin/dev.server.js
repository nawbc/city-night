'use strict';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const { LAUNCH_HOST, LAUNCH_PORT } = require('../scripts/utils/handleUrl');
const { appPublicPath } = require('../scripts/utils/helper');
const appConfig = require('../scripts/webpack/webpack.app');
const openChrome = require('open');
const chalk = require('chalk');
const url = require('url');

const protocol = process.env.PROTOCOL === 'https' ? 'https' : 'http';
const openAddr = url.format({
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

const compile = () =>
	new Promise((resolve, reject) => {
		try {
			const config = appConfig(devAppTargetName, devAppBuildTarget);
			const compiler = webpack(config);
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
			process.stdout.write(
				process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H'
			);
			console.log(chalk.green('Silent development server running on ...\n'));
			console.log(chalk.yellow(`[❤ ❤ ❤ ❤ ❤]address: ${openAddr}`));
			console.log();
			console.log(chalk.blue('\t Good luck to myself 😜'));
			openChrome(openAddr, { app: ['chrome'] });
		});
	});

(async function() {
	const result = await compile()
		.then(val => val)
		.catch(err => console.trace(chalk.red('webpack compile error', err)));
	await runServer(result);
})();
