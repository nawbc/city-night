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
import classNames from 'classnames';
import { commonPrefix } from '../';
import './sliver.scss';

const subPrefix = 'sliver';

const SliverAttrs = ['size', 'style', 'className', 'effect'];

interface OSliverTempProps extends SilentCommonAttr, HTMLAttributes<any> {
	className?: any;
}

interface OSliverProps extends OSliverTempProps {
	className?: ClassValue;
}

const presetProps = function(props: OSliverProps) {
	const sProps = splitJsxProps<OSliverProps>(props, SliverAttrs);
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

const OSliver: FC<OSliverProps> = function(props) {
	const { nativeProps, customProps } = presetProps(props);
	const { className, size, style, effect } = customProps;
	const containerStyle = {
		...accordType(size, 'Object', {}),
		...style
	};

	return (
		<div
			{...nativeProps}
			style={containerStyle}
			className={classNames(commonPrefix, subPrefix, className, {
				[`${commonPrefix}-effect`]: effect
			})}
		/>
	);
};

OSliver.defaultProps = {
	effect: false
};

export default OSliver;
