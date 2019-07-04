import React from 'react';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { typeReplace } from '../../utils/muguetDash';
import { handleSize, JSXProps } from '../../utils/handleJSXProps';
import {
	CommonInterface,
	JSXPropsInterface,
} from '../../interfaces/common.interface';
import { SizeType } from '../../interfaces/customTypes';



const customScrollBoxProps = []

interface ScrollBoxProps extends CommonInterface {
	src?: string;
	type?: string; //browser | system
}

class ScrollBox extends React.Component<ScrollBoxProps, any> {

	private static readonly defaultProps = {
		size: 'normal',
	}

	private readonly defaultName = {
		childIconName: 'm-icon-child-svg'
	}

	constructor(props) {
		super(props);
	}

	handleExtraProps = (): JSXPropsInterface<ScrollBoxProps> => {
		const scrollBoxProps = JSXProps<ScrollBoxProps>(this.props, customScrollBoxProps);
		const { customProps } = scrollBoxProps;
		customProps.size = handleSize(customProps.size as SizeType);
		return scrollBoxProps;
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
		return (
			<div></div>
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
			<div></div>
		)
	}
}
polyfill(ScrollBox);
export default ScrollBox;
