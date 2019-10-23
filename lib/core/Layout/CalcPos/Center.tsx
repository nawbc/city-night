/**=================================================================================================
 *			LICENSE --- Apache-2.0
 *			LASTMODIFY --- 2019-10-08T13:40:06.133Z
 *			REPOSITORY --- https://github.com/sewerganger/silent-concept
 *=================================================================================================*/
import React, { HTMLAttributes, FC, useRef, useLayoutEffect, CSSProperties } from 'react';
import { SilentCommonAttr, ClassValue } from '../../../interfaces';
import classNames from 'classnames';
import computedStyle from 'computed-style';

interface CenterTempProps extends SilentCommonAttr, HTMLAttributes<any> {
	className?: any;
}

export interface CenterProps extends CenterTempProps {
	className?: ClassValue;
}

/**=================================================================================================
 *			LASTMODIFY --- 2019-10-08T13:40:08.966Z
 *			DESCRIPTION --- Center
 *			PROPS
 *				--- size [SizeType]
 *				--- children[ReactNode] children可以是string 也可以是Element
 *   =================================================================================================*/

const Center: FC<CenterProps> = function(props) {
	const { style, children, className } = props;
	const ref = useRef(null);

	const containerStyle = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		wordBreak: 'keep-all',
		...style
	} as CSSProperties;

	useLayoutEffect(() => {
		const centerEle = (ref.current as unknown) as HTMLElement;
		const onlyOneChild = centerEle.childNodes[0];
		if (!!onlyOneChild) {
			const height = computedStyle(centerEle, 'height');
			const width = computedStyle(centerEle, 'width');

			centerEle.style.height = parseInt(height) + 'px';
			centerEle.style.width = parseInt(width) + 'px';
			centerEle.style.marginTop = -parseInt(height) / 2 + 'px';
			centerEle.style.marginLeft = -parseInt(width) / 2 + 'px';
		} else {
			console.warn('Warn: <Center/> only accepts one Child');
		}
	});

	return (
		<div ref={ref} style={containerStyle} className={classNames(className)}>
			{children}
		</div>
	);
};

export default React.memo(Center);
