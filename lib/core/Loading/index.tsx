import * as React from 'react';

import Hoop, { LoadingHoopProps } from './Hoop';
import Breath from './Breath';
import Font from './Font';

/**=================================================================================================
 *			LASTMODIFY --- 2019-08-28T02:50:09.450Z
 *			DESCRIPTION --- 加载效果
 *				PROPS
 * 					--- Hoop [static]  环形加载效果
 * 					--- Font [static]  文字加载效果
 * 					--- Breath [static]  呼吸式加载效果
 * =================================================================================================*/

export default class Loading extends React.Component<LoadingHoopProps, any> {
	static Hoop: typeof Hoop = Hoop;
	static Breath: typeof Breath = Breath;
	static Font: typeof Font = Font;

	public render() {
		return <Hoop {...this.props} />;
	}
}
