import React from 'react';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { typeReplace } from '../../utils/muguetDash';
import { handleSize, JSXProps } from '../../utils/handleJSXProps';
import {
	CommonInterface,
	JSXPropsInterface,
} from '../../interfaces/common.interface';
import './style/select.css';
import { SizeType } from '../../interfaces/customTypes';


const customSelectProps = [

]

interface SelectProps extends CommonInterface {
	data?: {};
}

class Select extends React.Component<SelectProps, any> {

	private static readonly defaultProps = {

	}

	handleExtraProps = (): JSXPropsInterface<SelectProps> => {
		const selectProps = JSXProps<SelectProps>(this.props, customSelectProps)
		const { customProps } = selectProps
		customProps.size = handleSize(customProps.size as SizeType);
		return selectProps
	}

	handleClassName = (classProps) => {
		const {

		} = classProps;
		return classNames({

		});
	}

	render() {
		const { nativeProps, customProps } = this.handleExtraProps();
		const className = this.handleClassName(customProps);
		const mergeStyle = {
			...typeReplace(customProps.size as Object, 'Object', {}),
			...typeReplace(customProps.style as Object, 'Object', {})
		}
		return (
			<div
				{...nativeProps}
				className={'a'}
				style={mergeStyle}
			>{customProps.children}</div>
		)
	}
}
polyfill(Select);
export default Select;
