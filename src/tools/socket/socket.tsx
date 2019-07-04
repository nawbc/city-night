import React from 'react';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { typeReplace } from '../../utils/muguetDash';
import { handleSize, JSXProps } from '../../utils/handleJSXProps';
import {
	CommonInterface,
	JSXPropsInterface
} from '../../interfaces/common.interface';

import './style/socket.css';
import { SizeType } from '../../interfaces/customTypes';

const prefix = 'm-socket';

const customSocketAttrs = [
	'onClose',
	'onOpen',
	'shape',
	'content',
	'gradients',
	'disable',
	'onClick',
	// 'content',
	'size',
	'OnOff',
	'style',
	'children',
	'className'
];

interface SocketProps extends CommonInterface {
	onClose?: (e: MouseEvent)=>void;
	onOpen?: (e: MouseEvent)=>void;
	OnOff?: boolean;
	disable?: boolean;
	content?: React.ReactElement | string;
}


/**
 * Socket
 *
 * @example
 * <Socket
 * 		size={'normal'}
 *		onClose={(e)=>{console.log('closed')}}  \\ emitted when close
 *		onOpen={(e)=>{console.log('open')}}  \\ emitted when open
 *		OnOff={true}
 *		disable={true}
 * 		content={<span>❤</span>}   socket button content
 *		gradients='DeepBlue'
 * 		style={{background: '#000'}}
 *		className='socket' @see classNames {@link https://www.npmjs.com/package/classnames}
 * ></Socket>
 *
 *
 */
class Socket extends React.Component<SocketProps, any> {

	private static readonly defaultProps = {
		size: 'normal',
		OnOff: false,
		gradients: "PartyBliss",
	}

	constructor(props) {
		super(props);
	}


	handleClick = (e, props): void=>{
		props.onClick();

		if(props.onOpen){
			if(props.OnOff) props.onOpen(e);
		}

		if(props.onClose){
			if(props.OnOff) props.onClose(e);
		}
	}

	handleExtraProps = (): JSXPropsInterface<SocketProps> => {
		const SocketProps = JSXProps<SocketProps>(this.props, customSocketAttrs);
		const { customProps } = SocketProps;
		customProps.size = handleSize(customProps.size as SizeType);
		return SocketProps;
	}

	handleClassName = (classProps) => {
		const {
			OnOff,
			gradients,
			shape,
			className
		} = classProps;
		return {
			ContainerName: classNames({
				[`${classNames(className)}`]: true,
				[`${prefix}-container`]: true,
				[`${prefix}-container-${shape}`]: true,
			}),
			ButtonName: classNames({
				[`${prefix}-button`]: true,
				[`${prefix}-button-${shape}`]: true,
				[`m-gradients-${gradients}`]: gradients,
				[`${prefix}-button-${OnOff ? 'open' : 'close'}`]: true,
			}),
			ContentName: classNames({
				[`${prefix}-content`]: true,
				[`${prefix}-content-close`]: !OnOff
			})
		}
	}

	render() {
		const { nativeProps, customProps } = this.handleExtraProps();
		const {
			ContainerName,
			ContentName,
			ButtonName
		} = this.handleClassName(customProps);
		const mergeStyle = {
			...typeReplace(customProps.size as SizeType, 'Object', {}),
			...typeReplace(customProps.style as Object, 'Object', {})
		}

		return (
			<div
				{...nativeProps}
				style={mergeStyle}
				className={ContainerName}
				onClick={(e)=>this.handleClick(e, customProps)}
			>
				<div
					className={ContentName}
				>{<span>{customProps.children}</span>}</div>
				<div
					className={ButtonName}
				>{customProps.content}</div>
			</div>
		)
	}
}
polyfill(Socket);
export default Socket;
