const pkg = require('../../package.json');
const banner = `
						Name: ${pkg.name} version: ${pkg.version}
											Author:  ${pkg.author}
											LICENSE ${pkg.license}`;
module.exports = banner;
