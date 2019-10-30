/**=================================================================================================
 *			AUTHOR --- Han Wang
 *			LICENSE --- Apache-2.0
 *			LASTMODIFY --- 2019-09-13T14:32:49.491Z
 *			REPOSITORY --- https://github.com/sewerganger/silent-concept
 *=================================================================================================*/
import React, { HTMLAttributes, FC } from 'react';
import { SilentCommonAttr, SizeType, ClassValue } from '../../interfaces';
import classNames from 'classnames';
import { accordType, splitJsxProps, handleSize } from '../../helper';
import './style/breath.scss';

const prefix = 's-loading-breath';

interface LoadingBreathTempProps extends SilentCommonAttr, HTMLAttributes<any> {
	pigment?: string;
	className?: any;
}

export interface LoadingBreathProps extends LoadingBreathTempProps {
	className?: ClassValue;
}

interface ClassNameEx {
	containerCN: string;
	innerCN: string;
}
const presetClassName = function(cProps: LoadingBreathProps): ClassNameEx {
	const { size, pigment } = cProps;
	return {
		containerCN: classNames(prefix, {
			[`${prefix}-${size}`]: accordType(size, 'String', false),
			[`${prefix}-${pigment}`]: pigment
		}),
		innerCN: classNames(`${prefix}-inner`, {
			[`${prefix}-inner-${pigment}`]: pigment
		})
	};
};

const presetProps = function(props: LoadingBreathProps) {
	const sProps = splitJsxProps<LoadingBreathProps>(props, [
		'size',
		'style',
		'pigment',
		'className'
	]);
	sProps.customProps.size = handleSize(sProps.customProps.size!);
	return sProps;
};

/**=================================================================================================
 *			LASTMODIFY --- 2019-08-27T15:00:04.462Z
 *			DESCRIPTION --- breath 环形加载效果
 *			PROPS
 *				--- size [SizeType]
 *				--- pigment [string]
 *  =================================================================================================*/

const Breath: FC<LoadingBreathProps> = function(props) {
	const { nativeProps, customProps } = presetProps(props);
	const { containerCN, innerCN } = presetClassName(customProps);
	const containerStyle = {
		...accordType(customProps.size, 'Object', {}),
		...customProps.style
	};

	return (
		<div {...nativeProps} style={containerStyle} className={containerCN}>
			<div className={innerCN} />
		</div>
	);
};

Breath.defaultProps = {
	pigment: 'white',
	size: 'normal' as SizeType
};

/*=============================================================================  breath  --- END =====*/
export default React.memo(Breath);
