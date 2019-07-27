import React from 'react';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { typeReplace, isFunction } from '../../utils/muguetDash';
import { handleSize, JSXProps } from '../../utils/handleJSXProps';
import {
	CommonInterface,
	JSXPropsInterface,
} from '../../interfaces/common.interface';
import './style/icon.css';
import { SizeType } from '../../interfaces/customTypes';
import SVG from './svg';
import IconContent from './iconContent';
import Loading from '../loading/loading';


export const prefix = 'm-icon';

interface IconProps extends CommonInterface {
	src?: string;
	beforeLoading?: string | React.ReactElement | boolean;
	onContainer?: (target: HTMLElement) => void;
}

//custom attributes
const customIconAttrs = [
	'beforeLoading',
	'src',
	'onContainer',
	'className',
	'effect',
	'shape',
	'size',
	'style'
];

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
 * 			onVary={(containerEle)=>{}} //containerEle change
 * ></Icon>
 *
 * <Icon.SVG
 * 	src={require()}
 * >
 *		<path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
 * </Icon.SVG>
 */

class Icon extends React.Component<IconProps, any> {

	private static readonly defaultProps = {
		size: 'normal',
	}

	tempSaver: IconProps;

	static SVG: typeof SVG = SVG;

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
			[`${prefix}-default`]: true,
			[`${className}`]: className,
			[`${prefix}-shape-${shape}`]: shape,
			[`${prefix}-effect-${effect}`]: effect,
			[`${prefix}-size-${size}`]: typeReplace(size, 'String', false),
		});
	}

	render() {
		const { nativeProps, customProps } = this.handleExtraProps();
		const className = this.handleClassName(customProps);
		const mergeStyle = {
			...typeReplace(customProps.size as Object, 'Object', {}),
			...typeReplace(customProps.style as Object, 'Object', {})
		}
		const LazyLoader = React.lazy(() => import("./iconContent"));
		const { beforeLoading } = customProps;
		this.tempSaver = customProps;
		return (
			<i
				{...nativeProps}
				className={className}
				style={mergeStyle}
				ref="icon_ref"
			>
				{
					beforeLoading ?
						<React.Suspense fallback={beforeLoading ? beforeLoading : <Loading.Hoop />}>
							<LazyLoader {...customProps} />
						</React.Suspense> :
						<IconContent {...customProps} />
				}
			</i>
		)
	}

	componentDidMount() {
		if (isFunction(this.tempSaver.onContainer!))
			this.tempSaver.onContainer!(this.refs['icon_ref'] as HTMLElement);
	}
}

polyfill(Icon);
export default Icon;
