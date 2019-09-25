/**=================================================================================================
 *			AUTHOR --- Han Wang
 *			LICENSE --- Apache-2.0
 *			LASTMODIFY --- 2019-09-13T14:32:49.491Z
 *			REPOSITORY --- https://github.com/sewerganger/silent-concept
 *=================================================================================================*/
import React, { ReactElement, useLayoutEffect, useRef, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { SilentCommonAttr, SizeType, ClassValue } from '../../interfaces';
import {
	accordType,
	splitJsxProps,
	handleSize,
	useDefaultProps
} from '../../helper';
import Loading from '../../views/loading';
import './style/picture.scss';

const prefix = 's-picture';

const PictureAttrs = [
	'src',
	'size',
	'lazy',
	'auto',
	'style',
	'autSize',
	'beforeLoad',
	'className'
];

const defaultProps = {
	beforeLoad: <Loading.Breath />,
	lazy: false,
	auto: false
};

interface PictureTempProps extends SilentCommonAttr, HTMLAttributes<any> {
	src?: string;
	beforeLoad?: string | ReactElement;
	lazy?: boolean;
	size?: SizeType;
	auto?: boolean;
	className?: any;
}
export interface PictureProps extends PictureTempProps {
	className?: ClassValue;
}

const presetClassName = function (cProps: PictureProps): string {
	let { size } = cProps;
	return classNames(prefix, {
		[`${prefix}-${size}`]: accordType(size, 'String', false)
	});
};

const presetProps = function (props: PictureProps) {
	const sProps = splitJsxProps<PictureProps>(props, PictureAttrs);
	sProps.customProps.size = handleSize(sProps.customProps.size!);
	return sProps;
};

/**=================================================================================================
 *			LASTMODIFY --- 2019-08-27T15:00:04.462Z
 *			DESCRIPTION --- Picture 工具 利用css background加载 支持xml包裹
 *
 *			PROPS
 *				--- size [SizeType]
 *				--- beforeLoad [string|ReactElement]
 *				--- lazy [boolean]
 *				--- auto [boolean] 开启自动调节原始图片大小
 *				--- src [boolean]
 *   =================================================================================================*/
export interface PictureFunction {
	(props: PictureProps): ReactElement;
}

const Picture: PictureFunction = function (props) {
	const initProps = useDefaultProps<PictureProps>(props, defaultProps);
	const { nativeProps, customProps } = presetProps(initProps);
	const className = presetClassName(customProps);
	const ref = useRef(null);
	const { src, lazy, beforeLoad, size, style, auto } = customProps;
	let finalElement: ReactElement;
	let customStyle = {
		backgroundSize: 'cover',
		backgroundImage: `url(${src})`,
		backgroundRepeat: 'no-repeat',
		...accordType(size, 'Object', {}),
		...style
	};

	useLayoutEffect(() => {
		if (auto) {
			const imgEle = ref.current as unknown as HTMLElement;
			let img = new Image();
			img.src = src as string;
			let finalWidth, finalHeight;
			const { width, height } = img;
			if (!!size) {
				finalWidth = parseInt(size['width']);
				finalHeight = height / (width / finalWidth) + 'px';
			} else {
				finalWidth = width + 'px';
				finalHeight = height + 'px';
			}
			imgEle.style.width = finalWidth;
			imgEle.style.height = finalHeight;
			img = null as any;
		}
	}, [auto, src, size]);

	if (lazy) {
		let LazyPicture = React.lazy(() => import('./lazyPicture' as string));
		finalElement = (
			<React.Suspense fallback={beforeLoad as ReactElement}>
				<LazyPicture
					nativeProps={nativeProps}
					customStyle={customStyle}
					className={className}
				/>
			</React.Suspense>
		);
	} else {
		finalElement = (
			<div
				ref={ref}
				{...nativeProps}
				style={customStyle}
				className={className}
			/>
		);
	}
	return finalElement;
};

export default Picture;
