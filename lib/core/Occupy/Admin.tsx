/**=================================================================================================
 *			LICENSE --- Apache-2.0
 *			LASTMODIFY --- 2019-10-09T13:59:54.538Z
 *			REPOSITORY --- https://github.com/sewerganger/silent-concept
 *=================================================================================================*/

import React, { HTMLAttributes, FC, ReactNode } from 'react';
import { SilentCommonAttr, ClassValue } from '../../interfaces';
import { accordType, splitJsxProps, handleSize } from '../../helper';
import classNames from 'classnames';
import Flex from '../Layout/Flex';
import { Circle, Sliver } from './components';

const prefix = 's-occupy-admin';

const { Vertical } = Flex;

interface AdminTempProps extends SilentCommonAttr, HTMLAttributes<HTMLDivElement> {
	className?: any;
	fillet?: boolean;
	capital?: ReactNode;
}

interface AdminProps extends AdminTempProps {
	className?: ClassValue;
}

const presetProps = function(props: AdminProps) {
	const sProps = splitJsxProps<AdminProps>(props, [
		'style',
		'className',
		'size',
		'effect',
		'fillet',
		'capital'
	]);
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

	const { size, style, className, effect, fillet, capital } = customProps;
	const containerStyle = {
		...accordType(size, 'Object', {}),
		...style
	};

	const capitalNode = React.isValidElement(capital) && capital;

	return (
		<div {...nativeProps} className={classNames(prefix, className)} style={containerStyle}>
			<Flex style={{ width: '100%' }}>
				<Circle effect={effect}>{capitalNode}</Circle>
				<Vertical center={false} size={['100%']} style={{ marginLeft: '15px' }} around>
					<Sliver fillet={fillet} effect={effect} size={['50%']} />
					<Sliver fillet={fillet} effect={effect} />
				</Vertical>
			</Flex>
		</div>
	);
};

Admin.defaultProps = {
	effect: false,
	fillet: false
};

export default React.memo(Admin);
