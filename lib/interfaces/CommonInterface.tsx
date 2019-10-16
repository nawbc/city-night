/**=================================================================================================
 *			AUTHOR --- Han Wang
 *			LICENSE --- Apache-2.0
 *			LASTMODIFY --- 2019-08-23T10:51:39.588Z
 *			DESCRIPTION ---
 *			REPOSITORY --- https://github.com/sewerganger/silent-concept
 *=================================================================================================*/
import * as React from 'react';
import { SizeType, ShapeType } from './customTypes';

/**=================================================================================================
 *			AUTHOR --- Han Wang
 *			LASTMODIFY --- 2019-08-24T15:17:57.618Z
 *			BLOCK --- SilentAttributes
 *			DESCRIPTION --- Silent 的全局属性 有些模块是不起作用的
 *=================================================================================================*/
export interface SilentAttributes {
	size?: SizeType;
	effect?: string | boolean;
	display?: boolean | string;
	shape?: ShapeType;
}

/**=================================================================================================
 *			LASTMODIFY --- 2019-08-23T10:51:24.091Z
 *			DESCRIPTION --- 通常使用的属性包含silent 全局属性
 *=================================================================================================*/

export interface SilentCommonAttr extends SilentAttributes, React.Props<any> {}

/**=================================================================================================
 *			LASTMODIFY --- 2019-08-24T15:05:48.379Z
 *			DESCRIPTION --- 把jsx 接收到的属性分为原有属性 和自定义属性
 *=================================================================================================*/

export interface SplitJsxPropsInterface<T> {
	nativeProps: any;
	customProps: T;
}

/**=================================================================================================
 *			LASTMODIFY --- 2019-08-24T14:57:44.621Z
 *			DESCRIPTION --- class常用方法的模板
 *=================================================================================================*/

export interface PublicTemplate<T> {
	presetProps: (props: T) => SplitJsxPropsInterface<T>;
	preHandleClassName?: (clsProps: T) => string;
}

/**=================================================================================================
 *			LASTMODIFY --- 2019-08-24T14:57:44.621Z
 *			DESCRIPTION --- className 的 接口使用classnames
 *=================================================================================================*/

interface ClassArray extends Array<ClassValue> {}
export type ClassValue = string | number | Record<string, any> | ClassArray | undefined | null | boolean;
