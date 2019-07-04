import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import { IntlProvider, FormattedMessage, addLocaleData } from 'react-intl';

interface InternationProps {
	langs?: Array<string>
	children?: React.ReactNode;
	messages?: ReactIntl.Messages;
	locale?: string;
}

function loadingLang(langs) {
	let arr = [];
	langs.forEach((ele) => arr = arr.concat([...require(`react-intl/locale-data/${ele}`)] as any));
	return arr;
}

/**
 * Simple package react-intl, and it can be used in <Muguet> more
 * convenient
 *
 * @see react-intl  {@link https://github.com/yahoo/react-intl}
 * @example
 * <Internation
 *		langs={['zh', 'en']}
 *	  messages={ZH_CN}
 *	  locale='zh'
 * ></Internation>
 */
class Internation extends React.Component<InternationProps>{

	private static readonly defaultProps = {
		locale: 'en',
		langs: ['zh', 'en']
	}

	constructor(props) {
		super(props);
		//load language
		addLocaleData(loadingLang(props.langs));
	}
	render() {
		return (
			<IntlProvider locale={this.props.locale} messages={this.props.messages}>
				{this.props.children}
			</IntlProvider>
		);
	}
}
polyfill(Internation);
export default Internation;

/**
 * @example
 * <Translate
 *		id='demo.name'
 *		values={{name: <span>哈哈哈</span>}}	string | object
 *		defaultMessage='this is default message'
 * 	></Translate>
 */
const Messages = FormattedMessage;

export { Messages as Translate }

