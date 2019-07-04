import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import { typeReplace } from '../../utils/muguetDash';
import { handleSize, JSXProps } from '../../utils/handleJSXProps';
import { SizeType } from '../../interfaces/customTypes';
import classNames from 'classnames';
import {
	JSXPropsInterface,
} from '../../interfaces/common.interface';
import './style/scrollBox.css';


const customScrollBoxProps = [
	'size',
	'style',
	'hover',
	'children',
	'setHeight',
	'className'
]

interface ScrollBoxProps extends React.HTMLAttributes<any> {
	size?: SizeType;
	setHeight?: Function;
	hover?: boolean;
}

class ScrollBox extends React.Component<ScrollBoxProps, any> {

	componentDidMount(){
		const scrollEle  = this.refs['scrollContainer'] as HTMLElement;
	}

	handleExtraProps = (): JSXPropsInterface<ScrollBoxProps> => {
		const scrollBoxProps = JSXProps<ScrollBoxProps>(this.props, customScrollBoxProps);
		const { customProps } = scrollBoxProps;
		customProps.size = handleSize(customProps.size as SizeType);
		return scrollBoxProps;
	}

	render() {
		const { nativeProps, customProps } = this.handleExtraProps();
		const mergeStyle = {
			...typeReplace(customProps.size as Object, 'Object', {}),
			...typeReplace(customProps.style as Object, 'Object', {})
		}
		const containerName = classNames({
			'm-scrollBox-container': true,
			[`${customProps.className}`] : customProps.className
		})
		const wrapperName = classNames({
			'm-scrollBox-wrapper': true,
			'm-scrollBox-scroll': !customProps.hover
		})
		return (
			<div
				className={containerName}
				{...nativeProps}
			>
				<div
					ref='scrollWrapper'
					className={wrapperName}
					style={mergeStyle}
					onMouseMove={()=>{
						if(customProps.hover)
							this.refs['scrollWrapper']!['style']['overflow'] = 'auto'
					}}
					onMouseLeave={()=>{
						if(customProps.hover)
							this.refs['scrollWrapper']!['style']['overflow'] = 'hidden'
					}}
				>{customProps.children}</div>
			</div>
		)
	}
}
polyfill(ScrollBox);
export default ScrollBox;
