/**=================================================================================================
 *			LICENSE --- Apache-2.0
 *			LASTMODIFY --- 2019-10-08T13:40:06.133Z
 *			REPOSITORY --- https://github.com/sewerganger/silent-concept
 *=================================================================================================*/
import React, { HTMLAttributes, FC, useRef, useLayoutEffect } from 'react';
import { SilentCommonAttr, ClassValue } from '../../../interfaces';
import classNames from 'classnames';
import computedStyle from 'computed-style';
import { accordType, splitJsxProps, handleSize } from '../../../helper';

const CenterAttrs = ['size', 'className', 'style', 'children'];

interface CenterTempProps extends SilentCommonAttr, HTMLAttributes<any> {
	className?: any;
}

export interface CenterProps extends CenterTempProps {
	className?: ClassValue;
}

const presetProps = function(props: CenterProps) {
	const sProps = splitJsxProps<CenterProps>(props, CenterAttrs);
	sProps.customProps.size = handleSize(sProps.customProps.size!);
	return sProps;
};

/**=================================================================================================
 *			LASTMODIFY --- 2019-10-08T13:40:08.966Z
 *			DESCRIPTION --- Center
 *			PROPS
 *				--- size [SizeType]
 *   =================================================================================================*/

const Center: FC<CenterProps> = function(props) {
	const { nativeProps, customProps } = presetProps(props);
	const { size, style, children, className } = customProps;
	const ref = useRef(null);

	const containerStyle = {
		...accordType(size, 'Object', {}),
		position: 'absolute',
		top: '50%',
		left: '50%',
		...style
	};

	useLayoutEffect(() => {
		const centerEle = (ref.current as unknown) as HTMLElement;
		const height = computedStyle(centerEle, 'height');
		const width = computedStyle(centerEle, 'width');
		centerEle.style.marginTop = -parseInt(height) / 2 + 'px';
		centerEle.style.marginLeft = -parseInt(width) / 2 + 'px';
	});

	return (
		<div ref={ref} {...nativeProps} style={containerStyle} className={classNames(className)}>
			{children}
		</div>
	);
};

export default React.memo(Center);
