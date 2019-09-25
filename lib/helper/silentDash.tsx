/**=================================================================================================
 *			AUTHOR --- Han Wang
 *			LICENSE --- Apache-2.0
 *			LASTMODIFY --- 2019-08-23T13:12:35.627Z
 *			DESCRIPTION --- 提供一些工具函数
 *			REPOSITORY --- https://github.com/sewerganger/silent-concept
 *=================================================================================================*/

import { SplitJsxPropsInterface, SizeType } from '../interfaces';
import { accordType } from './helper';


/**=================================================================================================
 *			LASTMODIFY --- 2019-08-23T07:35:50.430Z
 *			DESCRIPTION --- 处理size 属性大小 把数组转化成 CSSProperties 默认单位为px
 *			EXAMPLE --- 处理接收的size属性 ["1px", "1px"] or [1, 1] or [1] or 'normal' or
 *                            {fonSize:'10px'} or {width:'10px'}
 * =================================================================================================*/

export const handleSize = (size: SizeType): SizeType =>
	Array.isArray(size)
		? 1 === size.length
			? { width: accordType(size[0], 'String', size![0] + 'px'), height: 'auto' }
			: {
				width: accordType(size[0], 'String', size[0] + 'px'),
				height: accordType(size[1], 'String', size[1] + 'px')
			}
		: size;
/*====================================================================================  --- END =====*/

/**=================================================================================================
 *			LASTMODIFY --- 2019-09-16T14:31:19.118Z
 *			DESCRIPTION ---
 *=================================================================================================*/
const checkExistProp = function () {

}

/**=================================================================================================
 *			LASTMODIFY --- 2019-08-23T07:45:13.469Z
 *			DESCRIPTION ---  把html 和 react 原有属性 和 组件 要使用的属性分开 深度拷贝props
 * =================================================================================================*/

interface JsxPropsParam {
	<Type>(receiveProps: React.Props<any>, useProps: string[]): SplitJsxPropsInterface<Type>;
}

export const splitJsxProps: JsxPropsParam = function <Type>(receiveProps, useProps: string[]) {
	let nativeTempProps: React.HTMLProps<any> = {};
	let customTempProps: Type = {} as Type;

	for (let prop in receiveProps) {
		useProps.indexOf(prop) >= 0 ?
			customTempProps[prop] = receiveProps[prop] :
			nativeTempProps[prop] = receiveProps[prop];
	}

	return {
		nativeProps: nativeTempProps,
		customProps: customTempProps
	};
};
/*===================================================================================  --- END =====*/
