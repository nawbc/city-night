/**=================================================================================================
 *			AUTHOR --- Han Wang
 *			LICENSE --- Apache-2.0
 *			LASTMODIFY --- 2019-09-09T13:51:34.709Z
 *			REPOSITORY --- https://github.com/sewerganger/silent-concept
 *=================================================================================================*/
import React, { ReactElement, useState, useLayoutEffect, useRef, HTMLAttributes, FC } from 'react';
import { SilentCommonAttr, SizeType, ClassValue } from '../../interfaces';
import classNames from 'classnames';
import { accordType, splitJsxProps, handleSize } from '../../helper';
import './style/font.scss';

const prefix = 's-loading-font';

interface LoadingFontTempProps extends SilentCommonAttr, HTMLAttributes<any> {
	pigment?: string;
	endWith?: ReactElement<any> | string;
	duration?: number;
	max?: number;
	className?: any;
}

interface LoadingFontProps extends LoadingFontTempProps {
	className?: ClassValue;
}

const presetClassName = function(cProps: LoadingFontProps): string {
	const { size, pigment } = cProps;
	return classNames(prefix, {
		[`${prefix}-${size}`]: accordType(size, 'String', false),
		[`${prefix}-${pigment}`]: pigment
	});
};

const presetProps = function(props: LoadingFontProps) {
	const sProps = splitJsxProps<LoadingFontProps>(props, [
		'size',
		'style',
		'pigment',
		'className',
		'children',
		'endWith',
		'duration',
		'max'
	]);
	sProps.customProps.size = handleSize(sProps.customProps.size!);
	return sProps;
};

/**=================================================================================================
 *			LASTMODIFY --- 2019-09-13T06:23:57.429Z
 *			DESCRIPTION --- 显示加载的效果 默认为省略号 cpu 消耗 "较大"
 *=================================================================================================*/
const MultiEndWith = (props: LoadingFontProps) => {
	const ref = useRef(null);
	const { endWith, duration, max } = props;
	const isEndWithEle = React.isValidElement(endWith);
	const [endWithSym, setEndWithSym] = useState({ key: 0, elements: [] });

	useLayoutEffect(() => {
		const timeSaver = setInterval(() => {
			const eleKey = endWithSym.key;
			clearInterval(timeSaver);
			const endEle = isEndWithEle ? React.cloneElement(endWith as any, { key: eleKey }) : endWith;
			if (endWithSym.elements.length === max) {
				setEndWithSym({
					key: 0,
					elements: [endEle as never]
				});
			} else {
				setEndWithSym({
					key: eleKey + 1,
					elements: [...endWithSym.elements, endEle as never]
				});
			}
		}, duration);
	}, [endWithSym, endWith, duration, isEndWithEle, max]);
	return <span ref={ref}>{endWithSym.elements}</span>;
};

/**=================================================================================================
 *			LASTMODIFY --- 2019-08-27T15:00:04.462Z
 *			DESCRIPTION --- 文字加载效果
 *			PROPS
 *				--- size [SizeType]
 *				--- max [number] 加载后缀的最大长度
 *				--- endWith [React.ReactElement|string] 加载的后缀
 *				--- duration [number] 单个周期
 *				--- children [ReactNode]  讲children 设置为[true]不显示
 *   =================================================================================================*/

const Font: FC<LoadingFontProps> = function(props) {
	const { nativeProps, customProps } = presetProps(props);
	const className = presetClassName(customProps);
	const { size, style, children } = customProps;
	const containerStyle = {
		...accordType(size, 'Object', {}),
		...style
	};

	return (
		<span {...nativeProps} style={containerStyle} className={className}>
			{children}
			<MultiEndWith {...customProps} />
		</span>
	);
};

Font.defaultProps = {
	size: 'normal' as SizeType,
	pigment: 'black',
	endWith: '.',
	children: 'Loading',
	duration: 800,
	max: 6
};

export default React.memo(Font);
