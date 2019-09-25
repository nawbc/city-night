import React, { FC, useRef, Props, HTMLAttributes, useLayoutEffect, useState, useImperativeHandle } from 'react';
import computedStyle from 'computed-style';
interface AutoHeightProps extends Props<any>, HTMLAttributes<any> {
	height: string | number;
	transitionDuration: string;
	transitionFunc: string;
}

/**=================================================================================================
 *			@author --- Han Wang
 *			@LASTMODIFY --- 2019-09-21T14:27:16.142Z
 *			@DESCRIPTION --- 解决height 0 -> auto 没有transition的问题
 *			@property {string} height
 *			@property {string} transitionDuration
 *			@property {string} transitionFunc
 * =================================================================================================*/
const TempAutoHeight: FC<AutoHeightProps> = function (props, ref) {
	const {
		transitionDuration, transitionFunc,
		height, style, children, className
	} = props;

	const innerRef = useRef(null);
	const [dyHeight, setDyHeight] = useState(height);

	// useImperativeHandle(ref, () => ({
	// 	autoHeightContainer: ref.current
	// }));

	useLayoutEffect(() => {
		const innerEle = innerRef.current as unknown as HTMLElement;
		(height === 'mutation') ? setDyHeight(computedStyle(innerEle, 'height')) : setDyHeight(height);
	}, [height]);

	return (
		<div
			ref={ref}
			className={className}
			style={{
				...{
					transitionProperty: 'height',
					overflow: 'hidden',
					transitionDuration: transitionDuration,
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
