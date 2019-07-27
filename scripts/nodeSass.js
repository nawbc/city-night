'use strict'

var { exec } = require('child_process');
process.stdout.write(String.fromCharCode('1f601'));

exec('node-sass src -o src', { cwd: process.cwd() }, (err) => {
	if (err) throw err;
})
