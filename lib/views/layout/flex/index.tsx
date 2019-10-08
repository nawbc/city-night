import * as React from 'react';

import Average, { AverageProps } from './average';
import Vertical from './vertical';

/**=================================================================================================
 *			LASTMODIFY --- 2019-08-28T02:50:09.450Z
 *			DESCRIPTION --- flex 布局
 *				PROPS
 * 					--- Average [function] 元素均匀分布
 *    =================================================================================================*/

export default class Flex extends React.Component<AverageProps, any>{
	static Average: typeof Average = Average;
	static Vertical: typeof Vertical = Vertical;
	// static Font: typeof Font = Font;

	public render() {
		return (
			<Average {...this.props}>
				{this.props.children}
			</Average>
		);
	}
}
