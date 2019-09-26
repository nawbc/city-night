import React, { FC, useRef, Props, HTMLAttributes, useLayoutEffect, useState } from 'react';
import computedStyle from 'computed-style';
interface AutoHeightProps extends Props<any>, HTMLAttributes<any> {
	height: string;
	transitionDuration: number;
	transitionFunc: string;
}

/**=================================================================================================
 *			@author --- Han Wang
 *			@LASTMODIFY --- 2019-09-21T14:27:16.142Z
 *			@DESCRIPTION --- 解决height 0 -> auto 没有transition的问题
 *			@property {string} height
 *			@property {number} transitionDuration
 *			@property {string} transitionFunc
 * =================================================================================================*/
let changeAutoTimer;
const TempAutoHeight: FC<AutoHeightProps> = function (props, ref) {
	const {
		transitionDuration, transitionFunc,
		height, style, children, className
	} = props;

	const innerRef = useRef(null);
	const [dyHeight, setDyHeight] = useState(height);

	const autoSetHeight = function (ele: HTMLElement, h: string, d: number) {
		setDyHeight(computedStyle(ele, 'height'));
		changeAutoTimer = setTimeout(() => {
			setDyHeight(h);
		}, d);
	};

	useLayoutEffect(() => {
		clearTimeout(changeAutoTimer);
		const innerEle = innerRef.current as unknown as HTMLElement;
		height === 'auto' ?
			autoSetHeight(innerEle, 'auto', transitionDuration) :
			autoSetHeight(innerEle, height, 0);
	}, [height, transitionDuration]);

	return (
		<div
			ref={ref}
			className={className}
			style={{
				...{
					transitionProperty: 'height',
					overflow: 'hidden',
					transitionDuration: transitionDuration + 'ms',
					transitionTimingFunction: transitionFunc,
					height: dyHeight,
					willChange: 'height',
					transform: 'translateZ(0px)'
				},
				...style
			}}
		>
			<div
				ref={innerRef}
				style={{ height: 'auto' }}
			>
				{children}
			</div>
		</div>
	);
};

export const AutoHeight = React.forwardRef(TempAutoHeight);
