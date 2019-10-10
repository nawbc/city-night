const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ProgressPlugin = require('webpack-progress-bar');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Terser = require('terser-webpack-plugin');
const bannerText = require('./scripts/utils/banner');
const { BannerPlugin } = require('webpack');
const compassImporter = require('./scripts/utils/compass');
const Config = require('webpack-chain');
const path = require('path');
const os = require('os');

/**=================================================================================================
 * 设置为 webpack 在babelrc里改为 scss 改名为css
 *=================================================================================================*/
process.env.SILENT_ENV = 'webpack';

const env = process.env.NODE_ENV;
const isProduction = env === 'production';
const isDevelopment = env === 'development';

const getAbsolutePath = _path => path.resolve(__dirname, _path);
const pluginsPath = getAbsolutePath('./plugins');
const libPath = getAbsolutePath('./lib');
const tsConfigPath = getAbsolutePath('./tsconfig.json');
const workers = os.cpus().length;

const setConfig = function(entryName, packageConfig) {
	const config = new Config();
	const { entry, output, library, libraryTarget, cssName } = packageConfig;
	const absEntryPath = getAbsolutePath(entry);
	const absOutputPath = getAbsolutePath(output);

	config
		.entry('silent-concept')
		.add(absEntryPath)
		.end();

	config.output
		.path(absOutputPath)
		.filename(entryName)
		.library(library)
		.libraryTarget(libraryTarget);

	config
		.mode(env)
		.devtool(isProduction ? 'source-map' : 'cheap-module-source-map');

	config.optimization.minimize(isProduction);

	config.optimization.minimizer('minimizeCss').use(OptimizeCSSAssetsPlugin, [
		{
			cssProcessorOptions: {
				map: isProduction ? { inline: false, annotation: true } : false
			}
		}
	]);

	config.optimization.minimizer('terser').use(Terser, [
		{
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
					// eslint-disable-next-line @typescript-eslint/camelcase
					ascii_only: true
				}
			},
			parallel: true,
			cache: true,
			sourceMap: isProduction
		}
	]);

	config.module
		.rule('eslint')
		.test(/\.(js|jsx)$/)
		.pre()
		.include.add(pluginsPath)
		.add(libPath)
		.end()
		.use('eslint')
		.loader('eslint-loader')
		.options({
			eslintPath: require.resolve('eslint')
		});

	config.module
		.rule('compile')
		.test(/\.(js|jsx|ts|tsx)$/)
		.include.add(pluginsPath)
		.add(libPath)
		.end()
		.use('babel')
		.loader('babel-loader')
		.options({
			cacheDirectory: true,
			cacheCompression: isProduction,
			compact: isProduction
		})
		.end()
		.use('thread')
		.loader('thread-loader')
		.options({
			workers: workers
		});

	config.module
		.rule('scss')
		.test(/\.(sa|sc|c)ss$/)
		.use('cssPlugin')
		.loader(MiniCssExtractPlugin.loader)
		.options({
			hmr: isDevelopment
		})
		.end()
		.use('cssLoader')
		.loader('css-loader')
		.options({
			sourceMap: isProduction,
			importLoaders: 1
		})
		.end()
		.use('sassLoader')
		.loader('sass-loader')
		.options({
			importer: compassImporter,
			sourceMap: isProduction,
			sourceComments: isDevelopment,
			importLoaders: 2
		})
		.end()
		.use('threadLoader')
		.loader('thread-loader')
		.options({
			worker: workers
		});

	config
		.plugin('css')
		.use(MiniCssExtractPlugin, [{ filename: cssName, chunkFilename: cssName }])
		.after('scss');

	config.plugin('typeChecker').use(ForkTsCheckerWebpackPlugin, [
		{
			async: isDevelopment,
			useTypescriptIncrementalApi: true,
			checkSyntacticErrors: true,
			tsconfig: tsConfigPath,
			reportFiles: [
				'**',
				'!**/*.json',
				'!**/__tests__/**',
				'!**/?(*.)(spec|test).*'
			],
			watch: [libPath, pluginsPath],
			silent: true,
			eslint: true
		}
	]);

	isDevelopment || config.plugin('banner').use(BannerPlugin, [bannerText]);

	isDevelopment ||
		config.plugin('progress').use(ProgressPlugin, [
			{
				incomplete: {
					bg: 'white',
					content: ' '
				},
				complete: {
					bg: 'black',
					content: ' '
				},
				width: 25,
				clear: true,
				total: 100
			}
		]);

	config.resolve.extensions
		.add('.js')
		.add('.json')
		.add('.jsx')
		.add('.tsx')
		.add('.ts')
		.add('.css')
		.add('.scss');
	return config.toConfig();
};

module.exports = setConfig;
