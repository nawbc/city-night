/**=================================================================================================
 *			AUTHOR --- Han Wang
 *			LICENSE --- Apache-2.0
 *			LASTMODIFY --- 2019-09-13T14:32:49.491Z
 *			REPOSITORY --- https://github.com/sewerganger/silent-concept
 *=================================================================================================*/
import React, { ReactElement, HTMLAttributes, FC, CSSProperties } from 'react';
import classNames from 'classnames';
import { SilentCommonAttr, SizeType, ClassValue } from '../../interfaces';
import { accordType, splitJsxProps, handleSize } from '../../helper';
import './style/picture.scss';
import LazyPicture from './LazyPicture';

const prefix = 's-picture';

interface PictureTempProps extends SilentCommonAttr, HTMLAttributes<any> {
	src?: string;
	lazy?: boolean;
	style?: CSSProperties;
	size: SizeType;
	auto?: boolean;
	className?: any;
	onLoaded?: (img: HTMLImageElement) => boolean;
}

export interface PictureProps extends PictureTempProps {
	className?: ClassValue;
}

const presetClassName = function(cProps: PictureProps): string {
	const { size } = cProps;
	return classNames(prefix, {
		[`${prefix}-${size}`]: accordType(size, 'String', false)
	});
};

const presetProps = function(props: PictureProps) {
	const sProps = splitJsxProps<PictureProps>(props, [
		'src',
		'size',
		'lazy',
		'style',
		'auto',
		'className',
		'onLoaded'
	]);
	sProps.customProps.size = handleSize(sProps.customProps.size!);
	return sProps;
};

/**=================================================================================================
 *			LASTMODIFY --- 2019-10-03T07:22:56.733Z
 *			DESCRIPTION --- Picture 工具 利用css background加载 支持xml包裹
 *			LOG ---
 *        --- 2019-10-03T07:22:56.733Z 删除 auto 属性 , 通过判断是否含有size的第二参数来自动判断
 *
 *			PROPS
 *				--- size [SizeType]
 *				---  [string|ReactElement]
 *				--- lazy [boolean]
 *				--- src [boolean]
 *
 *   =================================================================================================*/

const Picture: FC<PictureProps> = function(props) {
	const { nativeProps, customProps } = presetProps(props);
	const className = presetClassName(customProps);
	const { src, lazy, size, style } = customProps;

	let finalElement: ReactElement;

	if (lazy) {
		finalElement = <LazyPicture nativeProps={nativeProps} customProps={customProps} />;
	} else {
		const customStyle = {
			backgroundSize: 'cover',
			backgroundImage: `url(${src})`,
			backgroundRepeat: 'no-repeat',
			...accordType(size, 'Object', {}),
			...style
		};
		finalElement = <div {...nativeProps} style={customStyle} className={className} />;
	}
	return finalElement;
};

Picture.defaultProps = {
	lazy: false
};

export default Picture;
