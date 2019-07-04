import React from 'react';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { typeReplace } from '../../utils/muguetDash';
import { handleSize, JSXProps } from '../../utils/handleJSXProps';
import {
	CommonInterface,
	JSXPropsInterface,
} from '../../interfaces/common.interface';
import './style/sticky.css';
import { PositionType, SizeType } from '../../interfaces/customTypes';

const prefix = 'm-sticky';
const customStickyProps = [
	'attach',
	'target',
	'style',
	'children',
	'className'
]

interface StickyProps extends CommonInterface {
	attach?: PositionType;
	target?: React.ReactElement;
}

class ScrollBox extends React.Component<StickyProps, any> {

	private static readonly defaultProps = {

	}

	constructor(props) {
		super(props);
		this.state = {
			isSticky: false,
			stickied: false,
		}
	}

	componentDidMount() {

	}

	handleExtraProps = (): JSXPropsInterface<StickyProps> => {
		const stickyProps = JSXProps<StickyProps>(this.props, customStickyProps)
		const { customProps } = stickyProps
		customProps.size = handleSize(customProps.size as SizeType);
		return stickyProps
	}

	handleClassName = (classProps) => {
		const {
			className,
		} = classProps;
		return classNames({
			[`${classNames(className)}`]: true,
			[`${prefix}-default`]: true,
		});
	}

	render() {
		const { nativeProps, customProps } = this.handleExtraProps();
		const className = this.handleClassName(customProps);
		const mergeStyle = {
			...typeReplace(customProps.size as Object, 'Object', {}),
			...typeReplace(customProps.style as Object, 'Object', {})
		}
		console.log(customProps.children)
		return (
			<div
				{...nativeProps}
				className={className}
				style={mergeStyle}
			>{customProps.children}</div>
		)
	}
}
polyfill(ScrollBox);
export default ScrollBox;
