/**=================================================================================================
 *			AUTHOR --- Han Wang
 *			LICENSE --- Apache-2.0
 *			LASTMODIFY --- 2019-09-13T14:32:46.915Z
 *			REPOSITORY --- https://github.com/sewerganger/silent-concept
 *=================================================================================================*/

import classNames from 'classnames';
import { HeightZeroToAuto } from 'height-zero2auto';
import React, {
	HTMLAttributes,
	FC,
	ReactNode,
	ReactElement,
	useContext,
	useRef,
	useLayoutEffect,
	CSSProperties,
	useState,
	useReducer
} from 'react';
import { SilentCommonAttr, ClassValue, SizeType } from '../../interfaces';
import { FoldContext, FoldProps } from './Fold';
import computedStyle from 'computed-style';
import {
	accordType,
	splitJsxProps,
	handleSize,
	is,
	makeColorDarker,
	makeColorLighter,
	completeStyle
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
	'onClick',
	'icon',
	'timingFunction',
	'duration',
	'headline',
	'headlineStyle',
	'innerStyle',
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
	icon?: ReactElement | string | 'unset';
	isFold?: boolean | string;
	onDelete?: () => boolean;
	readOnly?: boolean;
	headlineStyle?: CSSProperties;
	innerStyle?: CSSProperties;
}

export interface PanelProps extends PanelTempProps {
	className?: ClassValue;
}

const presetProps = function(props: PanelProps) {
	const sProps = splitJsxProps<PanelProps>(props, PanelAttrs);
	sProps.customProps.size = handleSize(sProps.customProps.size!);
	return sProps;
};

/**=================================================================================================
 *  预处理className
 *=================================================================================================*/
interface ClassNameEx {
	containerCN: string;
	headlineCN: string;
	innerCN: string;
	iconCN: string;
}
const presetClassName = function(
	cProps: PanelProps,
	useFold: any,
	mode: ModeType,
	fillet: boolean,
	readOnly: boolean
): ClassNameEx {
	const { className } = cProps;
	const isSimpleFillet = mode === 'simple' && fillet;

	return {
		containerCN: classNames(prefix, className),
		headlineCN: classNames({
			headline: true,
			[`headline-${mode}`]: true,
			'headline-simple-fillet': isSimpleFillet,
			'headline-readonly': readOnly
		}),
		innerCN: classNames({
			inner: true,
			[`inner-${mode}`]: true,
			[`inner-simple-fillet`]: isSimpleFillet
		}),
		iconCN: classNames({
			icon: true,
			[`icon-${useFold ? 'fold' : 'unFold'}`]: true
		})
	};
};

/**=================================================================================================
 *			LASTMODIFY --- 2019-09-21T14:12:30.132Z
 *			DESCRIPTION --- fold 折叠面板的container 可以设置全局 属性 传递到Panel
 *			DEFECT 连续点待优化
 *			PROPS
 *				--- size [SizeType]
 *				--- style [CSSProperties]  包裹整个Panel 的style 可用来调整位置等
 *				--- headlineStyle [CSSProperties]  Panel 的标题style 可用来调整 text 位置颜色， 添加背景图片等
 *				--- innerStyle [CSSProperties]  Panel 折叠内容的style
 *				--- isFold [boolean]  包裹整个Panel 的style 可用来调整位置
 *				--- onClick [MouseEvent]  包裹整个Panel 的style 可用来调整位置
 *				--- icon [ReactElement|string]  icon={require('./demo.png')} or icon={<Icon />}
 *				--- timingFunction [string]  设置panel的展开速率
 *				--- duration [number]  设置panel的展开时间
 *				--- readOnly [boolean]  只读
 *				--- onDelete [()=>boolean]  删除 并触发 删除事件
 *				--- fillet [boolean]  启用圆角 normal 和 simple 模式不相同
 *				--- mode ['normal'|'simple']  启用圆角
 *   =================================================================================================*/

const Panel: FC<PanelProps> = function(props) {
	const { nativeProps, customProps } = presetProps(props);
	const {
		headline,
		children,
		icon,
		onClick,
		onDelete,
		headlineStyle,
		innerStyle,
		timingFunction,
		readOnly
	} = customProps;

	const context: FoldProps = useContext(FoldContext);
	const mode = context.mode || (customProps.mode as ModeType);
	const fillet = context.fillet || (customProps.fillet as boolean);
	const duration = context.duration || customProps.duration;
	const iconEle = React.isValidElement(icon) && React.cloneElement(icon, { size: 'small' });

	const isFold = is.undefined(context.isFold)
		? is.undefined(customProps.isFold)
			? undefined
			: customProps.isFold
		: context.isFold;

	const [selfFold, setSelfFold] = useState(!!!isFold);

	/**=================================================================================================
	 *		如果panel 有isFold就用  isFold  否则就使用 panel 内置的
	 *=================================================================================================*/
	const useFold = is.undefined(isFold) ? selfFold : isFold;

	const { headlineCN, containerCN, innerCN, iconCN } = presetClassName(customProps, useFold, mode, fillet, !!readOnly);

	const panelRef = useRef(null);
	const headlineRef = useRef(null);
	const innerRef = useRef(null);
	const cancelRef = useRef(null);
	const containerStyle = {
		...accordType(customProps.size, 'Object', {}),
		...customProps.style
	};

	useLayoutEffect(() => {
		const ref = (panelRef.current as unknown) as HTMLElement;
		const headline = (headlineRef.current as unknown) as HTMLElement;
		const inner = (innerRef.current as unknown) as HTMLElement;
		const cancel = (cancelRef.current as unknown) as HTMLElement;
		const nextEle = ref.nextSibling as HTMLElement;
		const preEle = ref.previousSibling as HTMLElement;
		// console.log(useless)
		/**=================================================================================================
		 *	 处理圆角	只相对于normal 模式下有效
		 *=================================================================================================*/
		const setLastPanelCN = function() {
			const lastPanelCN = classNames(ref.className, {
				[`${prefix}-last`]: true,
				[`${prefix}-last-fillet`]: fillet
			});
			const lastHeadlineCN = classNames(headline.className, {
				'headline-normal-fillet': fillet
			});

			const innerCN = classNames(inner.className, {
				'inner-fillet': fillet
			});

			ref.setAttribute('class', lastPanelCN);
			headline.setAttribute('class', lastHeadlineCN);
			inner.setAttribute('class', innerCN);
		};

		const setFirstPanelCN = function() {
			const firstPanelCN = classNames(headline.className, {
				'first-fillet': true
			});
			headline.setAttribute('class', firstPanelCN);
		};

		if (!!fillet && mode === 'normal') {
			if (!!preEle) {
				const className = preEle.getAttribute('class');
				className !== prefix && setFirstPanelCN();
			} else if (preEle === null) {
				setFirstPanelCN();
			}
		}

		if (mode === 'normal') nextEle === null && setLastPanelCN();
		/**=================================================================================================
		 *	处理readOnly下的颜色
		 *=================================================================================================*/
		const bgColor = computedStyle(headline, 'background-color');
		if (readOnly) {
			headline.style.backgroundColor = makeColorDarker(bgColor!, 0.95);
		}
		// return () => {
		// 	cancel.removeEventListener('click', () => { });
		// };
	}, [fillet, mode, readOnly]);

	return (
		<div ref={panelRef} {...nativeProps} className={containerCN} style={containerStyle}>
			<div
				className={headlineCN}
				style={headlineStyle}
				ref={headlineRef}
				onClick={e => {
					if (!readOnly) {
						e.stopPropagation();
						!is.function(onClick) && setSelfFold(!selfFold);
						is.function(onClick) && onClick(e);
					}
				}}
			>
				{icon === 'unset' ? null : (
					<div className={iconCN}>
						{!!icon ? (
							is.string(icon) ? (
								<Icon src={icon as string} size="small" />
							) : (
								iconEle
							)
						) : (
							<Icon type="TinyArrowRight" size="small" />
						)}
					</div>
				)}
				<div className="headline-content">{headline}</div>
				{is.function(onDelete) ? (
					<div className="cancel">
						<Icon
							type="Cross"
							size={[12, 12]}
							onClick={e => {
								e.stopPropagation();
								if (onDelete()) {
									const panelEle = (panelRef.current as unknown) as HTMLDivElement;
									const parentNode = panelEle.parentNode as HTMLElement;
									parentNode.removeChild(panelEle);
								}
							}}
						/>
					</div>
				) : null}
			</div>
			<HeightZeroToAuto
				transitionDuration={duration as any}
				transitionFunc={timingFunction as any}
				height={useFold ? '0px' : 'auto'}
			>
				<div className={innerCN} ref={innerRef} style={innerStyle}>
					{children}
				</div>
			</HeightZeroToAuto>
		</div>
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
