/**=================================================================================================
 *			LICENSE --- Apache-2.0
 *			LASTMODIFY --- 2019-10-08T11:39:29.559Z
 *			REPOSITORY --- https://github.com/sewerganger/silent-concept
 *=================================================================================================*/
import React, { HTMLAttributes, FC } from 'react';
import { SilentCommonAttr, ClassValue } from '../../../interfaces';
import { accordType, splitJsxProps, handleSize } from '../../../helper';
import classNames from 'classnames';
import './style/average.scss';

const prefix = 's-flex-average';

interface AverageTempProps extends SilentCommonAttr, HTMLAttributes<any> {
	className?: any;
	wrap?: boolean;
	inline?: boolean;
}

export interface AverageProps extends AverageTempProps {
	className?: ClassValue;
}

const presetProps = function(props: AverageProps) {
	const sProps = splitJsxProps<AverageProps>(props, [
		'size',
		'className',
		'style',
		'wrap',
		'inline',
		'children'
	]);
	sProps.customProps.size = handleSize(sProps.customProps.size!);
	return sProps;
};

/**=================================================================================================
 *			LASTMODIFY --- 2019-10-08T11:39:33.311Z
 *			DESCRIPTION --- Average
 *			PROPS
 *				--- size [SizeType]
 *   =================================================================================================*/

const Average: FC<AverageProps> = function(props) {
	const { nativeProps, customProps } = presetProps(props);
	const { size, style, children, className, wrap, inline } = customProps;
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
				[`${prefix}-no-inline`]: !inline
			})}
		>
			{children}
		</div>
	);
};

Average.defaultProps = {
	wrap: true,
	inline: true
};

export default React.memo(Average);
