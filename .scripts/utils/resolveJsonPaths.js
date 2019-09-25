'use strict'
const path = require('path');

module.exports = function (rootPath, json) {
	let a = {};
	for (let i in json) {
		a[i] = path.resolve(rootPath, json[i])
	}
	a.rootPath = path.resolve(rootPath);
	return a;
}
