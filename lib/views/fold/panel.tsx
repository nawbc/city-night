/**=================================================================================================
 *			AUTHOR --- Han Wang
 *			LICENSE --- Apache-2.0
 *			LASTMODIFY --- 2019-09-13T14:32:46.915Z
 *			REPOSITORY --- https://github.com/sewerganger/silent-concept
 *=================================================================================================*/

import classNames from 'classnames';
import { AutoHeight } from 'height-zero2auto';
import React, { HTMLAttributes, FC, ReactNode, ReactElement, useState, useContext, useEffect, useRef, useMemo } from 'react';
import { SilentCommonAttr, ClassValue, SizeType } from '../../interfaces';
import { FoldTempProps, FoldContext, FoldProps } from './fold';
import {
	accordType,
	splitJsxProps,
	handleSize,
	is
} from '../../helper';
import './style/panel.scss';
import Icon from '../icon';

export type modeType = 'simple' | 'normal';

const prefix = 's-panel';

const PanelAttrs = [
	'size',
	'style',
	'pigment',
	'className',
	'mode',
	'duration',
	'fillet',
	'children',
	'foldState',
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
	pigment?: string;
	duration?: string;
	className?: any;
	size?: SizeType;
	mode?: modeType;
	fillet?: boolean;
	timingFunction?: boolean;
	headline?: ReactNode;
	icon?: ReactElement | string;
	foldState?: boolean | string;
	onDelete?: () => boolean;
	readOnly?: boolean;
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
const presetClassName = function (cProps: PanelProps, fold): ClassNameEx {
	const { mode, fillet, className } = cProps;

	return {
		containerCN: classNames(prefix, className, {

		}),
		headlineCN: classNames({
			[`${prefix}-headline`]: true,
		}),
		innerCN: classNames({
			[`${prefix}-inner`]: true,
		}),
		iconCN: classNames({
			[`${prefix}-icon`]: true,
			[`${prefix}-icon-${fold === '0px' ? 'fold' : 'unFold'}`]: true
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
let foldTimer;

const Panel: FC<PanelProps> = function (props) {
	const { nativeProps, customProps } = presetProps(props);
	const { headline, children, icon, foldState, onClick, onDelete } = customProps;
	const [fold, setFold] = useState(foldState ? '0px' : 'mutation');
	const [isFold, setIsFold] = useState(foldState);

	const context: FoldProps = useContext(FoldContext);
	const mode = context.mode || customProps.mode;
	const fillet = context.fillet || customProps.fillet;
	const duration = context.duration || customProps.duration as string;
	const { headlineCN, containerCN, innerCN, iconCN } = presetClassName(customProps, fold);

	const panelRef = useRef(null);
	const autoHeightDivRef = useRef(null);
	const headlineRef = useRef(null);
	const innerRef = useRef(null);

	const containerStyle = {
		...accordType(customProps.size, 'Object', {}),
		...customProps.style
	};

	useEffect(() => {
		const ref = panelRef.current as unknown as HTMLElement;
		const headline = headlineRef.current as unknown as HTMLElement;
		const inner = innerRef.current as unknown as HTMLElement;
		const nextEle = ref.nextSibling as HTMLElement;
		const preEle = ref.previousSibling as HTMLElement;
		const setLastPanelCN = function () {
			const lastPanelCN = classNames(ref.className, {
				[`${prefix}-last`]: true,
				[` ${prefix}-last-fillet`]: fillet
			});
			const lastHeadlineCN = classNames(headline.className, {
				[`${prefix}-headline-fillet`]: fillet
			});

			const innerCN = classNames(inner.className, {
				[`${prefix}-inner-fillet`]: fillet
			});

			ref.setAttribute('class', lastPanelCN);
			headline.setAttribute('class', lastHeadlineCN);
			inner.setAttribute('class', innerCN);
		};

		const setFirstPanelCN = function () {
			const firstPanelCN = classNames({

			});
		}

		// (nextEle === null) && setLastPanelCN();
		// (preEle === null )


		if (!!nextEle) {
			const className = nextEle.getAttribute('class');
			(className !== prefix) && setLastPanelCN();
		};
	}, [fillet]);

	return (
		<div
			ref={panelRef}
			{...nativeProps}
			style={containerStyle}
			className={containerCN}
		>
			<div
				className={headlineCN}
				ref={headlineRef}
				onClick={(e) => {
					e.stopPropagation();
					clearTimeout(foldTimer);

					if (isFold) {
						setFold('mutation');
						foldTimer = setTimeout(() => { setFold('auto'); }, parseInt(duration));
					} else {
						if (fold === 'auto') {
							setFold('mutation');
							foldTimer = setTimeout(() => { setFold('0px'); }, 16.7);
						}
					}

					setIsFold(!isFold);
					is.function(onClick) && onClick(e);
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
			</div>
			<AutoHeight
				transitionDuration={duration as any}
				transitionFunc={'ease'}
				height={fold}
				ref={autoHeightDivRef}
			>
				<div
					className={innerCN}
					ref={innerRef}
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
	duration: '400ms',
	foldState: true,
	readOnly: false
};

export default Panel;
