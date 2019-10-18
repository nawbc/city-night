const fs = require('fs-extra');
const path = require('path');
const langLocatePath = path.resolve(require.resolve('react-intl/locale-data/'), '../');

fs.readdir(langLocatePath, (err, files) => {
	if (err) console.log(err);
	let line = '';
	files.forEach((ele, index) => {
		line +=
			index === 0
				? '\n'
				: '\t| ' +
				  '\'' +
				  (ele.match(/(.)+(?=.js$)/gi) + '\'' + (index === files.length - 1 ? ';' : '')) +
				  '\n';
	});

	const template = `export type LangTypes = ${line}`;
	const a = path.resolve('./lib/interfaces');
	fs.mkdirpSync(a);
	fs.writeFile(path.resolve(a, './LangTypes.tsx'), template, { encoding: 'utf8' }, err => {
		if (err) console.log(err);
		console.log('Language Types generate successfully');
	});
});
