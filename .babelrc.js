const isScssRename = process.env.SILENT_ACTION === 'SCSS_RENAME';

const transformRenameImport = [
	'transform-rename-import',
	{
		original: '^(.+?)\\.scss$',
		replacement: '$1.css'
	}
];

const presets = [
	[
		'@babel/preset-env',
		{
			targets: {
				browsers: ['ie >= 8']
			},
			loose: true,
			useBuiltIns: 'usage',
			corejs: '3'
		}
	],
	['@babel/preset-react'],
	[
		'@babel/preset-typescript',
		{
			isTSX: true,
			allExtensions: true
		}
	]
];

const plugins = [
	[
		'@babel/plugin-proposal-class-properties',
		{
			loose: true
		}
	],
	['@babel/plugin-syntax-dynamic-import'],
	['@babel/plugin-transform-runtime'],
	[
		'import',
		{
			libraryName: 'Silent'
		}
	],
	isScssRename && transformRenameImport
].filter(Boolean);

const otherOptions = {
	comments: false
};

module.exports = { presets, plugins, ...otherOptions };
