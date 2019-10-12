/**=================================================================================================
 *			LICENSE --- Apache-2.0
 *			LASTMODIFY --- 2019-10-09T13:59:54.538Z
 *			REPOSITORY --- https://github.com/sewerganger/silent-concept
 *=================================================================================================*/
import React, { HTMLAttributes, FC } from 'react';
import { SilentCommonAttr, ClassValue } from '../../interfaces';
import { accordType, splitJsxProps, handleSize } from '../../helper';
import classNames from 'classnames';

const prefix = 's-articleOccupy-news';

const NewsAttrs = ['style', 'className', 'size'];

interface NewsTempProps extends SilentCommonAttr, HTMLAttributes<HTMLDivElement> {
	className?: any;
}

interface NewsProps extends NewsTempProps {
	className?: ClassValue;
}

const presetProps = function(props: NewsProps) {
	const sProps = splitJsxProps<NewsProps>(props, NewsAttrs);
	sProps.customProps.size = handleSize(sProps.customProps.size!);
	return sProps;
};

/**=================================================================================================
 *			LASTMODIFY --- 2019-10-09T13:59:33.841Z
 *			DESCRIPTION --- News
 *			PROPS
 *				--- size [SizeType]
 *   =================================================================================================*/

const News: FC<NewsProps> = function(props) {
	const { nativeProps, customProps } = presetProps(props);

	const { size, style, className } = customProps;
	const containerStyle = {
		...accordType(size, 'Object', {}),
		...style
	};

	return <div {...nativeProps} className={classNames(prefix, className)} style={containerStyle} />;
};

News.defaultProps = {};

export default React.memo(News);
