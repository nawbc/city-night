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
import FoldPanel from './panel';
import './style/fold.css';

export const FoldContext = React.createContext({});

export type ModeType = 'simple' | 'normal' | 'custom';
const prefix = 'm-fold';

const customFoldProps = [
	'size',
	'fillet',
	'mode',
	'foldDuration',
	'className',
	'children',
	'style'
]

export interface FoldProps extends CommonInterface {
	attach?: PositionType;
	mode?: ModeType;
	fillet?: boolean;
	foldDuration?: number;
}

/**
 *
 * @example
 * <Fold
 *	fillet={true} //share with Fold.Panel
 *
 * ></Fold>
 *
 */
class Fold extends React.Component<FoldProps, any> {

	static Panel: typeof FoldPanel = FoldPanel;

	private static readonly defaultProps = {
		mode: 'normal',
		fillet: false,
		foldDuration: 400
	}

	handleExtraProps = (): JSXPropsInterface<FoldProps> => {
		const foldProps = JSXProps<FoldProps>(this.props, customFoldProps);
		const { customProps } = foldProps;
		customProps.size = handleSize(customProps.size as SizeType);
		return foldProps;
	}

	handleClassName = (classProps) => {
		const {
			className,
			mode
		} = classProps;

		return classNames({
			[`${prefix}-default`]: true,
			[`${className}`]: className,
			[`${prefix}-${mode}`]: mode,
		});
	}

	render() {
		const { nativeProps, customProps } = this.handleExtraProps();
		const className = this.handleClassName(customProps);
		const mergeStyle = {
			...typeReplace(customProps.size as Object, 'Object', {}),
			...typeReplace(customProps.style as Object, 'Object', {})
		}

		return (
			<FoldContext.Provider
				value={{
					fillet: customProps.fillet,
					mode: customProps.mode,
					foldDuration: customProps.foldDuration
				}}
			>
				<div
					{...nativeProps}
					className={className}
					style={mergeStyle}
				>{customProps.children}</div>
			</FoldContext.Provider>
		)
	}
}
polyfill(Fold);
export default Fold;
