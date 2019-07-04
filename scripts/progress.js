'use strict'

function ProgressBar(description, bar_length) {
	this.description = description || 'Progress';
	this.length = bar_length || 25;

	this.render = function (opts) {
		var percent = (opts.completed / opts.total).toFixed(4);
		var cell_num = Math.floor(percent * this.length);


		var cell = '';
		for (var i = 0; i < cell_num; i++) {
			cell += '█';
		}


		var empty = '';
		for (var i = 0; i < this.length - cell_num; i++) {
			empty += '░';
		}

		var cmdText = this.description + ': ' + (100 * percent).toFixed(2) + '% ' + cell + empty + ' ' + opts.completed + '/' + opts.total;

		process.stdout.write(cmdText);
	};
}

module.exports = ProgressBar
