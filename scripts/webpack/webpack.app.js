const webpack = require('webpack');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const { appPublicPath, htmlTemplate } = require('../utils/helper');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const setLibConfig = require('./webpack.lib');

const env = process.env.NODE_ENV;
const isProduction = env === 'production';
const isDevelopment = env === 'development';

module.exports = function(devTargetName, devBuildTarget) {
	const libConfig = setLibConfig(
		devTargetName,
		devBuildTarget,
		// 注入rule
		Object.assign(
			{
				cssName: `static/css/${devBuildTarget.cssName}.css`,
				useAppPath: true
			},
			isProduction && { cssChunkName: 'static/css/[name].[contenthash:8].chunk.css' }
		)
	);

	const appConfig = libConfig;

	appConfig.optimization.splitChunks = {
		chunks: 'all',
		name: false
	};

	isDevelopment &&
		appConfig.entry.unshift(require.resolve('webpack-hot-dev-clients/webpackHotDevClient'));

	appConfig.optimization.runtimeChunk = true;

	appConfig.plugins.push(
		new HtmlWebpackPlugin(
			Object.assign(
				{
					inject: true,
					template: htmlTemplate
				},
				isProduction && {
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
						minifyURLs: true
					}
				}
			)
		),
		new ManifestPlugin({
			fileName: 'manifest.json',
			publicPath: appPublicPath
		}),
		new webpack.NamedModulesPlugin()
	);

	isDevelopment && appConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

	isProduction &&
		appConfig.plugins.push(
			new WorkboxWebpackPlugin.GenerateSW({
				clientsClaim: true,
				exclude: [/\.map$/, /manifest\.json$/],
				importWorkboxFrom: 'cdn',
				navigateFallback: htmlTemplate,
				navigateFallbackBlacklist: [new RegExp('^/_'), new RegExp('/[^/]+\\.[^/]+$')]
			})
		);

	return appConfig;
};
