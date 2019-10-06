/**=================================================================================================
 *			LICENSE --- Apache-2.0
 *			LASTMODIFY --- 2019-09-09T13:51:34.709Z
 *			REPOSITORY --- https://github.com/sewerganger/silent-concept
 *=================================================================================================*/
import React, { HTMLAttributes, FC } from 'react';
import { SilentCommonAttr, ClassValue } from '../../interfaces';
import {
	accordType,
	splitJsxProps,
	handleSize
} from '../../helper';
import classNames from 'classnames';

const prefix = 's-articleOccupy-rect';

const ArticleOccupyRectAttrs = [
	'size',
	'className',
	'style'
];

interface ArticleOccupyRectTempProps extends SilentCommonAttr, HTMLAttributes<any> {
	className?: any;
}

interface ArticleOccupyRectProps extends ArticleOccupyRectTempProps {
	className?: ClassValue;
}

const presetClassName = function (): string {
	return classNames({
		prefix
	});
};

const presetProps = function (props: ArticleOccupyRectProps) {
	const sProps = splitJsxProps<ArticleOccupyRectProps>(props, ArticleOccupyRectAttrs);
	sProps.customProps.size = handleSize(sProps.customProps.size!);
	return sProps;
};

/**=================================================================================================
 *			LASTMODIFY --- 2019-08-27T15:00:04.462Z
 *			DESCRIPTION --- ArticleOccupyRect
 *			PROPS
 *				--- size [SizeType]
 *   =================================================================================================*/

const ArticleOccupyRect: FC<ArticleOccupyRectProps> = function (props) {
	const { nativeProps, customProps } = presetProps(props);
	const className = presetClassName();
	const { size, style, children } = customProps;
	const containerStyle = {
		...accordType(size, 'Object', {}),
		...style
	};

	return (
		<div
			{...nativeProps}
			style={containerStyle}
			className={className}
		>
			{children}
		</div>
	);
};

ArticleOccupyRect.defaultProps = {};

export default React.memo(ArticleOccupyRect);
