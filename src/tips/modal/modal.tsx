import React from 'react';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { typeReplace } from '../../utils/muguetDash';
import { handleSize, JSXProps } from '../../utils/handleJSXProps';

import {
	CommonInterface,
	JSXPropsInterface,
} from '../../interfaces/common.interface';
import './style/modal.css';
import { SizeType } from '../../interfaces/customTypes';

const prefix = 'm-modal';
const customModalAttrs = [
	'cover',
	'button',
	'size',
	'onCancel',
	'middle',
	'gradients',
	'title',
	'display',
	'style',
	'children',
	'className'
]

interface ModalProps extends CommonInterface {
	cover?: boolean;
	middle?: boolean;
	button?: React.ReactElement;
	title?: any;
	onCancel?: any
}

class Modal extends React.Component<ModalProps, any> {

	private static readonly defaultProps = {
		cover: false,
		middle: false,
		gradients: 'CloudyKnoxville',
	}


	constructor(props) {
		super(props);
	}

	handleExtraProps = (): JSXPropsInterface<ModalProps> => {
		const modalProps = JSXProps<ModalProps>(this.props, customModalAttrs);
		const { customProps } = modalProps;
		customProps.size = handleSize(customProps.size as SizeType);
		return modalProps;
	}

	handleClassName = (classProps) => {
		const {
			cover,
			middle,
			gradients,
			display
		} = classProps;

		return {
			containerName: classNames({
				[`${prefix}-container`]: true,
				[`${prefix}-container-display`]: !display,
			}),
			coverName: classNames({
				[`${prefix}-cover-default`]: true,
				[`${prefix}-cover`]: cover,
			}),
			wrapperName: classNames({
				[`${prefix}-wrapper`]: true,
				[`${prefix}-wrapper-middle`]: middle,
				[`${prefix}-wrapper-top`]: !middle,
				[`m-gradients-${gradients}`]: true,
			}),
		}
	}

	render() {
		const { nativeProps, customProps } = this.handleExtraProps();
		const className = this.handleClassName(customProps);
		const mergeStyle = {
			...typeReplace(customProps.size as SizeType, 'Object', {}),
			...typeReplace(customProps.style as Object, 'Object', {})
		}
		const button = (
			customProps.button ?
				<div className={`${prefix}-buttons`}>{customProps.button}</div> :
				null
		)
		const title = (
			customProps.title ?
				<div className={`${prefix}-title`}>{customProps.title}</div> :
				null
		)


		const model = (
			customProps.display ?
				<div
					{...nativeProps}
					className={className.containerName}
				>
					<div
						className={className.coverName}
						onClick={customProps.onCancel}
					></div>
					<div
						className={className.wrapperName}
						style={mergeStyle}
						ref='muguet'
					>
						{title}
						<div className={`${prefix}-content`}>{customProps.children}</div>
						{button}
					</div>
				</div> : null
		)

		return model
	}
}



polyfill(Modal);
export default Modal;
