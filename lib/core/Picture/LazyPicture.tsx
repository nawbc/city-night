import React, { useLayoutEffect, useRef } from 'react';
import { PictureProps } from './index';
import classNames from 'classnames';
import { is } from '../../helper';

const prefix = 's-picture-lazy';

const LazyPicture = function({ nativeProps, customProps }): React.ReactElement {
	const { className, size, src, style, onLoaded } = customProps as PictureProps;

	const lazyPicContainerRef = useRef(null);

	useLayoutEffect(() => {
		const imgContainer = (lazyPicContainerRef.current as unknown) as HTMLElement;
		if (imgContainer.offsetTop < window.innerHeight) {
			const img = new Image();
			img.src = src as string;
			img.onload = function() {
				let finalWidth, finalHeight;

				const isLoadImage = (is.undefined(onLoaded) && true) || onLoaded(img); // 默认加载

				if (!!isLoadImage) {
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
				}
				return () => {
					imgContainer.removeChild(img);
				};
			};
		}
	}, [size, src, onLoaded]);

	return (
		<div
			ref={lazyPicContainerRef}
			style={style}
			{...nativeProps}
			className={classNames(className, prefix)}
		/>
	);
};

export default React.memo(LazyPicture);
