import React, { HTMLAttributes, FC, useRef, useLayoutEffect, ReactNode, useState } from 'react';
import { SilentCommonAttr, ClassValue } from '../../../../lib/interfaces';
import { accordType, splitJsxProps, handleSize } from '../../../../lib/helper';
import classNames from 'classnames';
import ScrollBar from '../ScrollBar';
import { useResize } from '../../Tools/hooks/useResize';
import computedStyle from 'computed-style';
import './style/index.scss';

const prefix = 's-scrollBox';

interface ScrollBoxTempProps extends SilentCommonAttr, HTMLAttributes<any> {
	className?: any;
	hoverDisplayScrollSlider?: boolean;
	x?: boolean;
	y?: boolean;
	withScrollBar?: boolean | ReactNode;
}

interface ScrollBoxProps extends ScrollBoxTempProps {
	className?: ClassValue;
}

const presetClassName = function(cProps: ScrollBoxProps) {
	const { x, y, className } = cProps;

	return {
		containerCN: classNames(prefix, className),
		scrollCN: classNames('scroll', {
			'scroll-x': x,
			'scroll-y': y
		})
	};
};

const presetProps = function(props: ScrollBoxProps) {
	const sProps = splitJsxProps<ScrollBoxProps>(props, [
		'size',
		'className',
		'style',
		'children',
		'hoverDisplayScrollSlider',
		'withScrollBar'
		// 'scrollX',
		// 'scrollY',
		// 'disable'
	]);
	sProps.customProps.size = handleSize(sProps.customProps.size!);
	return sProps;
};

/**=================================================================================================
 *			LASTMODIFY --- 2019-08-27T15:00:04.462Z
 *			DESCRIPTION --- ScrollBox
 *			PROPS
 *				--- size [SizeType]
 *   =================================================================================================*/

const ScrollBox: FC<ScrollBoxProps> = function(props) {
	const { nativeProps, customProps } = presetProps(props);
	const { containerCN, scrollCN } = presetClassName(customProps);
	const { size, style, children, withScrollBar } = customProps;
	const contentRef = useRef(null);
	const [dySize, bounds] = useResize();
	const scrollRef = useRef(null);
	const [contentHeight, setContentHeight] = useState(0);
	const barRef = useRef();

	const containerStyle = {
		...accordType(size, 'Object', {}),
		...style
	};

	const scrollBar = !!withScrollBar ? (
		React.isValidElement(withScrollBar) ? (
			React.cloneElement(withScrollBar, { ref: barRef, _contentHeight: contentHeight })
		) : (
			<ScrollBar ref={barRef} _contentHeight={contentHeight} />
		)
	) : null;

	useLayoutEffect(() => {
		const contentEle = (contentRef.current as unknown) as HTMLElement;
		contentEle.style.width = (bounds as any).width + 'px';
		// 待实现  container的通过mutationObserver改变  更新contentEle的height
		setContentHeight(parseInt(computedStyle(contentEle, 'height')));
	}, [bounds]);

	return (
		<div ref={dySize} {...nativeProps} style={containerStyle} className={containerCN}>
			<div
				className={scrollCN}
				ref={scrollRef}
				onScroll={e => {
					const ev = window.event || e;
					const targetEle = ev.target as HTMLElement;
					(barRef.current as any).updateSliderTop(targetEle.scrollTop);
				}}
			>
				<div ref={contentRef}>{children}</div>
			</div>
			{scrollBar}
		</div>
	);
};

ScrollBox.defaultProps = {
	size: ['100%', '100%'],
	withScrollBar: true
};

export default ScrollBox;
