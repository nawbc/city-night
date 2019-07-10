'use strict'

var { exec } = require('child_process');
var Progress = require('./progress');

process.stdout.write(String.fromCharCode('1f601'));

exec('node-sass src -o src', { cwd: process.cwd() }, (err, stdout, stderr) => {
	new Progress('Progress', 100);
})
