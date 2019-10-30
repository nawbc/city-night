/**=================================================================================================
 *			AUTHOR --- Han Wang
 *			LICENSE --- Apache-2.0
 *			LASTMODIFY --- 2019-09-17T09:48:41.751Z
 *			REPOSITORY --- https://github.com/sewerganger/silent-concept
 *=================================================================================================*/

import React, {
	ButtonHTMLAttributes,
	AnchorHTMLAttributes,
	FC,
	CSSProperties,
	ReactElement,
	useRef
} from 'react';
import { SilentCommonAttr, SizeType, ClassValue, EffectType, DefaultColor } from '../../interfaces';
import Icon from '../Icon/';
import classNames from 'classnames';
import { accordType, splitJsxProps, handleSize, is } from '../../helper';
import './style/button.scss';

type ButtonModeType = 'reset' | 'submit' | 'button' | 'link' | 'reload';
type TargetType = 'blank' | 'self' | 'parent' | 'top' | string;

const prefix = 's-button';

/**=================================================================================================
 *			constantly variables
 *=================================================================================================*/

const buttonIconDefaultStyle = function(shape) {
	return {
		marginRight: shape === 'circle' ? 0 : '10px',
		marginTop: 0
	};
};
/* eslint-disable @typescript-eslint/indent*/
interface ButtonTempProps<T>
	extends SilentCommonAttr,
		ButtonHTMLAttributes<T>,
		AnchorHTMLAttributes<T> {
	pigment?: DefaultColor;
	mode?: ButtonModeType;
	target?: TargetType;
	type?: any;
	className?: any;
	effect?: EffectType;
	readOnly?: boolean;
	icon?: ReactElement | string;
	hoverStyle?: CSSProperties;
	contentStyle?: CSSProperties;
	iconStyle?: CSSProperties;
	value?: string;
}

export interface ButtonProps extends ButtonTempProps<any> {
	className?: ClassValue;
	icon?: ReactElement | string;
}

const setHoverStyle = function(hoverStyle, onMouseLeave, onMouseEnter) {
	return {
		onMouseEnter: e => {
			const targetElement = e.target as HTMLElement;
			for (const prop in hoverStyle) {
				targetElement.style[prop] = hoverStyle[prop];
			}
			is.function(onMouseEnter) && onMouseEnter(e);
		},
		onMouseLeave: e => {
			const targetElement = e.target as HTMLElement;
			for (const prop in hoverStyle) {
				targetElement.style[prop] = 'unset';
			}
			is.function(onMouseLeave) && onMouseLeave(e);
		}
	};
};

/**=================================================================================================
 *			处理reload模式
 *=================================================================================================*/
const handleReloadMode = function(event, onClick, mode) {
	const e = event || (window.event as MouseEvent);
	'reload' === mode && window.location.reload();
	is.function(onClick) && onClick(e);
};

/**=================================================================================================
 *			带有链接的Button
 *=================================================================================================*/

const ButtonWithLink = function({ nativeProps, mode, children, target, readOnly }) {
	return mode === 'link' && !readOnly ? (
		<a {...nativeProps} target={target}>
			{children}
		</a>
	) : (
		children
	);
};

const presetClassName = function(cProps: ButtonProps) {
	const { mode, readOnly, size, effect, pigment, shape, className } = cProps;

	return classNames(prefix, className, {
		[`${prefix}-${size}`]: accordType(size, 'String', false),
		[`${prefix}-fill`]: is.object(size),
		[`${prefix}-${effect}`]: !!effect,
		[`${prefix}-${mode}`]: mode,
		[`${prefix}-${shape}`]: shape,
		[`${prefix}-readOnly`]: readOnly,
		[`${prefix}-${pigment}`]: pigment && mode !== 'link'
	});
};

const presetProps = function(props: ButtonProps) {
	const sProps = splitJsxProps<ButtonProps>(props, [
		'size',
		'style',
		'pigment',
		'className',
		'readOnly',
		'mode',
		'effect',
		'target',
		'children',
		'shape',
		'icon',
		'hoverStyle',
		'onClick',
		'onMouseEnter',
		'onMouseLeave',
		'onMouseDown',
		'onMouseUp',
		'iconStyle',
		'contentStyle',
		'value'
	]);
	sProps.customProps.size = handleSize(sProps.customProps.size!);
	sProps.customProps.target = '_' + sProps.customProps.target;
	return sProps;
};

/**=================================================================================================
 *			LASTMODIFY --- 2019-08-27T15:00:04.462Z
 *			DESCRIPTION ---  按钮
 *			PROPS
 *				--- size [SizeType]
 *				--- pigment [string|CSSProperties]
 *				--- speed [string]
 *				--- contentStyle [string] button 内容文字 的 style
 *				--- iconStyle [string] 对应icon style
 *  =================================================================================================*/

const Button: FC<ButtonProps> = function(props) {
	const { nativeProps, customProps } = presetProps(props);
	const {
		style,
		size,
		children,
		mode,
		target,
		readOnly,
		hoverStyle,
		icon,
		onClick,
		contentStyle,
		iconStyle,
		value,
		onMouseEnter,
		onMouseLeave,
		shape
	} = customProps;
	const ref = useRef(null);
	const classNames = presetClassName(customProps);

	const containerStyle = {
		...accordType(size, 'Object', {}),
		...style
	};

	const setIconStyle = {
		...iconStyle,
		...buttonIconDefaultStyle(shape)
	};

	// useEffect(() => {
	// const ele = ref.current as unknown as HTMLElement;
	// const bgColor = window.getComputedStyle(ele).backgroundColor;
	// const borderColor = window.getComputedStyle(ele).borderColor;
	// }, []);

	return (
		<ButtonWithLink nativeProps={nativeProps} mode={mode} target={target} readOnly={readOnly}>
			<button
				ref={ref}
				id={prefix}
				{...setHoverStyle(hoverStyle, onMouseLeave, onMouseEnter)}
				type={mode as any}
				style={containerStyle}
				disabled={readOnly}
				className={classNames}
				onClick={e => {
					handleReloadMode(e, onClick, mode);
				}}
			>
				{icon &&
					(React.isValidElement(icon) ? (
						React.cloneElement(icon, { style: setIconStyle })
					) : (
						<Icon style={setIconStyle} src={icon} />
					))}
				<span
					style={{
						position: 'relative',
						...contentStyle
					}}
				>
					{children || value}
				</span>
			</button>
		</ButtonWithLink>
	);
};

Button.defaultProps = {
	size: 'normal' as SizeType,
	readOnly: false,
	mode: 'button' as ButtonModeType,
	target: 'blank',
	pigment: 'grey',
	shape: 'rect'
};

export default Button;
