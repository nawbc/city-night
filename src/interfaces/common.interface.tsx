import { SizeType, ShapeType } from './customTypes';
import React from 'react';

export interface DefaultCustomInterface {
	size?: SizeType;
	effect?: string | boolean;
	display?: boolean | string | Function;
	gradients?: string;
	shape?: ShapeType;
}

export interface NativeReactProps {
	ref?: any;
	children?: React.ReactNode;
	style?: React.CSSProperties;
	className?: string;
}

export interface CommonInterface extends
	DefaultCustomInterface,
	NativeReactProps,
	React.DOMAttributes<any>,
	React.HTMLAttributes<any> { }

export interface JSXPropsInterface<T> {
	nativeProps: React.Props<any>; // using origin React properties
	customProps: T;
}
