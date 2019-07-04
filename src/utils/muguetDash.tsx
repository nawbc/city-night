export const equals = (first, second): boolean => {
    return first === second;
}

/**
 * customize type
 * @param a { Object } target
 * @param b { String } target type
 */
export const isType = (a: Object, b: string) => Object.prototype.toString.call(a) === `[object ${b}]`;

// is typeof String
export const isString = (a: Object) => isType(a, 'String');

export const isObject = (a: Object) => isType(a, 'Object');

export const isFunction = (a: Object) => isType(a, 'Function');

export const isEmptyString = (val: string) => '' === val;

/**
 * if a fits the type of b  return a if not return c or undefined
 * @param {Object} a
 * @param {String} b
 * @param {Any} c
 */
export const typeReplace = (a: Object, b: string, c: any) => isType(a, b) ? a : c;


export const randomNumber = (min, max) => {
	return min + Math.floor(Math.random() * (max - min))  + 1;
}

export const randomAlphabet = (from: number, to: number)=>{
	return String.fromCharCode(randomNumber(from, to));
}

export const randomGradients = (arr)=>{
	return arr[randomNumber(0, arr.length - 1)];
}

export const generateToken = () => {
	var num = Math.round(Math.random() * 0x1000000000) + new Date().getTime();
	return num.toString(36);
}
