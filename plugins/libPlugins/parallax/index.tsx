/**=================================================================================================
 *			LICENSE --- Apache-2.0
 *			LASTMODIFY --- 2019-09-09T13:51:34.709Z
 *			REPOSITORY --- https://github.com/sewerganger/silent-concept
 *=================================================================================================*/
import React, { HTMLAttributes, FC } from 'react';
import { SilentCommonAttr, ClassValue } from '../../../lib/interfaces';
import {
	accordType,
	splitJsxProps,
	handleSize,
} from '../../../lib/helper';

const ParallaxAttrs = [
	'size',
	'className',
	'style'
];

interface ParallaxTempProps extends SilentCommonAttr, HTMLAttributes<any> {
	className?: any;
}

interface ParallaxProps extends ParallaxTempProps {
	className?: ClassValue;
}

const presetClassName = function (): string {

	return '';
};

const presetProps = function (props: ParallaxProps) {
	const sProps = splitJsxProps<ParallaxProps>(props, ParallaxAttrs);
	sProps.customProps.size = handleSize(sProps.customProps.size!);
	return sProps;
};

/**=================================================================================================
 *			LASTMODIFY --- 2019-08-27T15:00:04.462Z
 *			DESCRIPTION --- Parallax
 *			PROPS
 *				--- size [SizeType]
 *   =================================================================================================*/

const Parallax: FC<ParallaxProps> = function (props) {
	const { nativeProps, customProps } = presetProps(props);
	const className = presetClassName();
	const { size, style, children } = customProps;
	const containerStyle = {
		...accordType(size, 'Object', {}),
		...style
	};

	return (
		<span
			{...nativeProps}
			style={containerStyle}
			className={className}
		>
			parallax
		</span>
	);
};

Parallax.defaultProps = {};

export default React.memo(Parallax);
