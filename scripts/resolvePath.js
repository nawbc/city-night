'use strict'

const path = require('path');
module.exports = function (json) {
	let a = {};
	for (let i in json) {
		a[i] = path.resolve(json[i])
	}
	return a;
}


