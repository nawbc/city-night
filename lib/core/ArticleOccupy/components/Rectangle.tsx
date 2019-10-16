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
import './rectangle.scss';
import classNames from 'classnames';

const prefix = 's-articleOccupy-ORectangle';

const ORectangleAttrs = ['size', 'style', 'className', 'children'];

interface ORectangleTempProps extends SilentCommonAttr, HTMLAttributes<any> {
	className?: any;
}
interface ORectangleProps extends ORectangleTempProps {
	className?: ClassValue;
}

const presetProps = function(props: ORectangleProps) {
	const sProps = splitJsxProps<ORectangleProps>(props, ORectangleAttrs);
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

const ORectangle: FC<ORectangleProps> = function(props) {
	const { nativeProps, customProps } = presetProps(props);
	const { className, size, style, children } = customProps;
	const containerStyle = {
		...accordType(size, 'Object', {}),
		...style
	};

	return (
		<div {...nativeProps} style={containerStyle} className={classNames(prefix, className)}>
			{children}
		</div>
	);
};

export default ORectangle;
