/* eslint-disable quotes */
'use strict';

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const { exec } = require('child_process');
const { emptyDir } = require('fs-extra');
const chalk = require('react-dev-utils/chalk');
const path = require('path');

const compileWithBabel = () =>
	new Promise((resolve, reject) => {
		console.log('babel start compile.....');
		exec('npm run plugins:tsc', (err, stdout) => {
			if (err) reject(err);
			resolve(stdout);
		});
	});

const generateDts = () =>
	new Promise((resolve, reject) => {
		console.log('start generate d.ts.....');
		exec(`npm run dts:plugins`, err => {
			if (err) reject(err);
			resolve('d.ts generates successfully');
		});
	});

const compileScss = () =>
	new Promise(resolve => {
		console.log('start compile scss .....');
		exec('npm run scss:plugins', (err, stdout, stderr) => {
			resolve(err ? stderr : 'Scss has been compiled successfully');
		});
	});

emptyDir(path.resolve('./release'))
	.then(() => compileWithBabel())
	.then(std => {
		console.log(chalk.cyan(std));
		return compileScss();
	})
	.then(std => {
		console.log(chalk.green(std));
		console.log();
		return generateDts();
	})
	.then(std => {
		console.log(chalk.magenta(std));
		console.log();
	})
	.catch(err => {
		console.log(chalk.red(err));
	});
