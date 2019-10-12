const path = require('path');
const getAbsolutePath = _path => path.resolve(_path);

exports.getAbsolutePath = getAbsolutePath;
exports.pluginsPath = getAbsolutePath('./plugins');
exports.libPath = getAbsolutePath('./lib');
exports.appPath = getAbsolutePath('./app');
exports.tsConfigPath = getAbsolutePath('./tsconfig.json');
exports.appPublicPath = getAbsolutePath('./app/public');
exports.htmlTemplate = getAbsolutePath('./app/public/index.html');
