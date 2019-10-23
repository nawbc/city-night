import React, { HTMLAttributes, FC, useRef, useEffect } from 'react';
import { SilentCommonAttr, ClassValue } from '../../../../../lib/interfaces';
import { accordType, splitJsxProps, handleSize } from '../../../../../lib/helper';
import classNames from 'classnames';
import './style/index.scss';

const prefix = 's-scrollSlider';

const ScrollSliderAttrs = ['size', 'className', 'style'];

/**=================================================================================================
 *    滚动条 宽度默认为16
 *=================================================================================================*/
export const scrollSliderWidth = 16;

interface ScrollSliderTempProps extends SilentCommonAttr, HTMLAttributes<any> {
	className?: any;
	hoverDisplayScrollSlider?: boolean;
	x?: boolean;
	y?: boolean;
	withSlider?: boolean;
	target?: HTMLElement;
	sliderWidth?: number;
}

interface ScrollSliderProps extends ScrollSliderTempProps {
	className?: ClassValue;
}

const presetClassName = function(cProps: ScrollSliderProps) {
	const { x, y, className } = cProps;

	return {
		containerCN: classNames(prefix, className),
		buttonCN: classNames('button')
	};
};

const presetProps = function(props: ScrollSliderProps) {
	const sProps = splitJsxProps<ScrollSliderProps>(props, ScrollSliderAttrs);
	sProps.customProps.size = handleSize(sProps.customProps.size!);
	return sProps;
};

/**=================================================================================================
 *			LASTMODIFY --- 2019-08-27T15:00:04.462Z
 *			DESCRIPTION --- ScrollSlider
 *			PROPS
 *				--- size [SizeType]
 *   =================================================================================================*/

const ScrollSlider: FC<ScrollSliderProps> = function(props) {
	const { nativeProps, customProps } = presetProps(props);
	const { containerCN, buttonCN } = presetClassName(props);
	const { size, style } = customProps;

	const containerRef = useRef(null);

	const containerStyle = {
		...accordType(size, 'Object', {}),
		...style
	};

	return (
		<div ref={containerRef} {...nativeProps} style={containerStyle} className={containerCN}>
			<div className={buttonCN} />
		</div>
	);
};

ScrollSlider.defaultProps = {
	// sliderWidth: scrollSliderWidth
};

export default React.memo(ScrollSlider);
