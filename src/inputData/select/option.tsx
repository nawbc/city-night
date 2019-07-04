import React from 'react';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { typeReplace } from '../../utils/muguetDash';
import { handleSize, JSXProps } from '../../utils/handleJSXProps';
import {
	CommonInterface,
	JSXPropsInterface,
} from '../../interfaces/common.interface';
import './style/option.css';
import { SizeType } from '../../interfaces/customTypes';


const customOptionAttr = [

]

interface OptionProps extends CommonInterface {
	data?: {};
}

class Option extends React.Component<OptionProps, any> {

	private static readonly defaultProps = {

	}


	handleExtraProps = (): JSXPropsInterface<OptionProps> => {
		const optionProps = JSXProps<OptionProps>(this.props, customOptionAttr)
		const { customProps } = optionProps
		customProps.size = handleSize(customProps.size as SizeType);
		return optionProps
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
polyfill(Option);
export default Option;
