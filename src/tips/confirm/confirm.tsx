import React from 'react';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { typeReplace } from '../../utils/muguetDash';
import { handleSize, JSXProps } from '../../utils/handleJSXProps';
import Button from '../../tools/button/button';
import ScrollBox from '../../layout/scrollBox/scrollBox';
import {
	CommonInterface,
	JSXPropsInterface,
} from '../../interfaces/common.interface';
import './style/confirm.css';
import { SizeType } from '../../interfaces/customTypes';
type ConfirmType = 'modal' | 'bubble';

const prefix = 'm-confirm';
const customConfirmAttrs = [
	'buttonValues',
	'onCancel',
	'onConfirm',
	'style',
	'children',
	'gradients',
	'size',
	'className'
]

interface ConfirmProps extends CommonInterface {
	buttonValues?: [string, string];
	onCancel?: (event: React.MouseEvent<any, MouseEvent>) => void;
	onConfirm?: (event: React.MouseEvent<any, MouseEvent>) => void;
	type?: ConfirmType;
}

class Confirm extends React.Component<ConfirmProps, any> {

	private static readonly defaultProps = {
		buttonValues: ['确定', '取消'],
		type: 'modal'
	}


	constructor(props) {
		super(props);
	}

	handleExtraProps = (): JSXPropsInterface<ConfirmProps> => {
		const ConfirmProps = JSXProps<ConfirmProps>(this.props, customConfirmAttrs);
		const { customProps } = ConfirmProps;
		customProps.size = handleSize(customProps.size as SizeType);
		return ConfirmProps;
	}


	handleClassName = (classProps): string => {
		const {
			className
		} = classProps;

		return classNames({
			[`${className}`]: true,
		});
	}

	render() {
		const { nativeProps, customProps } = this.handleExtraProps();
		const mergeStyle = {
			...typeReplace(customProps.size as SizeType, 'Object', {}),
			...typeReplace(customProps.style as Object, 'Object', {}),
			...{ width: '150px', height: '100px' }
		}
		return (
			<div
				{...nativeProps}
				style={mergeStyle}
				className={customProps['className']}
			>
				<ScrollBox
					size={[150, 75]}
				>{customProps.children}</ScrollBox>
				<div
					className={`${prefix}-button-wrapper`}
				>
					<Button
						size='tiny'
						effect='click-down'
						gradients={customProps.gradients}
						onClick={customProps.onCancel}
					>{customProps.buttonValues![0]}</Button>
					<Button
						size='tiny'
						effect='click-down'
						gradients={customProps.gradients}
						onClick={customProps.onConfirm}
						style={{ marginLeft: '10px' }}
					>{customProps.buttonValues![1]}</Button>
				</div>
			</div>
		)
	}
}
polyfill(Confirm);
export default Confirm;
