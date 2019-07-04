import React from 'react';
import { CommonInterface, JSXPropsInterface } from '../../interfaces/common.interface';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { typeReplace } from '../../utils/muguetDash';
import { handleSize, JSXProps } from '../../utils/handleJSXProps';
import Icon from '../icon/icon';
import './style/gradientsBar.css';
import { SizeType, TipsType } from '../../interfaces/customTypes';

const prefix = 'm-gradientsBar';
const customGradientsBarAttr = [
	'gradients',
	'type',
	'size',
	'duration',
	'display',
	'onCancel',
	'style',
	'children',
	'className'
]

/**
 * @example
 * <GradientsBar
 * 	type='danger'
 * 	onCancel={}
 *	display={}
 * ></GradientsBar>
 */

interface GradientsBarProps extends CommonInterface {
	gradients?: string;
	type?: TipsType;
	duration?: number;
	onCancel?: Function;
	series?: Array<string>;
}

class GradientsBar extends React.Component<GradientsBarProps, any> {
	private currentTimeout;
	private static readonly defaultProps = {
		duration: 3500,
	}

	handleDefaultGradients = (props: GradientsBarProps) => {
		if (props.gradients) {
			return props.gradients;
		} else {
			let gradients = '';
			switch (props.type) {
				case 'success': gradients = 'HealthyWater';
					break;
				case 'info': gradients = 'CrystalRiver';
					break;
				case 'danger': gradients = 'StrongBliss';
					break;
				case 'warning': gradients = 'SunnyMorning';
					break;
				case 'notice': gradients = 'SandStrike';
					break;
				default:
					gradients = 'CrystalRiver'
					break;
			}
			return gradients;
		}
	}

	handleExtraProps = (): JSXPropsInterface<GradientsBarProps> => {
		const iconProps = JSXProps<GradientsBarProps>(this.props, customGradientsBarAttr);
		const { customProps } = iconProps;
		customProps.size = handleSize(customProps.size as SizeType);
		return iconProps;
	}

	handleClassName = (classProps) => {
		const { gradients, type, display, className } = classProps;
		return classNames({
			[`${prefix}-default`]: true,
			[`${className}`]: className,
			[`${prefix}-alert-default`]: type,
			[`m-gradients-${this.handleDefaultGradients(classProps)}`]: true,
			[`${prefix}-alert-${display ? 'vision' : 'hidden'}`]: type,
		});
	}

	EmbedChild = (props): React.ReactNode => {
		return (
			props.type ?
				<div className={`${prefix}-alert-innerContent`}>
					<Icon src={
						require(`../../assets/icons/local/${props.type}.svg`)
					}
					></Icon>
					<div
						className={`${prefix}-alert-content`}
					>{props.children}</div>
					<div className={`${prefix}-alert-cancel`}
						onClick={props.onCancel}
					></div>
				</div> : props.children
		)
	}

	render() {
		const { nativeProps, customProps } = this.handleExtraProps();
		const className = this.handleClassName(customProps);

		customProps.display && customProps.duration! > 0 ?
			this.currentTimeout = setTimeout(customProps.onCancel!, customProps.duration) :
			clearTimeout(this.currentTimeout);

		const mergeStyle = {
			...typeReplace(customProps.size as SizeType, 'Object', {}),
			...typeReplace(customProps.style as Object, 'Object', {})
		}

		return (
			<div
				{...nativeProps}
				className={className}
				style={mergeStyle}
			>{this.EmbedChild(customProps)}</div>
		)
	}
}

polyfill(GradientsBar);
export default GradientsBar;
