import React, {
	HTMLAttributes,
	FC,
	useRef,
	CSSProperties,
	ReactNode,
	useImperativeHandle,
	useLayoutEffect
} from 'react';
import { SilentCommonAttr, ClassValue } from '../../../interfaces';
import { accordType, splitJsxProps, handleSize } from '../../../helper';
import classNames from 'classnames';
import computedStyle from 'computed-style';
import './style/index.scss';

const prefix = 's-scrollBar';

/**=================================================================================================
 *    滚动条 宽度默认为16
 *=================================================================================================*/
export const scrollSliderWidth = 16;

interface ScrollBarTempProps extends SilentCommonAttr, HTMLAttributes<any> {
	className?: any;
	hoverDisplayScrollBar?: boolean;
	pos?: 'top' | 'left' | 'right' | 'bottom';
	target?: ReactNode;
	sliderWidth?: number;
	mode?: 'hoverDisplay' | 'autoShrink' | 'normal';
	blockStyle?: CSSProperties;
	SliderStyle?: CSSProperties;
	_contentHeight?: number;
}

interface ScrollBarProps extends ScrollBarTempProps {
	className?: ClassValue;
}

const presetClassName = function(cProps: ScrollBarProps) {
	const { className, mode } = cProps;

	const defaultMode = accordType(mode, 'String', 'normal');

	return {
		containerCN: classNames(prefix, className, {
			[`${prefix}-${defaultMode}`]: true
		}),
		sliderCN: classNames('slider')
	};
};

const presetProps = function(props: ScrollBarProps) {
	const sProps = splitJsxProps<ScrollBarProps>(props, [
		'size',
		'className',
		'style',
		'mode',
		'_contentHeight'
	]);
	sProps.customProps.size = handleSize(sProps.customProps.size!);
	return sProps;
};

// const useSlide = function() {};

/**=================================================================================================
 *			LASTMODIFY --- 2019-08-27T15:00:04.462Z
 *			DESCRIPTION --- ScrollBar
 *			PROPS
 *				--- size [SizeType]
 *   =================================================================================================*/

const ScrollBar: FC<ScrollBarProps> = function(props, refs) {
	const { nativeProps, customProps } = presetProps(props);
	const { containerCN, sliderCN } = presetClassName(customProps);
	const { size, style, _contentHeight } = customProps;

	const barRef = useRef(null);
	const sliderRef = useRef(null);

	const getBarHeight = function() {
		const barEle = (barRef.current as unknown) as HTMLElement;
		const sliderEle = (sliderRef.current as unknown) as HTMLElement;
		const barHeight = parseInt(computedStyle(barEle, 'height'));
		return { sliderEle, barHeight };
	};

	useImperativeHandle(
		refs,
		() => ({
			updateSliderTop: t => {
				const { sliderEle, barHeight } = getBarHeight();
				sliderEle.style.top = (t * barHeight) / _contentHeight! + 'px';
			}
		}),
		[_contentHeight]
	);

	useLayoutEffect(() => {
		const { sliderEle, barHeight } = getBarHeight();
		if (_contentHeight !== 0) {
			sliderEle.style.height = (barHeight * barHeight) / _contentHeight! + 'px';
		}
	}, [_contentHeight]);

	const containerStyle = {
		...accordType(size, 'Object', {}),
		...style
	};

	return (
		<div ref={barRef} {...nativeProps} style={containerStyle} className={containerCN}>
			<div ref={sliderRef} className={sliderCN} />
		</div>
	);
};

export default React.forwardRef(ScrollBar);
