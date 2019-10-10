const webpack = require('webpack');
const setConfig = require('../webpack.config');
const buildTarget = require('./buildTarget.json');
const chalk = require('chalk');
const isDevelopment = process.env.NODE_ENV === 'development';
const path = require('path');

const handleDevName = n => {
	const { name, ext } = path.parse(n);
	return name + '.dev' + ext;
};

const startBuild = async function() {
	for await (const [name, config] of Object.entries(buildTarget)) {
		const cssName = config['cssName'];
		const handledJsName = isDevelopment ? handleDevName(name) : name;
		const handledCssName = isDevelopment ? handleDevName(cssName) : cssName;
		config['cssName'] = handledCssName;
		const webpackConfig = setConfig(handledJsName, config);
		const complier = webpack(webpackConfig);
		complier.run((err, stats) => {
			if (err) throw err;
			console.log(
				stats.toString({
					chunks: false, // 使构建过程更静默无输出
					colors: true // 在控制台展示颜色
				})
			);
			console.log(chalk.green('👌pack done ! ! have func'));
		});
	}
};
startBuild();
