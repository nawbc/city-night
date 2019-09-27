/**=================================================================================================
 *			AUTHOR --- Han Wang
 *			LICENSE --- Apache-2.0
 *			LASTMODIFY --- 2019-09-13T14:32:46.915Z
 *			REPOSITORY --- https://github.com/sewerganger/silent-concept
 *=================================================================================================*/

import classNames from 'classnames';
import { AutoHeight } from 'height-zero2auto';
import React, { HTMLAttributes, FC, ReactNode, ReactElement, useContext, useRef, useLayoutEffect, CSSProperties, useState } from 'react';
import { SilentCommonAttr, ClassValue, SizeType } from '../../interfaces';
import { FoldContext, FoldProps } from './fold';
import computedStyle from 'computed-style';
import {
	accordType,
	splitJsxProps,
	handleSize,
	is,
	makeColorDarker
} from '../../helper';
import './style/panel.scss';
import Icon from '../icon';

export type ModeType = 'simple' | 'normal';

const prefix = 's-panel';

const PanelAttrs = [
	'size',
	'style',
	'className',
	'mode',
	'duration',
	'fillet',
	'children',
	'isFold',
	'onFold',
	'onClick',
	'icon',
	'timingFunction',
	'duration',
	'headline',
	'containerStyle',
	'headlineStyle',
	'innerStyle',
	'onClick',
	'onDelete',
	'readOnly'
];

export const PanelContext = React.createContext({});

interface PanelTempProps extends SilentCommonAttr, HTMLAttributes<any> {
	duration?: number;
	className?: any;
	size?: SizeType;
	mode?: ModeType;
	fillet?: boolean;
	timingFunction?: string;
	headline?: ReactNode;
	icon?: ReactElement | string;
	isFold?: boolean | string;
	onDelete?: () => boolean;
	readOnly?: boolean;
	headlineStyle?: CSSProperties;
	innerStyle?: CSSProperties;
	onFold?: any;
}

export interface PanelProps extends PanelTempProps {
	className?: ClassValue;
}

const presetProps = function (props: PanelProps) {
	const sProps = splitJsxProps<PanelProps>(props, PanelAttrs);
	sProps.customProps.size = handleSize(sProps.customProps.size!);
	return sProps;
};

interface ClassNameEx { containerCN: string; headlineCN: string; innerCN: string; iconCN: string };
const presetClassName = function (
	cProps: PanelProps,
	useFold: any,
	mode: ModeType,
	fillet: boolean,
	readOnly: boolean
): ClassNameEx {
	const { className } = cProps;
	const isSimpleFillet = (mode === 'simple') && fillet;

	return {
		containerCN: classNames(prefix, className),
		headlineCN: classNames({
			[`${prefix}-headline`]: true,
			[`${prefix}-headline-${mode}`]: true,
			[`${prefix}-headline-simple-fillet`]: isSimpleFillet,
			[`${prefix}-headline-readonly`]: readOnly
		}),
		innerCN: classNames({
			[`${prefix}-inner-${mode}`]: true,
			[`${prefix}-inner-simple-fillet`]: isSimpleFillet
		}),
		iconCN: classNames({
			[`${prefix}-icon`]: true,
			[`${prefix}-icon-${useFold ? 'fold' : 'unFold'}`]: true
		})
	};
};

/**=================================================================================================
 *			LASTMODIFY --- 2019-09-21T14:12:30.132Z
 *			DESCRIPTION --- fold 折叠面板的container 可以设置全局 属性 传递到Panel
 *			PROPS
 *				--- size [SizeType]
 *				--- size [SizeType]
 *  =================================================================================================*/

const Panel: FC<PanelProps> = function (props) {
	const { nativeProps, customProps } = presetProps(props);
	const { headline, children, icon, onClick,
		onDelete, headlineStyle, innerStyle,
		timingFunction, readOnly
	} = customProps;

	const context: FoldProps = useContext(FoldContext);
	const mode = context.mode || customProps.mode as ModeType;
	const fillet = context.fillet || customProps.fillet as boolean;
	const duration = context.duration || customProps.duration;

	const isFold = is.undefined(context.isFold) ?
		(is.undefined(customProps.isFold) ? undefined : customProps.isFold)
		: context.isFold;

	const [selfFold, setSelfFold] = useState(!!!isFold);

	/**=================================================================================================
	 *		如果panel 有isFold就用  isFold  否则就使用 panel 内置的
	 *=================================================================================================*/
	const useFold = (is.undefined(isFold) ? selfFold : isFold);

	console.log(useFold, selfFold)

	const {
		headlineCN,
		containerCN,
		innerCN,
		iconCN
	} = presetClassName(customProps, useFold, mode, fillet, !!readOnly);

	const panelRef = useRef(null);
	const autoHeightDivRef = useRef(null);
	const headlineRef = useRef(null);
	const innerRef = useRef(null);
	//
	const containerStyle = {
		...accordType(customProps.size, 'Object', {}),
		...customProps.style
	};


	useLayoutEffect(() => {
		const ref = panelRef.current as unknown as HTMLElement;
		const headline = headlineRef.current as unknown as HTMLElement;
		const inner = innerRef.current as unknown as HTMLElement;
		const nextEle = ref.nextSibling as HTMLElement;
		const preEle = ref.previousSibling as HTMLElement;
		/**=================================================================================================
		 *	 处理圆角	只相对于normal 模式下有效
		 *=================================================================================================*/
		const setLastPanelCN = function () {
			const lastPanelCN = classNames(ref.className, {
				[`${prefix}-last`]: true,
				[` ${prefix}-last-fillet`]: fillet
			});
			const lastHeadlineCN = classNames(headline.className, {
				[`${prefix}-headline-normal-fillet`]: fillet
			});

			const innerCN = classNames(inner.className, {
				[`${prefix}-inner-fillet`]: fillet
			});

			ref.setAttribute('class', lastPanelCN);
			headline.setAttribute('class', lastHeadlineCN);
			inner.setAttribute('class', innerCN);
		};

		const setFirstPanelCN = function () {
			const firstPanelCN = classNames(headline.className, {
				[` ${prefix}-first-fillet`]: true
			});
			headline.setAttribute('class', firstPanelCN);
		};

		if (!!fillet && mode === 'normal') {
			if (!!preEle) {
				const className = preEle.getAttribute('class');
				(className !== prefix) && setFirstPanelCN();
			} else if (preEle === null) {
				setFirstPanelCN();
			}
		}

		if (mode === 'normal') {
			if (!!nextEle) {
				const className = nextEle.getAttribute('class');
				(className !== prefix) && setLastPanelCN();
			} else if (nextEle === null) {
				setLastPanelCN();
			}
		}
		/**=================================================================================================
		 *	处理readOnly下的颜色
		 *=================================================================================================*/
		if (readOnly) {
			const bgColor = computedStyle(headline, 'background-color');
			headline.style.backgroundColor = makeColorDarker(bgColor!, 0.9);
		}

	}, [fillet, mode, readOnly]);

	return (
		<div
			ref={panelRef}
			{...nativeProps}
			className={containerCN}
			style={containerStyle}
		>
			<div
				className={headlineCN}
				style={headlineStyle}
				ref={headlineRef}
				onClick={(e) => {
					if (!readOnly) {
						e.stopPropagation();
						setSelfFold(!selfFold);
						is.function(onClick) && onClick(e);
					}
				}}
			>
				<span
					className={iconCN}
					style={{ margin: '0 0 0 10px' }}
				>
					{
						!!icon ?
							(
								is.string(icon) ?
									<Icon
										src={icon as string}
										size='small'
									/> :
									icon
							) :
							<Icon
								type='TinyArrowRight'
								size='small'
							/>
					}
				</span>
				<div
					className={`${prefix}-headline-content`}
				>{headline}</div>
				{
					!!onDelete ?
						<Icon /> :
						null
				}
			</div>
			<AutoHeight
				transitionDuration={duration as any}
				transitionFunc={timingFunction as any}
				height={useFold ? '0px' : 'auto'}
				ref={autoHeightDivRef}
			>
				<div
					className={innerCN}
					ref={innerRef}
					style={innerStyle}
				>
					{children}
				</div>
			</AutoHeight>
		</div >
	);
};

Panel.defaultProps = {
	mode: 'normal',
	fillet: false,
	duration: 400,
	readOnly: false,
	timingFunction: 'ease'
};

export default Panel;
