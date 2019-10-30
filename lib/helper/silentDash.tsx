/**=================================================================================================
 *			AUTHOR --- Han Wang
 *			LICENSE --- Apache-2.0
 *			LASTMODIFY --- 2019-08-23T13:12:35.627Z
 *			DESCRIPTION --- 提供一些工具函数
 *			REPOSITORY --- https://github.com/sewerganger/silent-concept
 *=================================================================================================*/

import { SizeType } from '../interfaces';
import { accordType, is } from './helper';

/**=================================================================================================
 *			LASTMODIFY --- 2019-08-23T07:35:50.430Z
 *			DESCRIPTION --- 处理size 属性大小 把数组转化成 CSSProperties 默认单位为px
 *			EXAMPLE --- 处理接收的size属性 ["1px", "1px"] or [1, 1] or [1] or 'normal' or
 *                            {fonSize:'10px'} or {width:'10px'}
 * =================================================================================================*/

/* eslint-disable @typescript-eslint/indent*/
export const handleSize = (size: SizeType): SizeType =>
	Array.isArray(size)
		? 1 === size.length
			? { width: accordType(size[0], 'String', size![0] + 'px') }
			: {
					width: accordType(size[0], 'String', size[0] + 'px'),
					height: accordType(size[1], 'String', size[1] + 'px')
			  }
		: size;
/**=================================================================================================
 *			LASTMODIFY --- 2019-08-23T07:45:13.469Z
 *			DESCRIPTION ---  把html 和 react 原有属性 和 组件 要使用的属性分开 深度拷贝props
 * =================================================================================================*/

export interface AfterSplitJsxProps<T> {
	nativeProps: React.Props<any>;
	customProps: T;
}

export type PartialArray<T> = (keyof T)[];

export const splitJsxProps = function<Type>(
	receiveProps: React.Props<any>,
	useProps: PartialArray<Type>
): AfterSplitJsxProps<Type> {
	const nativeProps: React.Props<any> = {};
	const customProps: Type = {} as Type;

	for (const prop in receiveProps) {
		useProps.indexOf(prop as keyof Type) >= 0
			? (customProps[prop] = receiveProps[prop])
			: (nativeProps[prop] = receiveProps[prop]);
	}

	return { nativeProps, customProps };
};

/**=================================================================================================
 *			补充组件内部要改写的 style 通过生成token 来 确定唯一的class
 *=================================================================================================*/

const generateStyleContent = function(prefix: string, styles: object, ssList: CSSStyleSheet) {
	for (const prop in styles) {
		let content = '';
		const propVal = styles[prop];
		const currentProp = prop.trim();

		for (const key in propVal) {
			const styleVal = propVal[key];
			if (is.string(styleVal)) {
				content += key + ':' + styleVal + ';';
			}
		}
		const insertValue = '.' + prefix + ' ' + currentProp + '{' + content + '}';
		ssList.insertRule(insertValue);
	}
};

export const completeStyle = function(prefix: string, complete: Record<string, object>) {
	const list = document.styleSheets[document.styleSheets.length - 1] as CSSStyleSheet;
	if (!!list) {
		generateStyleContent(prefix, complete, list);
	} else {
		console.warn(
			'Warning: document does not contain StyleSheetList, so auto add the style element'
		);
		const style = document.createElement('style');
		document.getElementsByTagName('head')[0].appendChild(style);
		style.appendChild(document.createTextNode(''));
		const ssList = document.styleSheets[document.styleSheets.length - 1] as CSSStyleSheet;
		generateStyleContent(prefix, complete, ssList);
	}
};
