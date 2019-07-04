import React from 'react';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { typeReplace } from '../../utils/muguetDash';
import { handleSize, JSXProps } from '../../utils/handleJSXProps';
import ContextMenu from './contextMenu';
import {
	CommonInterface,
	JSXPropsInterface,
} from '../../interfaces/common.interface';
import { PositionType, SizeType } from '../../interfaces/customTypes';




const customMenuProps = [
	'children',
	'className',
	'style'
]

interface MenuProps extends CommonInterface {
	attach?: PositionType;
}

class Item {

}

class NextItem{

}

class Menu extends React.Component<MenuProps, any> {

	static context: typeof ContextMenu = ContextMenu;
	static item: typeof Item = Item;
	static nextItem: typeof NextItem = NextItem;

	constructor(props) {
		super(props);
	}

	handleExtraProps = (): JSXPropsInterface<MenuProps> => {
		const stickyProps = JSXProps<MenuProps>(this.props, customMenuProps);
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
			[`Menu-Menu-size-${size}`]: typeReplace(size!, 'String', false),
		});
	}

	render() {
		const { nativeProps, customProps } = this.handleExtraProps();
		const className = this.handleClassName(customProps);
		const mergeStyle = {
			...typeReplace(customProps.size as Object, 'Object', {}),
			...typeReplace(customProps.style as Object, 'Object', {})
		}
		return customProps.children;
	}
}
polyfill(Menu);
export default Menu;
