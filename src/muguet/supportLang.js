const fs = require('fs');
const path = require('path');

const langLocatePath = path.resolve('/node_modules/react-intl/locale-data');

fs.readdir(langLocatePath, (err, files)=>{
	if(err) console.log(err);
	let line = '';
	let template;
	files.forEach((ele, index)=>{
		line += ((index === files.length || index === 0 ) ? '' :  '|')  + '\"' + (ele.match(/(.)+(?=.js$)/gi)+ '\"') + '\n';
	})

	template = `export type SupportedLangs = ${line}`
	fs.writeFile(__dirname + '/langType.tsx', template, { encoding: 'utf8'}, (err)=>{
		if(err) console.log(err);
	})
})
