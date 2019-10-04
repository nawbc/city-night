import React, { FC, useRef, Props, HTMLAttributes, useLayoutEffect, useState } from 'react';
import computedStyle from 'computed-style';
interface AutoHeightProps extends Props<any>, HTMLAttributes<any> {
	height: string;
	transitionDuration: number;
	transitionFunc: string;
}

/**=================================================================================================
 *			author --- Han Wang
 *			LASTMODIFY --- 2019-09-30T09:01:53.715Z
 *			DESCRIPTION --- 解决height 0 -> auto 没有transition的问题
 *			property {string} height
 *			property {number} transitionDuration
 *			property {string} transitionFunc
 * =================================================================================================*/

/*eslint react/display-name: 0*/
const HeightZeroToAuto: FC<AutoHeightProps> = React.memo(function (props) {
	const {
		transitionDuration, transitionFunc,
		height, style, children, className
	} = props;

	const innerRef = useRef(null);
	const [dyHeight, setDyHeight] = useState(height);
	const [state, setState] = useState(0);

	useLayoutEffect(() => {
		const autoSetHeight = function (ele: HTMLElement, h: string, d: number, state) {
			(state !== 0) && setDyHeight(computedStyle(ele, 'height'));
			setTimeout(() => {
				(state === 0) && setState(state + 1);
				setDyHeight(h);
			}, d);
		};
		const innerEle = innerRef.current as unknown as HTMLElement;
		height === 'auto' ?
			autoSetHeight(innerEle, 'auto', transitionDuration, state) :
			autoSetHeight(innerEle, height, 0, state);
	}, [height, transitionDuration, state]);

	return (
		<div
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
});

export { HeightZeroToAuto }
