import React from 'react';
import flexible from '../utils/flexible';
import { polyfill } from 'react-lifecycles-compat';
import Internation from '../others/internation/internation';
import { SupportedLangs } from './langType';
import alertSupportive from '../utils/alertSupportive';
import {
	CommonInterface,
} from '../interfaces/common.interface';

import './style/muguet.css';


interface MuguetProps extends CommonInterface {
	default?: boolean;
	langs?: Array<string>;
	i18n?: {};
	locale?: SupportedLangs;
}

/**
 * @example
 * <Muguet
 *  	langs={['en', 'zh']}
 * 		locale='zh'  format type see langType.tsx
 * 		i18n={ZH_CN} {"name": "下水道的包工头"}
 * 		default={true} \\ add default margin padding
 * ></Muguet>
 */

let cancelDefaultMargin = function (def: boolean): void {
	if (!def) {
		document.body.style.margin = "0px";
		document.body.style.padding = "0px";
	}
}

class Muguet extends React.Component<MuguetProps>{
	private static readonly defaultProps = {
		default: false
	}

	constructor(props) {
		super(props);
		// alert supportive
		alertSupportive();
		//flex mobile
		flexible();
		//default margin
		cancelDefaultMargin(props.default);
	}

	render() {
		return (
			<Internation
				langs={this.props.langs}
				locale={this.props.locale}
				messages={this.props.i18n}
			>
				<div
					className='m-root'
					{...this.props}
				>
					{this.props.children}
				</div>
			</Internation>
		);
	}
}
polyfill(Muguet);
export default Muguet;
