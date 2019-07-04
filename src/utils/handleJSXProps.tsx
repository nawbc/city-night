import { JSXPropsInterface } from '../interfaces/common.interface';
import { SizeType } from '../interfaces/customTypes';
import { typeReplace } from '../utils/muguetDash';


/**
 * @example
 * [100,200]
 * ['100px','200px']
 * {width: '100px',height: '200px'}
 * [400]
 * ['400px']
 * @param props React props 组建的 props
 * @return { width: ...., height: ...}
 */

export const handleSize = (size: SizeType): SizeType => {
	return Array.isArray(size) ?
		(1 === size.length ?
			{ width: typeReplace(size[0]!, 'String', size[0]! + 'px'), height: 'auto' } :
			{
				width: typeReplace(size[0]!, 'String', size[0]! + 'px'),
				height: typeReplace(size[1]!, 'String', size[1]! + 'px')
			}) :
		size;
}

export function JSXProps<Type>(props, arr: Array<string>) {
	let customTempProps = {}, nativeTempProps = {};

	for (let p in props) {
		if (arr.indexOf(p) >= 0) {
			customTempProps[p] = props[p];
		} else {
			nativeTempProps[p] = props[p];
		}
	}

	return {
		nativeProps: nativeTempProps,
		customProps: customTempProps
	} as JSXPropsInterface<Type>;
}
