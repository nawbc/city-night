/**=================================================================================================
 *			LICENSE --- Apache-2.0
 *			LASTMODIFY --- 2019-10-08T11:39:29.559Z
 *			REPOSITORY --- https://github.com/sewerganger/silent-concept
 *=================================================================================================*/
import React, { HTMLAttributes, FC } from 'react';
import { SilentCommonAttr, ClassValue } from '../../../interfaces';
import { accordType, splitJsxProps, handleSize } from '../../../helper';
import classNames from 'classnames';
import './style/vertical.scss';

const prefix = 's-flex-vertical';

const VerticalAttrs = ['size', 'className', 'style', 'wrap', 'inline', 'center', 'start', 'end', 'reserve', 'children'];

interface VerticalTempProps extends SilentCommonAttr, HTMLAttributes<any> {
	className?: any;
	wrap?: boolean;
	inline?: boolean;
	center?: boolean;
	start?: boolean;
	end?: boolean;
	reserve?: boolean;
}

export interface VerticalProps extends VerticalTempProps {
	className?: ClassValue;
}

const presetProps = function(props: VerticalProps) {
	const sProps = splitJsxProps<VerticalProps>(props, VerticalAttrs);
	sProps.customProps.size = handleSize(sProps.customProps.size!);
	return sProps;
};

/**=================================================================================================
 *			LASTMODIFY --- 2019-10-08T11:39:33.311Z
 *			DESCRIPTION --- Vertical
 *			PROPS
 *				--- size [SizeType]
 *   =================================================================================================*/

const Vertical: FC<VerticalProps> = function(props) {
	const { nativeProps, customProps } = presetProps(props);
	const { size, style, children, className, wrap, inline, center, start, end, reserve } = customProps;
	const containerStyle = {
		...accordType(size, 'Object', {}),
		...style
	};

	return (
		<div
			{...nativeProps}
			style={containerStyle}
			className={classNames(prefix, className, {
				[`${prefix}-no-wrap`]: !wrap,
				[`${prefix}-no-inline`]: !inline,
				[`${prefix}-center`]: center,
				[`${prefix}-start`]: start,
				[`${prefix}-end`]: end,
				[`${prefix}-reserve`]: reserve
			})}
		>
			{children}
		</div>
	);
};

Vertical.defaultProps = {
	wrap: false,
	inline: true,
	center: true
};

export default React.memo(Vertical);
