const { exec } = require('child_process');

const awaitExec = (command, callback) =>
	new Promise((resolve, reject) =>
		exec(command, (err, stdout) => {
			if (err) reject(err);
			resolve(stdout);
		})).then(std => {
			console.log(std);
			(typeof callback === 'function') && callback()
		}).then(err => console.log(err));

(async () => {
	awaitExec('npm start');
	await awaitExec('npm run test:unit');
	await awaitExec('npm run test:e2e -- -u', function () {
		process.exit();
	});
})()
