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
import './square.scss';

const subPrefix = 'square';

interface SquareTempProps extends SilentCommonAttr, HTMLAttributes<any> {
	className?: any;
	fillet?: boolean;
}
interface SquareProps extends SquareTempProps {
	className?: ClassValue;
}

const presetProps = function(props: SquareProps) {
	const sProps = splitJsxProps<SquareProps>(props, [
		'size',
		'style',
		'className',
		'children',
		'fillet',
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

const Square: FC<SquareProps> = function(props) {
	const { nativeProps, customProps } = presetProps(props);
	const { className, size, style, children, fillet, effect } = customProps;
	const containerStyle = {
		...accordType(size, 'Object', {}),
		...style
	};

	return (
		<div
			{...nativeProps}
			style={containerStyle}
			className={classNames(commonPrefix, className, {
				[`${subPrefix}-${size}`]: accordType(size, 'String', false),
				[`${commonPrefix}-effect`]: effect,
				[`${subPrefix}-fillet`]: fillet
			})}
		>
			{children}
		</div>
	);
};

Square.defaultProps = {
	size: 'normal',
	fillet: false
};

export default Square;
