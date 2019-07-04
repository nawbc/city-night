import React from 'react';
import { CommonInterface, JSXPropsInterface } from '../../interfaces/common.interface';
import { handleSize, JSXProps } from '../../utils/handleJSXProps';
import { polyfill } from 'react-lifecycles-compat';
import classNames from 'classnames';

import { typeReplace } from '../../utils/muguetDash';
import './style/hoop.css';
import { SizeType } from '../../interfaces/customTypes';
type HoopType = 'danger' | 'success' | 'information' | 'notice' | 'normal';

const prefix = 'm-loading';

const customFlexAttrs = [
	'size',
	'type',
	'children',
	'style',
]

interface HoopProps extends CommonInterface {
	type?: HoopType;
 }


class Hoop extends React.PureComponent<HoopProps, any>{

	private static readonly defaultProps = {
		type: 'normal',
		size: 'normal',
		gradients: 'HoopBlue'
	}

	handleExtraProps = (): JSXPropsInterface<HoopProps> => {
		const iconProps = JSXProps<HoopProps>(this.props, customFlexAttrs);
		const { customProps } = iconProps;
		customProps.size = handleSize(customProps.size as SizeType);
		return iconProps;
	}

	handleClassName = (classProps) => {
		const { size, className, type } = classProps;
		return classNames({
			[`${className}`]: className,
			[`${prefix}-hoop-container`]: true,
			[`${prefix}-hoop-${type}`]: type,
			[`${prefix}-hoop-container-${size}`]: typeReplace(size, 'String', false),
		})
	}

	render() {
		const { nativeProps, customProps } = this.handleExtraProps();
		const className = this.handleClassName(customProps);
		const mergeStyle = {
			...typeReplace(customProps.size as SizeType, 'Object', {}),
			...typeReplace(customProps.style as Object, 'Object', {})
		}

		return (
			<div
				{...nativeProps}
				className={className}
				style={mergeStyle}
			></div>
		)
	}
}

polyfill(Hoop);
export default Hoop;
