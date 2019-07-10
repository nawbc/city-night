const webpack = require('webpack');
const DevServer = require('webpack-dev-server');
const clearConsole = require('react-dev-utils/clearConsole');
const chalk = require('react-dev-utils/chalk');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const { checkBrowsers } = require('react-dev-utils/browsersHelper');
const openBrowser = require('react-dev-utils/openBrowser');
const webpackSetting = require('../config/webpack/webpack.config');
const { stats } = require('../config/webpack/webpackStdout');
const resolvePath = require('../scripts/resolvePath');
const { port, paths } = require('../muguet.json');
const { name } = require('../package.json');

const fs = require('fs');
const os = require('os');
const {
	choosePort,
	createCompiler,
	prepareUrls,
} = require('react-dev-utils/WebpackDevServerUtils');

const rPath = resolvePath(paths);

(function checkExistFile() {
	if (!checkRequiredFiles([rPath.siteHtmlPath, rPath.siteIndexJs])) {
		console.log(chalk.red('Error: No index html or index js file in public dir'));
		process.exit(1);
	}
})()

const DEFAULT_PORT = port;

function handleHost() {
	let HOST;
	switch (os.platform()) {
		case 'win32':
			HOST = os.networkInterfaces()['WLAN'] ? os.networkInterfaces()['WLAN'][1]['address'] : '0.0.0.0'
			break;
		case 'linux':
			HOST = os.networkInterfaces()['eth0'] ? os.networkInterfaces()['eth0'][1]['address'] : '0.0.0.0'
			break;
		default:
			HOST = '0.0.0.0'
			break;
	}
	return HOST;
}

const HOST = handleHost();

checkBrowsers(rPath.itemRootPath, process.stdout.isTTY)
	.then(() => choosePort(HOST, DEFAULT_PORT))
	.then(port => {
		if (port == null) {
			return;
		}
		const config = webpackSetting('development');
		const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';

		const useTypeScript = fs.existsSync(rPath.appTsConfig);
		const urls = prepareUrls(protocol, HOST, port);
		const devSocket = {
			warnings: warnings =>
				devServer.sockWrite(devServer.sockets, 'warnings', warnings),
			errors: errors =>
				devServer.sockWrite(devServer.sockets, 'errors', errors),
		};

		const compiler = createCompiler({
			name,
			config,
			devSocket,
			urls,
			useTypeScript,
			webpack,
		});

		console.log(compiler)
		const devSrvConfig = {
			compress: true,
			stats: stats,
			contentBase: rPath.sitePublic,
			publicPath: '/',
			hot: true,
			host: HOST,
			https: protocol === 'https',
			quiet: true,
			historyApiFallback: true,
		}

		const devServer = new DevServer(compiler, devSrvConfig);

		devServer.listen(port, handleHost(), err => {
			if (err) {
				return console.log(err);
			}
			// if (process.stdout.isTTY) {
			// 	clearConsole();
			// }
			// console.info(chalk.green(`Muguet development server runing on ${HOST}:${DEFAULT_PORT} ...\n`));
			// openBrowser(urls.localUrlForBrowser);
		});

		['SIGINT', 'SIGTERM'].forEach(function (sig) {
			process.on(sig, function () {
				devServer.close();
				process.exit();
			});
		});
	})
	.catch(err => {
		if (err && err.message) {
			console.log(err.message);
		}
		process.exit(1);
	});



