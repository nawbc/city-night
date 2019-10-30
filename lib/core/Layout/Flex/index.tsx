import * as React from 'react';

import { HTMLAttributes } from 'react';
import Average, { AverageProps } from './Average';
import { handleSize, splitJsxProps, accordType } from '.././../../helper/index';
import { ClassValue, SilentCommonAttr } from '../../../interfaces';
import classNames from 'classnames';
import Vertical from './Vertical';
import './style/index.scss';

const prefix = 's-flex';

interface FlexTempProps extends SilentCommonAttr, HTMLAttributes<any> {
	className?: any;
	inline?: boolean;
}

interface FlexProps extends FlexTempProps {
	className?: ClassValue;
}

/**=================================================================================================
 *			LASTMODIFY --- 2019-08-28T02:50:09.450Z
 *			DESCRIPTION --- flex 布局
 *			PROPS
 * 					--- Average [function] 元素均匀分布
 *    =================================================================================================*/

export default class Flex extends React.Component<AverageProps, any> {
	static Average: typeof Average = Average;
	static Vertical: typeof Vertical = Vertical;

	static defaultProps = {
		inline: true
	};

	presetProps = (props: FlexProps) => {
		const sProps = splitJsxProps<FlexProps>(props, [
			'size',
			'style',
			'children',
			'className',
			'inline'
		]);
		sProps.customProps.size = handleSize(sProps.customProps.size!);
		return sProps;
	};

	public render() {
		const { nativeProps, customProps } = this.presetProps(this.props);
		const { className, style, size, inline } = customProps;
		const containerStyle = {
			...accordType(size, 'Object', {}),
			...style
		};
		return (
			<div
				className={classNames(prefix, className, {
					[`${prefix}-inline`]: inline
				})}
				{...nativeProps}
				style={containerStyle}
			>
				{this.props.children}
			</div>
		);
	}
}
