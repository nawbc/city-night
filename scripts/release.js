'use strict'

const { exec } = require('child_process');
const path = require('path');

exec('tsc && npm-run-all build:pro*', { cwd: path.resolve(__dirname, '../') }, (error, stdout) => {
	console.log(stdout);
})
