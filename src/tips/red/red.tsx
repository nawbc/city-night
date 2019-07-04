import classNames from 'classnames';
import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import { CommonInterface, JSXPropsInterface } from '../../interfaces/common.interface';
import { SizeType, PositionType } from '../../interfaces/customTypes';
import { handleSize, JSXProps } from '../../utils/handleJSXProps';
import { typeReplace } from '../../utils/muguetDash';
import ComputedStyle from 'computed-style';
import './style/red.css';

const prefix = 'm-red';

const customRedProps = [
	'size',
	'shape',
	'count',
	'place',
	'gradients',
	'children',
	'maximum',
	'className',
	'mini',
	'style',
	'containStyle'
]

interface RedProps extends CommonInterface {
	count?: number;
	place?: PositionType;
	containStyle?: React.CSSProperties;
	maximum?: number;
	mini?: boolean;
}

class Red extends React.Component<RedProps, any> {
	redRef: React.RefObject<any>;

	private static readonly defaultProps = {
		size: 'normal',
		place: 'topRight',
		shape: 'square'
	}
	redPlace: PositionType;

	constructor(props) {
		super(props);
		this.redRef = React.createRef();
	}


	componentDidMount() {
		this.handlePosition();
	}

	handlePosition() {
		const redEle = this.redRef.current as HTMLElement;
		const siblingEle = redEle.nextElementSibling as HTMLElement;
		const margins = {
			left: parseInt(ComputedStyle(siblingEle, 'margin-left')),
			right: parseInt(ComputedStyle(siblingEle, 'margin-right')),
			top: parseInt(ComputedStyle(siblingEle, 'margin-top')),
			bottom: parseInt(ComputedStyle(siblingEle, 'margin-bottom'))
		}

		redEle.style.left = margins.left - redEle.offsetWidth / 2 +
			(this.redPlace === 'topRight' || this.redPlace === 'bottomRight' ? siblingEle.offsetWidth : 0) + 'px';
		redEle.style.top = margins.top - redEle.offsetHeight / 2 +
			(this.redPlace === 'bottomRight' || this.redPlace === 'bottomLeft' ? siblingEle.offsetHeight : 0) + 'px';
	}

	handleExtraProps = (): JSXPropsInterface<RedProps> => {
		const redProps = JSXProps<RedProps>(this.props, customRedProps);
		const { customProps } = redProps;
		customProps.size = handleSize(customProps.size as SizeType);
		return redProps;
	}

	handleCount = (props) => {
		const { count, maximum } = props;
		if (count >= 0) {
			if (maximum) {
				if (count >= maximum) {
					return (maximum - 1) + '+';
				} else {
					return count;
				}
			} else {
				return count;
			}
		} else {
			return null;
		}
	}

	handleClassName = (classProps) => {
		const {
			size,
			className,
			shape,
			gradients,
			mini
		} = classProps;
		return {
			containerName: classNames({
				[`${prefix}-container`]: true,
			}),
			redName: classNames({
				[`${prefix}-default`]: true,
				[`${prefix}-red`]: !gradients,
				[`${prefix}-shape-${shape}`]: shape,
				[`${prefix}-${mini ? 'mini' : 'normal'}`]: true,
				[`m-gradients-${gradients}`]: gradients,
				[`${classNames(className)}`]: className,
				[`${prefix}-size-${size}`]: typeReplace(size!, 'String', false),
			})
		}
	}

	render() {
		const { nativeProps, customProps } = this.handleExtraProps();
		const className = this.handleClassName(customProps);
		const mergeStyle = {
			...typeReplace(customProps.size as Object, 'Object', {}),
			...typeReplace(customProps.style as Object, 'Object', {})
		}
		this.redPlace = customProps.place as PositionType;
		return (
			<div
				{...nativeProps}
				className={className.containerName}
				style={customProps.containStyle}
			>
				<div
					style={mergeStyle}
					ref={this.redRef}
					className={className.redName}
				>{this.handleCount(customProps)}</div>
				{React.Children.only(customProps.children)}
			</div>
		)
	}
}

polyfill(Red);
export default Red;
