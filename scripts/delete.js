'use strict'
const del = require('del');
const { green } = require('chalk');
(async () => {
	const deletedPaths = await del(['release']);
    console.log(green('Deleted files and folders:\n', deletedPaths.join('\n')));
})();
