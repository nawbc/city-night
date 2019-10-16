/**=================================================================================================
 *			LICENSE --- Apache-2.0
 *			LASTMODIFY --- 2019-10-08T13:40:06.133Z
 *			REPOSITORY --- https://github.com/sewerganger/silent-concept
 *=================================================================================================*/
import React, { HTMLAttributes, FC, useRef, useLayoutEffect, CSSProperties } from 'react';
import { SilentCommonAttr, ClassValue } from '../../../interfaces';
import classNames from 'classnames';
import computedStyle from 'computed-style';

interface EdgeTempProps extends SilentCommonAttr, HTMLAttributes<any> {
	className?: any;
	edgePosition?: [number, number];
}

export interface EdgeProps extends EdgeTempProps {
	className?: ClassValue;
}

/**=================================================================================================
 *			LASTMODIFY --- 2019-10-08T13:40:08.966Z
 *			DESCRIPTION --- Edge
 *			PROPS
 *				--- size [SizeType]
 *				--- children[ReactNode]
 *				--- edgePosition[[number,number]]  范围在 0~1
 *   =================================================================================================*/

const Edge: FC<EdgeProps> = function(props) {
	const { style, children, className, edgePosition } = props;
	const ref = useRef(null);

	const containerStyle = {
		position: 'absolute',
		top: '0px',
		left: '0px',
		...style
	} as CSSProperties;

	useLayoutEffect(() => {
		const edgeEle = (ref.current as unknown) as HTMLElement;
		const parentEle = edgeEle.parentElement as HTMLElement;
		const onlyOneChild = edgeEle.childNodes[0];
		const fitRange = edgePosition && edgePosition.every(num => num >= 0 && num <= 1);

		if (fitRange) {
			if (!!onlyOneChild) {
				const height = computedStyle(onlyOneChild, 'height');
				const width = computedStyle(onlyOneChild, 'width');
				const parentHeight = computedStyle(parentEle, 'height');
				const parentWidth = computedStyle(parentEle, 'width');

				parentEle.style.position = 'relative';
				edgeEle.style.left = parseInt(parentHeight) * edgePosition![0] - parseInt(height) / 2 + 'px';
				edgeEle.style.top = parseInt(parentWidth) * edgePosition![1] - parseInt(width) / 2 + 'px';
			} else {
				throw new Error('Warn: <Edge/> only accepts one Child');
			}
		} else {
			console.warn('Warn: edgePosition value needs to between 0 ~ 1');
		}
	});

	return (
		<div ref={ref} style={containerStyle} className={classNames(className)}>
			{children}
		</div>
	);
};

Edge.defaultProps = {
	edgePosition: [0, 0]
};

export default React.memo(Edge);
