import React from 'react';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { typeReplace, randomAlphabet, randomGradients } from '../../utils/muguetDash';
import { gradientsArray } from '../../utils/gradientsArray';
import { handleSize, JSXProps } from '../../utils/handleJSXProps';
import {
	CommonInterface,
	JSXPropsInterface,
} from '../../interfaces/common.interface';
import { SizeType } from '../../interfaces/customTypes';
import Icon from '../icon/icon';
import './style/avatar.css';

const prefix = 'm-avatar';

const customAvatarProps = [
	'size',
	'shape',
	'icon',
	'random',
	'onPos',
	'randomColor',
	'gradients',
	'children',
	'className',
	'style'
]

interface AvatarProps extends CommonInterface {
	icon?: string | React.ReactElement;
	random?: boolean;
	randomColor?: boolean;
	onPos?: any;
}

class Avatar extends React.Component<AvatarProps, any> {

	private static readonly defaultProps = {
		size: 'normal',
		shape: 'square',
		gradients: 'RiskyConcrete'
	}
	avatarEle: React.RefObject<any>;

	constructor(props) {
		super(props);
		this.avatarEle = React.createRef();
		this.state = {
			randomAlphabet: randomAlphabet(65, 90)
		}
	}

	handleExtraProps = (): JSXPropsInterface<AvatarProps> => {
		const avatarProps = JSXProps<AvatarProps>(this.props, customAvatarProps)
		const { customProps } = avatarProps;
		customProps.size = handleSize(customProps.size as SizeType);
		return avatarProps;
	}

	handleClassName = (classProps) => {
		const {
			size,
			shape,
			gradients,
			className,
			randomColor
		} = classProps;
		return classNames({
			[`${prefix}-default`]: true,
			[`${prefix}-shape-${shape}`]: shape,
			[`${classNames(className)}`]: className,
			[`${prefix}-size-${size}`]: typeReplace(size!, 'String', false),
			[`m-gradients-${randomColor? randomGradients(gradientsArray): gradients}`]: true,
		});
	}

	EmbedChild = (props)=>{
		return props.icon ? (
			React.isValidElement(props.icon) ?
			props.icon:
			<Icon
				style={{marginRight: '0'}}
				size={['100%','100%']}
				src={props.icon}
			></Icon>
		) : (
			<React.Fragment>
				{
					props.random?
					this.state.randomAlphabet:
					props.children
				}
			</React.Fragment>
		)
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
				ref={this.avatarEle}
				{...nativeProps}
				className={className}
				style={mergeStyle}
			>{this.EmbedChild(customProps)}</div>
		)
	}
}
polyfill(Avatar);
export default Avatar;
