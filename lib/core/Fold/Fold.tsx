/**=================================================================================================
 *			AUTHOR --- Han Wang
 *			LICENSE --- Apache-2.0
 *			LASTMODIFY --- 2019-09-13T14:32:46.915Z
 *			REPOSITORY --- https://github.com/sewerganger/silent-concept
 *=================================================================================================*/
import React, { HTMLAttributes, FC, useContext, useEffect } from 'react';
import classNames from 'classnames';
import { SilentCommonAttr, ClassValue } from '../../interfaces';
import { accordType, splitJsxProps, handleSize, completeStyle } from '../../helper';

export type modeType = 'simple' | 'normal';

const prefix = 's-fold';

export const FoldContext = React.createContext({});

export interface FoldTempProps extends SilentCommonAttr, HTMLAttributes<any> {
	addStyle?: Record<string, object>;
	duration?: number;
	className?: any;
	mode?: modeType;
	fillet?: boolean;
	isFold?: boolean;
}

export interface FoldProps extends FoldTempProps {
	className?: ClassValue;
}

const presetProps = function(props: FoldProps) {
	const sProps = splitJsxProps<FoldProps>(props, [
		'size',
		'style',
		'className',
		'mode',
		'duration',
		'fillet',
		'children',
		'isFold',
		'addStyle'
	]);
	sProps.customProps.size = handleSize(sProps.customProps.size!);
	return sProps;
};

/**=================================================================================================
 *			LASTMODIFY --- 2019-09-21T14:12:30.132Z
 *			DESCRIPTION --- fold 折叠面板的container 可以全局设置panel 属性
 *			PROPS
 *				--- size [SizeType]
 *				--- mode ['normal'|'simple']  启用圆角
 *				--- style [CSSProperties]  设置fold style
 *				--- isFold [boolean]  包裹整个Panel 的style 可用来调整位置
 *				--- fillet [boolean]  启用圆角 normal 和 simple 模式不相同
 *				--- duration [number]  设置panel的展开时间
 *				--- addStyle [Record<string,object>]  批量添加 style 一旦设置改页面所有子元素全 style都改变
 *  =================================================================================================*/

const Fold: FC<FoldProps> = function(props) {
	const { nativeProps, customProps } = presetProps(props);
	const { addStyle } = customProps;
	const foldContext = useContext(FoldContext);
	const containerStyle = {
		...accordType(customProps.size, 'Object', {}),
		...customProps.style
	};

	for (const prop in customProps) foldContext[prop] = customProps[prop];

	useEffect(() => {
		/**=================================================================================================
		 * 改变组件内部 style
		 *=================================================================================================*/
		!!addStyle && completeStyle(prefix, addStyle);
	}, [addStyle]);

	return (
		<div
			{...nativeProps}
			className={classNames(prefix, customProps.className)}
			style={containerStyle}
		>
			{props.children}
		</div>
	);
};

export default Fold;
