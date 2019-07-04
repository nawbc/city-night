'use strict'

const settingWebpackConfig = require('./config/webpack/webpack.default');
const pkg = require('./package.json');
const path = require('path');

const webpackBanner =  `
										Name:${pkg.name} version: ${pkg.version}
													Author:  ${pkg.author}
													LICENSE ${pkg.license}`;

const webpackCustomConfig = {
	entry: {
		main: './src/exports.tsx'
	},
	output: {
		path: path.resolve(__dirname, './release/dist'),
		filename: 'muguet.js',
		library: 'Muguet',
		libraryTarget: 'umd'
	},
	banner: webpackBanner,
	outputCssFileName: 'muguet.css',
	mode: Object.is(process.env.NODE_ENV, 'production') ? 'production': 'development',
	urlLoaderPath: '[path][hash].[ext]',
	fileLoaderPath: '[path][hash].[ext]',
}

module.exports = settingWebpackConfig(webpackCustomConfig);
