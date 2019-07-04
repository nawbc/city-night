"use strict"

const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyWebpackPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = function settingWebpackConfig(config = {}) {
	const devtoolConfig = Object.is(config.mode, "production") ? {} : { devtool: "source-map" };


	const defaultWebpackConfig = {
		entry: config.entry,
		output: config.output,
		mode: config.mode,
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: [
						{
							loader: "babel-loader"
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
								name: config.urlLoaderPath
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
								name: config.fileLoaderPath
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
								sourceMap: Object.is(config.mode, "development") ? true : false
							}
						}
					]
				}
			]
		},
		resolve: {
			alias: {
				Muguet: path.resolve(__dirname, "./src")
			},
			extensions: [".js", ".json", ".jsx", ".tsx", ".ts", ".json", "css", "scss"]
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: config.outputCssFileName
			}),
			new webpack.BannerPlugin(config.banner),
			new UglifyWebpackPlugin({
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
					banner: config.banner
				}
			}),
			new OptimizeCSSAssetsPlugin({
				sourceMap: Object.is(config.mdoe, "development") ? true : false
			})
		]
	};
	return Object.assign(
		defaultWebpackConfig,
		devtoolConfig
	);
};
