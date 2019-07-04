import React from 'react';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { typeReplace } from '../../utils/muguetDash';
import { handleSize, JSXProps } from '../../utils/handleJSXProps';
import { JSXPropsInterface } from '../../interfaces/common.interface';
import { SizeType, InputType } from '../../interfaces/customTypes';
import './style/input.css';

const customInputAttr = [
	'mode',
	'shape',
	'inputSize',
	'insertAfter', // undo
	'insertBefore', //undo
	'resize',
	'style',
	'children',
	'className'
];
const customInputType = [
	'area'
]

interface InputProps extends React.InputHTMLAttributes<any> {
	inputSize?: SizeType;
	insertAfter?: string | React.ReactNode;
	insertBefore?: string | React.ReactNode;
	mode?: InputType;
	resize?: boolean;
}

/**
 * this is input module , add some new functions , support origin functions
 * because `input` originally has a size attribute, so use `inputSize` instead
 * @warning event api like onChange must use [''] to get property for typescript
 * onClick={(e)=>{this.setState({value_a: e.target['innerHTML']})}}
 * @module Input
 * @example
 * <Input
 * 		inputSize='normal' //
 *    readOnly={true}
 * 		mode='text' // area | and origin props
 * 		insertAfter={<babel></babel>} //
 * 		insertBefore='test'
 * ></Input>
 */

class Input extends React.Component<InputProps, any> {

	private static readonly defaultProps = {
		inputSize: 'normal',
		mode: 'text',
		resize: false
	}

	constructor(props) {
		super(props);
	}

	handleExtraProps = (): JSXPropsInterface<InputProps> => {
		const InputProps = JSXProps<InputProps>(this.props, customInputAttr);
		const { customProps } = InputProps;
		customProps.inputSize = handleSize(customProps.inputSize!);
		return InputProps;
	}

	handleClassName = (classProps) => {
		const {
			type,
			readOnly,
			className,
			inputSize,
			resize
		} = classProps;

		return classNames({
			'm-input-default': true,
			[`m-input-resize`]: !resize,
			'm-input-readonly': readOnly,
			[`${classNames(className)}`]: className,
			[`m-input-${type}`]: customInputType.indexOf(type) > -1,
			[`m-input-textSize-${inputSize}`]: typeReplace(inputSize, 'String', false),
		});
	}
	/**
	 * Renders input area children level higher than value
	 * @returns
	 */
	render() {
		const { nativeProps, customProps } = this.handleExtraProps();
		const className = this.handleClassName({ ...nativeProps, ...customProps });
		const mergeStyle = {
			...typeReplace(customProps.inputSize as Object, 'Object', {}),
			...typeReplace(customProps.style as Object, 'Object', {})
		}

		let input: React.ReactNode;

		let commonProps = {
			className: className,
			style: mergeStyle,
		}

		switch (customProps.mode) {
			case 'area':
				input = (
					<textarea
						{...nativeProps}
						{...commonProps}
					>{customProps.children || customProps.value}</textarea>
				); break;
			default:
				input = (
					<input
						{...nativeProps}
						{...commonProps}
						type={customProps.mode}
					/>
				); break;
		}

		return (
			<React.Fragment>{input}</React.Fragment>
		)
	}
}
polyfill(Input);
export default Input;
