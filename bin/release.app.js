'use strict';

const webpack = require('webpack');
const appConfig = require('../scripts/webpack/webpack.app');
// const formatMessages = require('webpack-format-messages');
const chalk = require('chalk');

const devAppBuildTarget = {
	entry: './app/index.tsx',
	output: './release/app/',
	cssName: 'app.css',
	libraryTarget: 'umd'
};

const devAppTargetName = './static/js/silent_doc_site.js';

const startBuild = function() {
	const webpackConfig = appConfig(devAppTargetName, devAppBuildTarget);
	const compiler = webpack(webpackConfig);

	compiler.run(err => {
		if (err) throw err;
	});

	compiler.hooks.invalid.tap('invalid', function() {
		console.log(chalk.blue('Compiling...'));
	});

	compiler.hooks.done.tap('done', stats => {
		const jsonStats = stats.toJson();

		if (!messages.errors.length && !messages.warnings.length) {
			console.log(chalk.green('Compiled successfully!'));
		}

		if (messages.errors.length) {
			console.log(chalk.red('Failed to compile.'));
			messages.errors.forEach(e => console.log(e));
			return;
		}

		if (messages.warnings.length) {
			console.log(chalk.yellow('Compiled with warnings.'));
			messages.warnings.forEach(w => console.log(w));
		}
	});
};
startBuild();
