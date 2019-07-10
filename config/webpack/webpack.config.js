'use strict'

const path = require('path');
const webpack = require("webpack");
const pkg = require('../../package.json');
const muguetJson = require('../../muguet.json');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyWebpackPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
const InterpolateHtmlPlugin = require('html-webpack-plugin');
const Dashboard = require('webpack-dashboard');
const resolvePath = require('../../scripts/resolvePath');
const DashboardPlugin = require('webpack-dashboard/plugin');
const { progress } = require('./webpackStdout.js')


const banner = `
												Name: ${pkg.name} version: ${pkg.version}
																Author:  ${pkg.author}
															LICENSE ${pkg.license}`;


module.exports = function (env) {

	const muguetPkg = muguetJson.package;
	const rPath = resolvePath(muguetJson.paths);
	const isDevelopment = env === 'development';
	const isProduction = env === 'production';

	// ===================================================================================================================

	const mixObject = {

		progress(percentage, message, ...args) {
			console.info(percentage, message, ...args);
		},

		dashboard() {
			return env === 'production' ? new DashboardPlugin(new Dashboard().setData) : null
		},

		uglifyConfig: {
			test: /\.(j|t)s(x|\b)$/i,
			include: /\/src/,
			uglifyOptions: {
				compress: {
					warnings: false,
					drop_console: true,
					collapse_vars: true,
					reduce_vars: true
				},
				output: {
					beautify: false,
					comments: false
				}
			},
			extractComments: {
				banner: banner
			}
		},

		minCssConfig: {
			filename: muguetPkg.outputCssFileName
		},

		optimizeCssConfig: {
			sourceMap: isDevelopment
		},

		htmlConfig: Object.assign(
			{
				inject: true,
				template: rPath.siteHtmlPath
			},
			isProduction ?
				{
					minify: {
						removeComments: true,
						collapseWhitespace: true,
						removeRedundantAttributes: true,
						useShortDoctype: true,
						removeEmptyAttributes: true,
						removeStyleLinkTypeAttributes: true,
						keepClosingSlash: true,
						minifyJS: true,
						minifyCSS: true,
						minifyURLs: true,
					},
				} : null
		)
	}


	// ===================================================================================================================
	return {
		entry: {
			main: rPath.wpEntryPath
		},
		output: {
			path: rPath.wpOutputPath,
			filename: muguetPkg.filename,
			library: muguetPkg.library,
			libraryTarget: muguetPkg.libraryTarget
		},
		mode: env && 'development',
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: [
						{
							loader: "babel-loader",
						},
						{
							loader: "ts-loader",
							options: {
								transpileOnly: true
							}
						}
					]
				},
				{
					test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i,
					use: [
						{
							loader: "url-loader",
							options: {
								limit: 1024 * 10,
								name: '[path][hash].[ext]'
							}
						}
					]
				},
				{
					test: /\.(ttf|eot|woff|woff2|otf|svg|ico)/,
					use: [
						{
							loader: "file-loader",
							options: {
								name: '[path][hash].[ext]'
							}
						}
					]
				},
				{
					test: /\.s(c|a)ss$/,
					use: [
						{
							loader: "style-loader"
						},
						{
							loader: "css-loader"
						},
						{
							loader: "sass-loader"
						}
					]
				},
				{
					test: /\.css$/,
					use: [
						MiniCssExtractPlugin.loader,
						{
							loader: "css-loader",
							options: {
								sourceMap: isDevelopment
							}
						}
					]
				}
			]
		},
		resolve: {
			alias: {
				[muguetPkg.alias_src]: path.resolve("./src"),
				[muguetPkg.alias_site]: path.resolve("./muguet-site")
			},
			extensions: [".js", ".json", ".jsx", ".tsx", ".ts", ".json", "css", "scss"]
		},
		plugins: [
			mixObject.dashboard,
			new HtmlWebpackPlugin(mixObject.htmlConfig),
			new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime~.+[.]js/]),
			new InterpolateHtmlPlugin(HtmlWebpackPlugin, { MUGUET_URL: rPath.sitePublic }),
			// new webpack.ProgressPlugin(progress),
			new MiniCssExtractPlugin(mixObject.minCssConfig),
			new webpack.BannerPlugin(banner),
			new UglifyWebpackPlugin(mixObject.uglifyConfig),
			new OptimizeCSSAssetsPlugin(mixObject.optimizeCssConfig)
		].filter(e => e !== null)
	}
};


