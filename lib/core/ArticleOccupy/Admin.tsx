/**=================================================================================================
 *			LICENSE --- Apache-2.0
 *			LASTMODIFY --- 2019-10-09T13:59:54.538Z
 *			REPOSITORY --- https://github.com/sewerganger/silent-concept
 *=================================================================================================*/
import React, { HTMLAttributes, FC } from 'react';
import { SilentCommonAttr, ClassValue } from '../../interfaces';
import { accordType, splitJsxProps, handleSize } from '../../helper';
import classNames from 'classnames';

const prefix = 's-articleOccupy-admin';

const AdminAttrs = ['style', 'className', 'size'];

interface AdminTempProps extends SilentCommonAttr, HTMLAttributes<HTMLDivElement> {
	className?: any;
}

interface AdminProps extends AdminTempProps {
	className?: ClassValue;
}

const presetProps = function(props: AdminProps) {
	const sProps = splitJsxProps<AdminProps>(props, AdminAttrs);
	sProps.customProps.size = handleSize(sProps.customProps.size!);
	return sProps;
};

/**=================================================================================================
 *			LASTMODIFY --- 2019-10-09T13:59:33.841Z
 *			DESCRIPTION --- Admin
 *			PROPS
 *				--- size [SizeType]
 *   =================================================================================================*/

const Admin: FC<AdminProps> = function(props) {
	const { nativeProps, customProps } = presetProps(props);

	const { size, style, className } = customProps;
	const containerStyle = {
		...accordType(size, 'Object', {}),
		...style
	};

	return <div {...nativeProps} className={classNames(prefix, className)} style={containerStyle} />;
};

Admin.defaultProps = {};

export default React.memo(Admin);
