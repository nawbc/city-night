import React from 'react';
import Icon from '../icon/icon';
import classNames from 'classnames';
import querystring from 'querystring';
import { polyfill } from 'react-lifecycles-compat';
import { CommonInterface, JSXPropsInterface } from '../../interfaces/common.interface';
import { handleSize, JSXProps } from '../../utils/handleJSXProps';
import { typeReplace, isType } from '../../utils/muguetDash';
import './style/button.css';
import { SizeType } from '../../interfaces/customTypes';

type targetType = 'self' | 'blank' | 'parent' | 'top';
type hrefType = { url?: string, target?: targetType, data?: Object, delay?: number } | string | boolean;

interface ButtonProps extends CommonInterface {
	icon?: string | React.ReactElement;
	func?: string;
	href?: hrefType;
	gradients?: string;
	download?: string;
	readOnly?: boolean;
	fontColor?: 'white' | 'black';
	margin?: boolean;
	select?: boolean;
}

const prefix = 'm-button';
const customButtonAttrs = [
	'icon',
	'href',
	'func',
	'size',
	'shape',
	'readOnly',
	'effect',
	'loading',
	'gradients',
	'download',
	'fontColor',
	'select',
	'margin',
	/**@override */
	'children',
	'className',
	'onClick',
	'style'
];


/**
 * @example
 * <Button
 *      size={}
 *      icon={} //string
 *      effect='click-down'
 *       // ['click-static(default)', 'click-down', 'click-left', 'click-right', 'click-up']
 *       // ['hover-static(default)', 'hover-down', 'hover-left' , 'hover-right', 'hover-up']
 *      fontColor='white'
 *      func='reset' // submit reset
 *      disable={true} // true false
 *      loading={true} // use icon prop
 *      gradients='gradient'   // see Colour Chart
 *      download={()=>{return 'https://muguet.example.com'}}  // download with a callback
 *      shape='fillet' fillet | circle
 *      href={{
*           url: 'https: //www.baidu.com'
*           target: 'self',
*           data: { name: 'muguet', app: 'good' }
 *      }} // string | {url: string, target: string, data: Object}
 * ></ Button>
 */

class Button extends React.Component<ButtonProps, any>{

	private static readonly defaultProps = {
		func: 'button',
		size: 'normal',
		readOnly: false,
		fontColor: "white",
		effect: "click-static",
		gradients: "NewLife",
		margin: true
	}

	constructor(props) {
		super(props);
	}

	handleHref = (href) => {
		let defaultLink = { target: "_self", url: href };
		if (href) {
			if (isType(href, 'Object')) {
				href.target = '_' + href.target;
				href.url = href.url + (href.data ? "?" + querystring.stringify(href.data, "&", "=") : '');
				return href;
			} else {
				return defaultLink;
			}
		} else {
			return false;
		}
	}

	handleExtraProps = (): JSXPropsInterface<ButtonProps> => {
		const buttonProps = JSXProps<ButtonProps>(this.props, customButtonAttrs);
		const { customProps } = buttonProps;
		customProps.size = handleSize(customProps.size as SizeType);
		customProps.href = this.handleHref(customProps.href);
		return buttonProps;
	}

	handleClassName = (classProps) => {
		const {
			size,
			shape,
			effect,
			margin,
			gradients,
			fontColor,
			className,
		} = classProps;
		return classNames({
			[`${prefix}-default`]: true,
			[`${prefix}-margin`]: margin,
			[`${className}`]: className,
			[`${prefix}-${effect}`]: effect,
			[`${prefix}-shape-${shape}`]: shape,
			[`m-gradients-${gradients}`]: gradients,
			[`${prefix}-font-color-${fontColor}`]: fontColor,
			[`${prefix}-${size}`]: typeReplace(size, 'String', false),
		});
	}

	handleCustomFunc = (e, props) => {
		const { func, onClick } = props;
		if ("reload" === func)
			window.location.reload();
		if (isType(onClick, 'Function'))
			onClick(e);
	}

	EmbedChild = (props): React.ReactElement => {
		const {
			icon,
			size,
			children
		} = props;
		let iconEle: React.ReactElement;

		if (icon) {
			let iconSize: Array<number>;
			let iconMargin;
			switch (size) {
				case 'large': iconSize = [20, 20]; break;
				case 'normal': iconSize = [18, 18]; break;
				case 'small': iconSize = [14, 14]; iconMargin = { marginRight: '5px' }; break;
				case 'tiny': iconSize = [12, 12]; iconMargin = { marginRight: '3px' }; break;
				default: iconSize = [18, 18]; break;
			}
			iconEle = (
				<div className={`${prefix}-temp-div`}>
					<Icon
						style={typeReplace(iconMargin, 'Object', {})}
						size={iconSize as SizeType}
						src={icon}
					></Icon>
					<div>{children}</div>
				</div>
			)
		} else {
			iconEle = (<div>{children}</div>)
		}
		return iconEle;
	}

	ButtonContainer = () => {
		const { nativeProps, customProps } = this.handleExtraProps();
		const className = this.handleClassName(customProps);

		const {
			func,
			href,
			readOnly,
			download
		} = customProps;

		const mergeStyle = {
			...typeReplace(customProps.size as Object, 'Object', {}),
			...typeReplace(customProps.style as Object, 'Object', {})
		}

		const PureButton = (
			<button
				{...nativeProps}
				className={className}
				style={mergeStyle}
				onClick={(e) => { this.handleCustomFunc(e, customProps) }}
				type={func as any}
				disabled={readOnly}
			>
				<this.EmbedChild {...customProps} />
			</button>
		)

		const ButtonIsWithAlink = (
			href && !readOnly ?
				(<a
					href={href['url']}
					target={href['target']}
					download={download}
				>
					{PureButton}
				</a>) : PureButton
		)
		return ButtonIsWithAlink;
	}

	render() {
		return (
			<this.ButtonContainer />
		)
	}
}

polyfill(Button);

export default Button;
