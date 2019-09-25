'use strict'

process.env.NODE_ENV = 'development';
process.env.BABEL_ENV = 'development';
process.env.SILENT_ENV = 'webpack';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const clearConsole = require('react-dev-utils/clearConsole');
const chalk = require('react-dev-utils/chalk');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const openBrowser = require('react-dev-utils/openBrowser');
const webpackConfig = require('../.scripts/webpack/webpack.config');
const resolveJsonPath = require('../.scripts/utils/resolveJsonPaths');
const { constPaths, rootPath } = require('../.scripts/config.json');
const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
const evalSourceMapMiddleware = require('react-dev-utils/evalSourceMapMiddleware');
const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');
const fs = require('fs');
const { finalHost, DEFAULT_PORT } = require('../.scripts/utils/handleUrl');
const {
	createCompiler,
	prepareUrls,
	choosePort
} = require('react-dev-utils/WebpackDevServerUtils');

const rPath = resolveJsonPath(rootPath, constPaths);

if (!checkRequiredFiles([rPath.appHtml, rPath.appEntryTsx, rPath.libEntryTsx])) {
	process.exit(1);
}

choosePort(finalHost, DEFAULT_PORT).then(port => {
	if (port === void 0) return 0;

	const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
	const appName = resolveJsonPath.name;
	const useTypeScript = fs.existsSync(constPaths.tsConfig);
	const urls = prepareUrls(protocol, finalHost, port);

	const devSocket = {
		warnings: warnings =>
			devServer.sockWrite(devServer.sockets, 'warnings', warnings),
		errors: errors =>
			devServer.sockWrite(devServer.sockets, 'errors', errors),
	};

	const config = webpackConfig('development', 'app');
	const serverConfig = {
		compress: true,
		clientLogLevel: 'none',
		contentBase: rPath.appPublic,
		watchContentBase: true,
		hot: true,
		publicPath: '/',
		quiet: true,
		https: protocol === 'https',
		host: finalHost,
		overlay: false,
		historyApiFallback: {
			disableDotRule: true,
		},
		public: urls.lanUrlForConfig,
		before(app, server) {
			app.use(evalSourceMapMiddleware(server));
			app.use(errorOverlayMiddleware());
			app.use(noopServiceWorkerMiddleware());
		},
	};

	const compiler = createCompiler({
		appName,
		config,
		devSocket,
		urls,
		useTypeScript,
		webpack,
	});

	const devServer = new WebpackDevServer(compiler, serverConfig);
	devServer.listen(port, finalHost, (err) => {
		err && console.trace(chalk.red(err));
		process.stdout.isTTY && clearConsole();
		console.log(chalk.green(`Silent development server running on ${finalHost}:${port} ...\n`));
		openBrowser(urls.localUrlForBrowser);
	})
})
