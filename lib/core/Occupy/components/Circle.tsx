/**=================================================================================================
 *			AUTHOR --- Han Wang
 *			LICENSE --- Apache-2.0
 *			LASTMODIFY --- 2019-10-15T13:30:19.761Z
 *			DESCRIPTION --- circle
 *			REPOSITORY --- https://github.com/sewerganger/silent-concept
 *=================================================================================================*/
import React, { HTMLAttributes, FC } from 'react';
import { accordType, splitJsxProps, handleSize } from '../../../helper';
import { SilentCommonAttr, ClassValue } from '../../../interfaces';
import { commonPrefix } from '../';
import classNames from 'classnames';
import './circle.scss';

const subPrefix = 'circle';

interface CircleTempProps extends SilentCommonAttr, HTMLAttributes<any> {
	className?: any;
}
interface CircleProps extends CircleTempProps {
	className?: ClassValue;
}

const presetProps = function(props: CircleProps) {
	const sProps = splitJsxProps<CircleProps>(props, [
		'size',
		'style',
		'className',
		'children',
		'effect'
	]);
	sProps.customProps.size = handleSize(sProps.customProps.size!);
	return sProps;
};

/**=================================================================================================
 *			LASTMODIFY --- 2019-10-15T13:45:36.413Z
 *			DESCRIPTION ---
 *			PROPS
 *				--- size [SizeType]
 *				--- style [CSSProperties]
 *				--- className [ClassValue]
 * =================================================================================================*/

const Circle: FC<CircleProps> = function(props) {
	const { nativeProps, customProps } = presetProps(props);
	const { className, size, style, children, effect } = customProps;
	const containerStyle = {
		...accordType(size, 'Object', {}),
		...style
	};

	return (
		<div
			{...nativeProps}
			style={containerStyle}
			className={classNames(commonPrefix, subPrefix, className, {
				[`${subPrefix}-${size}`]: accordType(size, 'String', false),
				[`${commonPrefix}-effect`]: effect
			})}
		>
			{children}
		</div>
	);
};

Circle.defaultProps = {
	size: 'normal',
	effect: false
};

export default Circle;
