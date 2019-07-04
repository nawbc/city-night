import React from 'react';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { typeReplace } from '../../utils/muguetDash';
import { handleSize, JSXProps } from '../../utils/handleJSXProps';
import {
	CommonInterface,
	JSXPropsInterface,
} from '../../interfaces/common.interface';
import { PositionType, SizeType } from '../../interfaces/customTypes';
import ReactDOM from 'react-dom';


const customContextMenuProps = [
	'children',
	'className',
	'style'
]

interface ContextMenuProps extends CommonInterface {
	attach?: PositionType;
}

class ContextMenu extends React.Component<ContextMenuProps, any> {

	private static readonly defaultProps = {
		size: 'normal',
	}
	contextMenuContainer: HTMLDivElement;

	state={
		contextmenu: false
	}
	contextMenuRef: React.RefObject<any>;

	constructor(props) {
		super(props);
		this.contextMenuContainer = document.createElement('div');
		this.contextMenuRef = React.createRef();
	}

	componentDidMount(){
		document.body.appendChild(this.contextMenuContainer);
		document.oncontextmenu = (e)=>{
			e.preventDefault();
			this.setState({
				contextmenu: !this.state.contextmenu
			})
		}
	}

	handlePosition = ()=>{
		const contextMenuEle = this.contextMenuRef.current as HTMLElement;

	}

	handleExtraProps = (): JSXPropsInterface<ContextMenuProps> => {
		const stickyProps = JSXProps<ContextMenuProps>(this.props, customContextMenuProps);
		const { customProps } = stickyProps;
		customProps.size = handleSize(customProps.size as SizeType);
		return stickyProps;
	}

	handleClassName = (classProps) => {
		const {
			size,
			gradients,
			className,
		} = classProps;
		return classNames({
			[`m-gradients-${gradients}`]: gradients,
			[`${classNames(className)}`]: className,
			[`muguet-Muguet-size-${size}`]: typeReplace(size!, 'String', false),
		});
	}

	renderContextMenu = ()=>{
		const { nativeProps, customProps } = this.handleExtraProps();
		const className = this.handleClassName(customProps);
		const mergeStyle = {
			...typeReplace(customProps.size as Object, 'Object', {}),
			...typeReplace(customProps.style as Object, 'Object', {})
		}

		var list = [{
			value: <div>wanghan</div>,
			icon: require("../../../assets/lock.svg"),
			event: {
				onClick(){

				}
			}
		},{}]

		return (

			<div
				{...nativeProps}
				style={mergeStyle}
				ref={this.contextMenuRef}
			>
			</div>
		)
	}

	render() {
		const isShowContextMenu = this.state.contextmenu ? this.renderContextMenu(): null;
		return ReactDOM.createPortal(isShowContextMenu, this.contextMenuContainer);
	}
}
polyfill(ContextMenu);
export default ContextMenu;
