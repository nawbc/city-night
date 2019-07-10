'use strict'

exports.stats = {
	all: false,
	modules: false,
	maxModules: 0,
	errors: true,
	warnings: true,
	moduleTrace: false,
	errorDetails: false
};


exports.progress = function () {


	// description = description || 'Progress';
	// bar_length = bar_length || 25;

	// function (opts) {
	// 	var percent = (opts.completed / opts.total).toFixed(4);
	// 	var cell_num = Math.floor(percent * this.length);

	// 	var cell = '';
	// 	for (var i = 0; i < cell_num; i++) {
	// 		cell += '█';
	// 	}


	// 	var empty = '';
	// 	for (var j = 0; j < bar_length - cell_num; j++) {
	// 		empty += '░';
	// 	}

	// 	var cmdText = description + ': ' + (100 * percent).toFixed(2) + '% ' + cell + empty + ' ' + opts.completed + '/' + opts.total;

	// 	process.stdout.write(cmdText);
	// };
}

