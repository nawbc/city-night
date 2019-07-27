
module.exports = function (env, entryPath, outputPath) {

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
				} : {}
		),
		typeCheck: {
			typescript: require.resolve('typescript'),
			async: isDevelopment,
			useTypescriptIncrementalApi: true,
			checkSyntacticErrors: true,
			tsconfig: rPath.tsConfigPath,
			reportFiles: [
				'**',
				'!**/*.json',
				'!**/__tests__/**',
				'!**/?(*.)(spec|test).*',
				'!**/src/setupProxy.*',
				'!**/src/setupTests.*',
			],
			watch: [rPath.sitePath, rPath.libPath],
			silent: true,
			formatter: isProduction ? typescriptFormatter : undefined,
		}
	}

	// ===================================================================================================================
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
								name: 'static/assets/[name].[hash:8].[ext]'
							}
						}
					]
				},
				{
					loader: require.resolve('file-loader'),
					exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
					options: {
						name: 'static/assets/[name].[hash:8].[ext]',
					},
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
