import React from 'react';
import SVG from 'react-svg';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { typeReplace, isObject } from '../../utils/muguetDash';
import { handleSize, JSXProps } from '../../utils/handleJSXProps';
import { SizeType } from '../../interfaces/customTypes';
import {
	CommonInterface,
	JSXPropsInterface,
} from '../../interfaces/common.interface';
import './style/icon.css';

/**
 * @BUG when
 * <Bubble icon={a}>
 *      <Button icon={a}><Button>
 * </Bubble>
 * using same icon one component can't display
 * when render at same time, isSvg console true false`
 */

interface IconProps extends CommonInterface {
	src?: string;
}

// ExpReg
export const isSvgExpReg = /\.svg$/gi;
//custom attributes
const customIconAttrs = ['src', 'className', 'effect', 'shape', 'size', 'style'];

/**
 * this is a icon module, cant set width,height in css,  if do that,
 * the child module will be invalid
 *
 * @module Icon
 * @example
 * <Icon
 *      src={require('../asset/demo.svg')}
 *      className="icon_test"
 *      effect="hover-scale"// [hover|click]-[scale|up|down|left|right]
 *      shape="circle" // fillet  | circle
 *      style={{width: '100px'}}
 *      size={[100, 100]}
 * ></Icon>
 *
 */


class Icon extends React.Component<IconProps, any> {

	private static readonly defaultProps = {
		size: 'normal',
	}

	private readonly defaultName = {
		childIconName: 'm-icon-child-svg'
	}

	constructor(props) {
		super(props);
	}

	handleExtraProps = (): JSXPropsInterface<IconProps> => {
		const iconProps = JSXProps<IconProps>(this.props, customIconAttrs);
		const { customProps } = iconProps;
		customProps.size = handleSize(customProps.size as SizeType);
		return iconProps;
	}

	handleClassName = (classProps) => {
		const {
			size,
			shape,
			effect,
			className,
		} = classProps;
		return classNames({
			'm-icon-default': true,
			[`${className}`]: className,
			[`m-icon-shape-${shape}`]: shape,
			[`m-icon-effect-${effect}`]: effect,
			[`m-icon-size-${size}`]: typeReplace(size, 'String', false),
		});
	}

	EmbedChild = (props): React.ReactElement => {
		const isSvg = isSvgExpReg.test(props.src);
		return (
			isObject(props.src) ?
				props.src :
				isSvg ?
					<SVG
						src={props.src}
						wrapper='div'
						className={this.defaultName.childIconName}
					></SVG> :
					<div
						className={this.defaultName.childIconName}
						style={{ backgroundImage: `url(${props.src})` }}
					></div>
		)
	}

	render() {
		const { nativeProps, customProps } = this.handleExtraProps();
		const className = this.handleClassName(customProps);
		const mergeStyle = {
			...typeReplace(customProps.size as SizeType, 'Object', {}),
			...typeReplace(customProps.style as Object, 'Object', {})
		}
		return (
			<i
				{...nativeProps}
				className={className}
				style={mergeStyle}
			>
				<this.EmbedChild {...customProps}></this.EmbedChild>
			</i>
		)
	}
}
polyfill(Icon);
export default Icon;
