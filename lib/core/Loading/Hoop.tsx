/**=================================================================================================
 *			AUTHOR --- Han Wang
 *			LICENSE --- Apache-2.0
 *			LASTMODIFY --- 2019-09-13T14:32:46.915Z
 *			REPOSITORY --- https://github.com/sewerganger/silent-concept
 *=================================================================================================*/

import React, { CSSProperties, HTMLAttributes, FC } from 'react';
import classNames from 'classnames';
import { SilentCommonAttr, SizeType, ClassValue } from '../../interfaces';
import { accordType, splitJsxProps, handleSize } from '../../helper';
import './style/hoop.scss';

const prefix = 's-loading-hoop';

interface LoadingHoopTempProps extends SilentCommonAttr, HTMLAttributes<any> {
	pigment?: string;
	speed?: string;
	innerStyle?: CSSProperties;
	className?: any;
}

export interface LoadingHoopProps extends LoadingHoopTempProps {
	className?: ClassValue;
}

interface ClassNameEx {
	containerCN: string;
	innerCN: string;
}
const presetClassName = function(cProps: LoadingHoopProps): ClassNameEx {
	const { size, pigment } = cProps;
	return {
		containerCN: classNames(prefix),
		innerCN: classNames({
			inner: true,
			[`inner-${size}`]: accordType(size, 'String', false),
			[`${pigment}`]: accordType(pigment, 'String', false)
		})
	};
};

const presetProps = function(props: LoadingHoopProps) {
	const sProps = splitJsxProps<LoadingHoopProps>(props, [
		'size',
		'style',
		'speed',
		'pigment',
		'innerStyle',
		'className'
	]);
	sProps.customProps.size = handleSize(sProps.customProps.size!);
	return sProps;
};

/**=================================================================================================
 *			LASTMODIFY --- 2019-08-27T15:00:04.462Z
 *			DESCRIPTION --- hoop 环形加载效果
 *			PROPS
 *				--- size [SizeType]
 *				--- pigment [string]
 *				--- speed [string]
 *				--- style [CSSProperties] 修改容器的的style 修改例如 position margin等属性
 *				--- innerStyle [CSSProperties] 内部的 style 	innerStyle={{borderLeftColor: 'transparent'}}
 *  =================================================================================================*/

const Hoop: FC<LoadingHoopProps> = function(props) {
	const { nativeProps, customProps } = presetProps(props);
	const { containerCN, innerCN } = presetClassName(customProps);
	const containerStyle = {
		...accordType(customProps.size, 'Object', {}),
		...customProps.style
	};

	return (
		<div {...nativeProps} className={containerCN} style={containerStyle}>
			<div
				className={innerCN}
				style={{
					animationDuration: customProps.speed,
					...accordType(customProps.innerStyle, 'Object', {})
				}}
			/>
		</div>
	);
};

Hoop.defaultProps = {
	pigment: 'grey',
	size: 'normal' as SizeType,
	speed: '1s'
};

export default React.memo(Hoop);
