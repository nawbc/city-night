'use strict';

const webpack = require('webpack');
const setConfig = require('../scripts/webpack/webpack.lib');
const buildTarget = require('./buildTargets.json');
const formatMessages = require('webpack-format-messages');
const chalk = require('chalk');
const isDevelopment = process.env.NODE_ENV === 'development';
const path = require('path');

const handleDevName = n => {
	const { name, ext } = path.parse(n);
	return name + '.dev' + ext;
};

const startBuild = async function() {
	for await (const [name, config] of Object.entries(buildTarget)) {
		const cssName = config['cssName'];
		const handledJsName = isDevelopment ? handleDevName(name) : name;
		const handledCssName = isDevelopment ? handleDevName(cssName) : cssName;
		config['cssName'] = handledCssName;
		const webpackConfig = setConfig(handledJsName, config);
		const compiler = webpack(webpackConfig);

		compiler.run(err => {
			if (err) throw err;
		});

		compiler.hooks.invalid.tap('invalid', function() {
			console.log(chalk.blue('Compiling...'));
		});

		compiler.hooks.done.tap('done', stats => {
			const messages = formatMessages(stats);

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
	}
};
startBuild();
