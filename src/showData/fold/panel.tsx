import React from 'react';
import classNames from 'classnames';
import Icon from '../../tools/icon/icon';
import { polyfill } from 'react-lifecycles-compat';
import { typeReplace } from '../../utils/muguetDash';
import { FoldContext, ModeType } from './fold';
import { SizeType } from '../../interfaces/customTypes';
import { handleSize, JSXProps } from '../../utils/handleJSXProps';
import MuguetAutoHeight from '../../shared/muguet-auto-height';
import { FoldProps } from './fold';
import { CommonInterface, JSXPropsInterface } from '../../interfaces/common.interface';
import './style/panel.css';

type PanelIconType = string | React.ReactElement;

const prefix = 'm-panel';
// const CUSTOM_

const customFoldPanelProps = [
	'size',
	'last',
	'children',
	'fold', // custom state 打开折叠
	'headline',
	'icon',
	'foldDuration',
	'className',
	'mode',
	'style',
	'onClick',
	'fillet',
];

export interface FoldPanelProps extends CommonInterface, FoldProps {
	icon?: PanelIconType;
	headline?: string | React.ReactElement;
	iconPlace?: 'start' | 'end';
	onClick?: React.EventHandler<any>;
	mode?: ModeType;
	last?: boolean;
	fold?: any;
}

/**
 * panel  content和headline贡献 style 设置style同时设置content和 headline
 *
 *mode inherit from  fold
 *
 *@module Panel
 * @example
 * <Panel
 *	foldDuration={10000}
 *	icon={require('../../assets/icons/local/logo.jpg')}
 * 	iconPlace='end'
 * 	mode='simple'
 * 	last // add last one
 * ></Panel>
 * <Panel
 *	foldDuration={10000}
 *	icon={<React.Fragment><Icon src={require('./') } /><Icon /></React.Fragment>}
 * 	mode='custom'
 * ></Panel>
 */

class FoldPanel extends React.Component<FoldPanelProps, any> {
	state = {
		isFold: true,
	};

	EmbedDefaultIcon = props => {
		return React.isValidElement(props.icon) ? (
			props.icon
		) : (
			<Icon
				size="tiny"
				style={{ marginRight: '6px' }}
				className={classNames({
					[`${prefix}-arrow-default`]: true,
					[`${prefix}-arrow-${this.state.isFold ? 'right' : 'down'}`]: !props.icon,
				})}
				src={props.icon ? props.icon : require('../../assets/icons/local/arrow-right.svg')}
			/>
		);
	};

	handleExtraProps = (): JSXPropsInterface<FoldPanelProps> => {
		const foldPanelProps = JSXProps<FoldPanelProps>(this.props, customFoldPanelProps);
		const { customProps } = foldPanelProps;
		customProps.size = handleSize(customProps.size as SizeType);
		return foldPanelProps;
	};

	handleClassName = classProps => {
		const { last, size, fillet, className, mode } = classProps;

		return {
			containerName: classNames({
				[`${prefix}-default`]: true,
				[`${className}`]: className,
			}),
			headlineName: classNames({
				[`${prefix}-headline`]: true,
				[`${prefix}-size-cover`]: !size,
				[`${prefix}-${mode}`]: mode,
				[`${prefix}-last`]: last,
				[`${prefix}-fillet`]: fillet,
			}),
			contentName: classNames({
				[`${prefix}-content`]: true,
				[`${prefix}-${mode}`]: mode,
				[`${prefix}-content-last`]: last,
				[`${prefix}-fillet`]: fillet,
			}),
		};
	};

	handleCustomClick = (e, customProps) => {
		if (customProps.onClick) {
			customProps.onClick(e);
		}

		// if ('custom' !== customProps.mode)
		this.setState({ isFold: !this.state.isFold });
	};

	render() {
		const { nativeProps, customProps } = this.handleExtraProps();
		const mergeStyle = {
			...typeReplace(customProps.size as Object, 'Object', {}),
			...typeReplace(customProps.style as Object, 'Object', {}),
		};
		const { children, headline } = customProps;

		return (
			<FoldContext.Consumer>
				{(value: FoldPanelProps) => {
					if (customProps.mode) value.mode = customProps.mode;
					if (!customProps.foldDuration) customProps.foldDuration = value.foldDuration;
					const className = this.handleClassName({ ...customProps, ...value });
					const { containerName, headlineName, contentName } = className;
					return (
						<div {...nativeProps} className={containerName}>
							<div
								className={headlineName}
								style={mergeStyle}
								onClick={e => {
									this.handleCustomClick(e, customProps);
								}}
							>
								{'custom' === customProps.mode ? null : this.EmbedDefaultIcon(customProps)}
								<div className={`${prefix}-headline-block`}>{headline}</div>
							</div>
							<MuguetAutoHeight
								transitionDuration={customProps.foldDuration}
								transitionFunc={'ease'}
								height={
									'custom' === customProps.mode ? customProps.fold : this.state.isFold ? 0 : 'auto'
								}
							>
								<div className={contentName} style={mergeStyle}>
									{children}
								</div>
							</MuguetAutoHeight>
						</div>
					);
				}}
			</FoldContext.Consumer>
		);
	}
}

polyfill(FoldPanel);
export default FoldPanel;
