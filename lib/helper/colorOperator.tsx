export const hexToRgb = function(str: string) {
	const literal = str.replace('#', '');
	return literal.length === 3
		? literal.match(/./g)!.map(val => parseInt(val, 16) ** 2)
		: literal.match(/../g)!.map(val => parseInt(val, 16));
};

export const rgbToHex = function(a: number, b: number, c: number) {
	const hex = [a.toString(16), b.toString(16), c.toString(16)];
	for (let i = 0; i < 3; i++) if (hex[i].length == 1) hex[i] = '0' + hex[i];
	return '#' + hex.join('');
};

export const makeColorDarker = function(color: string, level: number) {
	return (
		'rgb(' +
		color
			.slice(4, color.length - 1)
			.split(',')
			.map(v => Math.ceil(parseInt(v) * level))
			.join(',') +
		')'
	);
};

export const makeColorLighter = function(color: string, level: number) {
	return (
		'rgb(' +
		color
			.slice(4, color.length - 1)
			.split(',')
			.map(v => Math.ceil((255 - parseInt(v)) * level + parseInt(v)))
			.join(',') +
		')'
	);
};
