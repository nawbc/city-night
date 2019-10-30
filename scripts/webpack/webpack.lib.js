/* eslint-disable @typescript-eslint/camelcase */
'use strict';

const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Terser = require('terser-webpack-plugin');
const bannerText = require('../utils/banner');
const { BannerPlugin } = require('webpack');
const compassImporter = require('../utils/compass');
const { pluginsPath, tsConfigPath, getAbsolutePath, libPath, appPath } = require('../utils/helper');
const os = require('os');

/**=================================================================================================
 * 设置为 webpack 在babelrc里改为 scss 改名为css
 *=================================================================================================*/

process.env.SILENT_ACTION = 'UN_SCSS_RENAME';

const env = process.env.NODE_ENV;
const isProduction = env === 'production';
const isDevelopment = env === 'development';

const isZip = !!process.env.SILENT_ZIP;
const workers = os.cpus().length;

const setLibConfig = function(entryName, packageConfig, ruleInject = {}) {
	const { entry, output, library, libraryTarget, cssName } = packageConfig;
	const absEntryPath = getAbsolutePath(entry);
	const absOutputPath = getAbsolutePath(output);

	return {
		mode: env,
		devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
		entry: [absEntryPath],
		output: Object.assign(
			{
				path: absOutputPath,
				filename: entryName,
				libraryTarget: libraryTarget
			},
			!!library && { library }
		),
		optimization: {
			minimize: isZip,
			minimizer: [
				new Terser({
					terserOptions: {
						parse: {
							ecma: 8
						},
						compress: {
							ecma: 5,
							warnings: false,

							comparisons: false,
							inline: 2
						},
						mangle: {
							safari10: true
						},
						output: {
							ecma: 5,
							comments: false,
							ascii_only: true
						}
					},
					parallel: true,
					cache: true,
					sourceMap: isProduction
				}),
				new OptimizeCSSAssetsPlugin({
					cssProcessorOptions: {
						map: isProduction && {
							inline: false,
							annotation: true
						}
					}
				})
			]
		},
		module: {
			strictExportPresence: true,
			rules: [
				{
					test: /\.(js|jsx)$/,
					include: [appPath],
					enforce: 'pre',
					use: [
						{
							options: {
								eslintPath: require.resolve('eslint')
							},
							loader: require.resolve('eslint-loader')
						}
					]
				},
				{
					oneOf: [
						{
							test: /\.(js|jsx|ts|tsx)$/,
							include: [pluginsPath, libPath, !!ruleInject.useAppPath && appPath].filter(Boolean),
							use: [
								{
									loader: 'babel-loader',
									options: {
										cacheDirectory: true,
										cacheCompression: isProduction,
										compact: isProduction
									}
								},
								{
									loader: 'thread-loader',
									options: {
										worker: workers
									}
								}
							]
						},
						{
							test: /\.(sa|sc|c)ss$/,
							use: [
								isDevelopment && 'style-loader',
								isProduction && {
									loader: MiniCssExtractPlugin.loader,
									options: {
										hmr: true
									}
								},
								{
									loader: 'css-loader',
									options: {
										sourceMap: isProduction,
										importLoaders: 1
									}
								},
								{
									loader: 'sass-loader',
									options: {
										importer: compassImporter,
										sourceMap: isProduction,
										sourceComments: isDevelopment,
										importLoaders: 2
									}
								},
								{
									loader: 'thread-loader',
									options: {
										worker: workers
									}
								}
							].filter(Boolean)
						},
						{
							test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
							loader: 'url-loader',
							options: {
								limit: 10000,
								name: 'static/source/[name].[hash:8].[ext]'
							}
						},
						{
							loader: 'file-loader',
							exclude: [/\.(js|jsx|ts|tsx)$/, /\.htm?(.|l)$/, /\.json$/],
							options: {
								name: 'static/source/[name].[hash:8].[ext]'
							}
						}
					]
				}
			]
		},
		plugins: [
			isProduction &&
				new MiniCssExtractPlugin({
					filename: ruleInject.cssName || cssName,
					chunkFilename: ruleInject.cssChunkName || cssName
				}),
			new ForkTsCheckerWebpackPlugin({
				async: isDevelopment,
				useTypescriptIncrementalApi: true,
				checkSyntacticErrors: true,
				tsconfig: tsConfigPath,
				reportFiles: ['**', '!**/*.json', '!**/__tests__/**', '!**/?(*.)(spec|test).*'],
				watch: [libPath, pluginsPath, !!ruleInject.useAppPath && appPath].filter(Boolean),
				eslint: true
			}),
			isProduction && new BannerPlugin(bannerText)
		].filter(Boolean),
		resolve: {
			extensions: ['.js', '.json', '.jsx', '.tsx', '.ts', '.json', '.css', '.scss', '.sass']
		},
		node: {
			module: 'empty',
			dgram: 'empty',
			dns: 'mock',
			fs: 'empty',
			net: 'empty',
			tls: 'empty',
			child_process: 'empty'
		}
	};
};

module.exports = setLibConfig;
