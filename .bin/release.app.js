'use strict';

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';
process.env.SILENT_ENV = 'webpack';


const fs = require('fs-extra');
const webpack = require('webpack');
const chalk = require('react-dev-utils/chalk');
const webpackConfig = require('../.scripts/webpack/webpack.config');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const { constPaths, rootPath } = require('../.scripts/config.json');
const resolveJsonPath = require('../.scripts/utils/resolveJsonPaths');
const FileSizeReporter = require('react-dev-utils/FileSizeReporter');

const rPath = resolveJsonPath(rootPath, constPaths);
const measureFileSizesBeforeBuild = FileSizeReporter.measureFileSizesBeforeBuild;
const printFileSizesAfterBuild = FileSizeReporter.printFileSizesAfterBuild;
const WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024;
const WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024;


if (!checkRequiredFiles([rPath.appHtml, rPath.appEntryTsx, rPath.libEntryTsx])) {
	process.exit(1);
}

const config = webpackConfig('production', 'app');

measureFileSizesBeforeBuild(rPath.appOutput)
	.then(preSize => {
		fs.emptyDirSync(rPath.appOutput);
		fs.copySync(rPath.appPublic, rPath.appOutput, {
			dereference: true,
			filter: e => e !== rPath.appHtml,
		});
		return preSize;
	})
	.then((preSize) => {
		console.log(chalk.green('Packing the silent app...'));
		let compiler = webpack(config);
		return new Promise((resolve, reject) => {
			compiler.run((err, stats) => {
				let messages = null;
				if (err) {
					if (!err.message) {
						return reject(err);
					}
					messages = formatWebpackMessages({
						errors: [err.message],
						warnings: [],
					});
				} else {
					messages = formatWebpackMessages(
						stats.toJson({ all: false, warnings: true, errors: true })
					);
				}

				resolve({
					stats,
					preSize,
					warnings: messages.warnings,
				})
			})
		})
	}).then(({ stats, preSize, warnings }) => {
		if (warnings.length) {
			console.log(chalk.yellow('Compiled with warnings.\n'));
			console.log(warnings.join('\n\n'));
			console.log(
				'\nSearch for the ' +
				chalk.underline(chalk.yellow('keywords'))
			);
		} else {
			console.log('File sizes after gzip:\n');

			printFileSizesAfterBuild(
				stats,
				preSize,
				rPath.appOutput,
				WARN_AFTER_BUNDLE_GZIP_SIZE,
				WARN_AFTER_CHUNK_GZIP_SIZE
			);
			console.log();
		}
	})
