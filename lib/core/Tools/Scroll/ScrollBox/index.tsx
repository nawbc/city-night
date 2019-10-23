import React, { HTMLAttributes, FC, useRef, useLayoutEffect } from 'react';
import { SilentCommonAttr, ClassValue } from '../../../../../lib/interfaces';
import { accordType, splitJsxProps, handleSize } from '../../../../../lib/helper';
import classNames from 'classnames';
import { useResize } from '../../hooks/useResize';
import './style/index.scss';

const prefix = 's-scrollBox';

const ScrollBoxAttrs = [
	'size',
	'className',
	'style',
	'children',
	'hoverDisplayScrollSlider'
	// 'scrollX',
	// 'scrollY',
	// 'disable'
];

interface ScrollBoxTempProps extends SilentCommonAttr, HTMLAttributes<any> {
	className?: any;
	hoverDisplayScrollSlider?: boolean;
	x?: boolean;
	y?: boolean;
	withSlider?: boolean;
}

interface ScrollBoxProps extends ScrollBoxTempProps {
	className?: ClassValue;
}

const presetClassName = function(cProps: ScrollBoxProps) {
	const { x, y, className } = cProps;

	return {
		containerCN: classNames(prefix, className),
		wrapperCN: classNames('wrapper', {
			'wrapper-x': x,
			'wrapper-y': y
		})
	};
};

const presetProps = function(props: ScrollBoxProps) {
	const sProps = splitJsxProps<ScrollBoxProps>(props, ScrollBoxAttrs);
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
	const { containerCN, wrapperCN } = presetClassName(props);
	const { size, style, children } = customProps;
	const contentRef = useRef(null);
	const [dySize, bounds] = useResize();

	const containerStyle = {
		...accordType(size, 'Object', {}),
		...style
	};

	useLayoutEffect(() => {
		const contentEle = (contentRef.current as unknown) as HTMLElement;
		// const containerEle = dySize.current as HTMLElement;
		// containerEle.style.width = (bounds as any).width + 'px';
		contentEle.style.width = (bounds as any).width - 16 + 'px';
		return () => {};
	}, [bounds]);

	return (
		<div ref={dySize} {...nativeProps} style={containerStyle} className={containerCN}>
			<div className={wrapperCN}>
				<div ref={contentRef}>{children}</div>
			</div>
		</div>
	);
};

ScrollBox.defaultProps = {
	size: ['100%', '100%']
};

export default React.memo(ScrollBox);
