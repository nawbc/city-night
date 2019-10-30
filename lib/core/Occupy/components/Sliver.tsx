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

interface SliverTempProps extends SilentCommonAttr, HTMLAttributes<any> {
	className?: any;
	fillet?: boolean;
}

interface SliverProps extends SliverTempProps {
	className?: ClassValue;
}

const presetProps = function(props: SliverProps) {
	const sProps = splitJsxProps<SliverProps>(props, [
		'size',
		'style',
		'className',
		'effect',
		'fillet'
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

const Sliver: FC<SliverProps> = function(props) {
	const { nativeProps, customProps } = presetProps(props);
	const { className, size, style, effect, fillet } = customProps;
	const containerStyle = {
		...accordType(size, 'Object', {}),
		...style
	};

	return (
		<div
			{...nativeProps}
			style={containerStyle}
			className={classNames(commonPrefix, subPrefix, className, {
				[`${commonPrefix}-effect`]: effect,
				[`${subPrefix}-fillet`]: fillet
			})}
		/>
	);
};

Sliver.defaultProps = {
	effect: false,
	fillet: false
};

export default Sliver;
