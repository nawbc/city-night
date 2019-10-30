/* eslint-disable no-console */
const chalk = require('chalk');

exports.reportInvalidResult = () => {
	process.stdout.write('\x1B[2J\x1B[3J\x1B[H');
	console.log(chalk.green('[STATS]: COMPILING'));
};

exports.reportResultIfSuccess = (json, address) => {
	if (!json.errors.length && !json.warnings.length) {
		const duration = json.time;
		const startTime = new Date(json.builtAt);
		const webpackVersion = json.version;
		const chunkName = json.assetsByChunkName.main;
		const totalSize =
			(
				json.assets.reduce((pre, next) => ({ size: pre.size + next.size }), {
					size: 0
				}).size / Math.pow(1024, 2)
			).toFixed(4) + 'MB';

		console.log();
		if (!!address) {
			console.log(chalk.green('Silent Concept development server is Running'));
			console.log();
			console.log(chalk.green('[NET_ADDRESS]:'), address);
			console.log();
			console.log('===========================================================');
		}
		console.log();
		console.log(chalk.green('[WEBPACK_VERSION]: '), webpackVersion);
		console.log();
		console.log(chalk.green('[MAIN_CHUNK]: '), chunkName);
		console.log();
		console.log(chalk.green('[USING_TIME]: '), duration, 'ms');
		console.log();
		console.log(chalk.green('[TOTAL_SIZE]: '), totalSize);
		console.log();
		console.log(chalk.green('[START_AT]: '), startTime);
		console.log();
		console.log(chalk.green('[LSAT_WORD]: THE BEST WISHES 😜'));
	}
};

exports.reportErrors = ({ errors }) => {
	if (errors.length) {
		console.log(chalk.red('Failed to compile.'));
		errors.forEach(e => console.log(e));
		return true;
	} else {
		return false;
	}
};

exports.reportWarnings = ({ warnings }) => {
	if (warnings.length) {
		console.log(chalk.yellow('Compiled with warnings.'));
		warnings.forEach(w => console.log(w));
	}
};
