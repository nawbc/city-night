/**=================================================================================================
 *			LICENSE --- Apache-2.0
 *			LASTMODIFY --- 2019-09-09T13:51:34.709Z
 *			REPOSITORY --- https://github.com/sewerganger/silent-concept
 *=================================================================================================*/
import React, { HTMLAttributes, FC } from 'react';
import { SilentCommonAttr, ClassValue } from '../../interfaces';
import { accordType, splitJsxProps, handleSize } from '../../helper';

const SuperBoxAttrs = ['size', 'className', 'style'];

interface SuperBoxTempProps extends SilentCommonAttr, HTMLAttributes<any> {
	className?: any;
}

interface SuperBoxProps extends SuperBoxTempProps {
	className?: ClassValue;
}

const presetClassName = function(): string {
	return '';
};

const presetProps = function(props: SuperBoxProps) {
	const sProps = splitJsxProps<SuperBoxProps>(props, SuperBoxAttrs);
	sProps.customProps.size = handleSize(sProps.customProps.size!);
	return sProps;
};

/**=================================================================================================
 *			LASTMODIFY --- 2019-08-27T15:00:04.462Z
 *			DESCRIPTION --- SuperBox
 *			PROPS
 *				--- size [SizeType]
 *   =================================================================================================*/

const SuperBox: FC<SuperBoxProps> = function(props) {
	const { nativeProps, customProps } = presetProps(props);
	const className = presetClassName();
	const { size, style, children } = customProps;
	const containerStyle = {
		...accordType(size, 'Object', {}),
		...style
	};

	return (
		<span {...nativeProps} style={containerStyle} className={className}>
			{children}
		</span>
	);
};

SuperBox.defaultProps = {};
export default React.memo(SuperBox);
