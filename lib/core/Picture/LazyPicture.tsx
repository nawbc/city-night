import React, { useLayoutEffect, useRef, useState } from 'react';
import { PictureProps } from './index';
import classNames from 'classnames';

const prefix = 's-picture-lazy';

/**=================================================================================================
 *		函数去抖动
 *=================================================================================================*/
// const deShake = function(callback: Function, time: number) {
// 	let timer = null as any;
// 	return function(e: Event) {
// 		clearTimeout(timer);
// 		timer = setTimeout(() => {
// 			callback(e);
// 		}, time);
// 	};
// };

const LazyPicture = function({ nativeProps, customProps }): React.ReactElement {
	const { className, size, src, style, beforeLoad } = customProps as PictureProps;
	const lazyPicContainerRef = useRef(null);
	const [beforeLoadElement, setBeforeLoadElement] = useState(true);
	// const [visible, setVisible] = useState(false);

	useLayoutEffect(() => {
		// window.onscroll = function () {
		const imgContainer = (lazyPicContainerRef.current as unknown) as HTMLElement;
		if (imgContainer.offsetTop < window.innerHeight) {
			const img = new Image();
			img.src = src as string;
			img.onload = function() {
				!!beforeLoad && setBeforeLoadElement(false);
				console.log(beforeLoad);
				let finalWidth, finalHeight;
				const { width, height } = img;
				if (!!size) {
					if (!!size['width'] && !!size['height']) {
						finalWidth = size['width'];
						finalHeight = size['height'];
					} else {
						const tmpWidth = parseInt(size['width']);
						finalWidth = tmpWidth + 'px';
						finalHeight = height / (width / tmpWidth) + 'px';
					}
				} else {
					finalWidth = width + 'px';
					finalHeight = height + 'px';
				}
				img.style.width = finalWidth;
				img.style.height = finalHeight;
				imgContainer.appendChild(img);
				return () => {
					imgContainer.removeChild(img);
				};
			};
		}
		// };
	}, [size, src, beforeLoad]);

	return (
		<div ref={lazyPicContainerRef} style={style} {...nativeProps} cla ssName={classNames(className, prefix)}>
			{beforeLoadElement && beforeLoad}
		</div>
	);
};

export default React.memo(LazyPicture);
