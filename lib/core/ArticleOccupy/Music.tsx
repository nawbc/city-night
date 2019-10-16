/**=================================================================================================
 *			LICENSE --- Apache-2.0
 *			LASTMODIFY --- 2019-10-09T13:59:54.538Z
 *			REPOSITORY --- https://github.com/sewerganger/silent-concept
 *=================================================================================================*/
import React, { HTMLAttributes, FC } from 'react';
import { SilentCommonAttr, ClassValue } from '../../interfaces';
import { accordType, splitJsxProps, handleSize } from '../../helper';
import classNames from 'classnames';

const prefix = 's-articleOccupy-sliver';

const MusicAttrs = ['style', 'className', 'size'];

interface MusicTempProps extends SilentCommonAttr, HTMLAttributes<HTMLDivElement> {
	className?: any;
}

interface MusicProps extends MusicTempProps {
	className?: ClassValue;
}

const presetProps = function(props: MusicProps) {
	const sProps = splitJsxProps<MusicProps>(props, MusicAttrs);
	sProps.customProps.size = handleSize(sProps.customProps.size!);
	return sProps;
};

/**=================================================================================================
 *			LASTMODIFY --- 2019-10-09T13:59:33.841Z
 *			DESCRIPTION --- Music
 *			PROPS
 *				--- size [SizeType]
 *   =================================================================================================*/

const Music: FC<MusicProps> = function(props) {
	const { nativeProps, customProps } = presetProps(props);

	const { size, style, className } = customProps;
	const containerStyle = {
		...accordType(size, 'Object', {}),
		...style
	};

	return <div {...nativeProps} className={classNames(prefix, className)} style={containerStyle} />;
};

Music.defaultProps = {};

export default React.memo(Music);
