const svgToReact = require('svg-to-react');
const Svgo = require('svgo');
const fs = require('fs-extra');
const pkg = require('../package.json');
const path = require('path');
const targetDir = path.resolve(pkg.config.libSvg.target);
const srcDir = path.resolve(pkg.config.libSvg.src);
const indexTsxPath = path.resolve(targetDir, 'index.tsx');

const svgo = new Svgo({
	plugins: [
		'removeDoctype',
		'removeXMLProcInst',
		'removeComments',
		'removeMetadata',
		'removeEditorsNSData',
		'cleanupAttrs',
		'convertStyleToAttrs',
		'cleanupIDs',
		'removeRasterImages',
		'removeUselessDefs',
		'cleanupNumericValues',
		'cleanupListOfValues',
		'convertColors',
		'removeUnknownsAndDefaults',
		'removeNonInheritableGroupAttrs',
		'removeUselessStrokeAndFill',
		'removeViewBox',
		'cleanupEnableBackground',
		'removeHiddenElems',
		'removeEmptyText',
		'convertShapeToPath',
		'moveElemsAttrsToGroup',
		'moveGroupAttrsToElems',
		'collapseGroups',
		'convertPathData',
		'convertTransform',
		'removeEmptyAttrs',
		'removeEmptyContainers',
		'mergePaths',
		'removeUnusedNS',
		'transformsWithOnePath',
		'sortAttrs',
		'removeTitle',
		'removeDesc',
		'removeDimensions',
		'removeAttrs',
		'addClassesToSVGElement',
		'removeStyleElement'
	]
});

const optimizeSvg = content => svgo.optimize(content);

const convertComponent = val =>
	new Promise(resolve => {
		const template = `import * as React from 'react';
			export default ${svgToReact.convert(val).toString()}`;
		resolve(template);
	});

const writeTarget = (tsx, targetPath) =>
	new Promise((resolve, reject) => {
		fs.writeFile(targetPath, tsx, { encoding: 'utf8' }, err => (err ? reject(err) : resolve()));
	});

const appendToIndexTsx = name => {
	const upperCaseName = name.replace(/^(.)/, c => c.toUpperCase());
	const template = `export { default as ${upperCaseName}} from './${name}';\n`;
	fs.appendFile(indexTsxPath, template, err => {
		err && console.log(err);
	});
};

(() => {
	fs.readdir(srcDir, (err, files) => {
		if (err) console.log(err);
		fs.emptyDirSync(targetDir);
		files.forEach(file => {
			const filePath = path.resolve(srcDir, file);
			const name = path.parse(file).name;
			const targetFilePath = path.resolve(targetDir, name + '.tsx');
			const content = fs.readFileSync(filePath).toString('utf8');
			appendToIndexTsx(name);
			optimizeSvg(content, filePath)
				.then(val => convertComponent(val.data))
				.then(tsx => writeTarget(tsx, targetFilePath))
				.catch(err => console.log(err));
		});
	});
})();
