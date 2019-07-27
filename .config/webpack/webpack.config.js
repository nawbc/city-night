'use strict'

const path = require('path');
const webpack = require("webpack");
const pkg = require('../../package.json');
const muguetJson = require('../../muguet.json');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyWebpackPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require('react-dev-utils/ForkTsCheckerWebpackPlugin');
const typescriptFormatter = require('react-dev-utils/typescriptFormatter');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const Dashboard = require('webpack-dashboard');
const resolvePath = require('../../scripts/resolvePath');
const DashboardPlugin = require('webpack-dashboard/plugin');
const { progress } = require('./webpackStdout.js.js')


const banner = `
						Name: ${pkg.name} version: ${pkg.version}
								Author:  ${pkg.author}
								LICENSE ${pkg.license}`;


module.exports = function (env, action) {

	let entryPath;
	let outputPath;
	const muguetPkg = muguetJson.package;
	const rPath = resolvePath(muguetJson.paths);
	const isDevelopment = env === 'development';
	const isProduction = env === 'production';

	if (action === 'devServer' || action === 'releaseLib') {
		entryPath = rPath.siteEntryPath;
		outputPath = rPath.siteOutputPath;
	} else if (action === 'releaseLib') {
		entryPath = rPath.libEntryPath;
		outputPath = rPath.libOutputPath;
	}


	return {
		entry: {
			main: entryPath
		},
		output: {
			path: outputPath,
			filename: muguetPkg.filename,
			library: muguetPkg.library,
			libraryTarget: muguetPkg.libraryTarget
		},
		mode: env && 'development',
		module: {
			rules:
		},
		resolve: {
			alias: {
				[muguetPkg.alias_src]: rPath.libPath,
				[muguetPkg.alias_site]: rPath.sitePath
			},
			extensions: [".js", ".json", ".jsx", ".tsx", ".ts", ".json", "css", "scss"]
		},
		plugins: [
			// mixObject.dashboard,
			new HtmlWebpackPlugin(mixObject.htmlConfig),
			new InterpolateHtmlPlugin(HtmlWebpackPlugin, { MUGUET_URL: rPath.sitePublicPath }),
			new OptimizeCSSAssetsPlugin(mixObject.optimizeCssConfig),
			new ForkTsCheckerWebpackPlugin(mixObject.typeCheck),
			isDevelopment &&
			new WatchMissingNodeModulesPlugin(rPath.appNodeModules),
			// new webpack.ProgressPlugin(progress),
			new MiniCssExtractPlugin(mixObject.minCssConfig),
			new UglifyWebpackPlugin(mixObject.uglifyConfig),
			new webpack.BannerPlugin(banner)
		].filter(e => e !== null)
	}
};
