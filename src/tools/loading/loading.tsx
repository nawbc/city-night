import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import Ellipsis from './ellipsis';
import Hoop from './hoop';
import './style/loading.css';


class Loading extends React.Component<any, any>{
	static Ellipsis: typeof Ellipsis = Ellipsis;
	static Hoop: typeof Hoop = Hoop;

	protected type = 'default';

	constructor(props) {
		super(props);
	}

	render() {
		return this.props.children;
	}
}

polyfill(Loading)
export default Loading;


