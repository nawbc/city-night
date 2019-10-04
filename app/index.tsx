import ReactDOM from 'react-dom';
import { Loading, Silent, Picture, Icon, Button, EffectMask, Fold, Panel } from '../lib/index';
import React, { useState, useEffect, useContext, useMemo, useCallback, useRef, forwardRef, useImperativeHandle, useLayoutEffect, Component, PureComponent, HTMLAttributes, useReducer } from 'react';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import Parallax from '../plugins/parallax';

import './index.scss';
import { HeightZeroToAuto } from 'height-zero2auto';

function TestIcon() {
	return (
		<div
			style={{
				display: 'inline-block',
				width: '15px',
				height: '15px',
				background: `url(${require('./assets/svg/people.svg')})`,
				backgroundSize: 'cover',
				marginRight: '2px'
			}}
		/>
	);
}

class C extends PureComponent<any>{
	render() {
		return (
			<div>
				{this.props.font}
				{this.props.children}
			</div>
		)
	}
}

class B extends PureComponent<any>{
	// componentWillReceiveProps(nextProps, preState) {
	// 	console.log(nextProps);
	// }

	render() {
		return (
			<div>
				{this.props.font}
				{this.props.children}
			</div>
		)
	}
}

class A extends Component<any>{
	state = {
		font: 'arial'
	}

	render() {
		return (
			<div>
				<button
					onClick={() => {
						this.setState({
							font: this.state.font + 1
						})
					}}
				>
					<B font={this.state.font} />
				</button>
			</div>
		);
	}
}


function reducer(state, action) {
	switch (action.type) {
		case 'increment':
			return { count: state.count + 1 };
		case 'decrement':
			return { count: state.count - 1 };
		default:
			throw new Error();
	}
}
const initialState = { count: 0 };


function PicTemplate({ lazy }) {
	return (
		<>
			<Picture
				src={require('../temp/demo.jpg')}
				size={[200, 113]}
				style={{
					width: '200px',
					height: '113px',
					marginBottom: '20px'
				}}
				lazy={lazy}
			/>
		</>
	);
}

function App() {

	// const [state, setState] = useState(true);
	const [tmp, setTmp] = useState(false);
	const [state, dispatch] = useReducer(reducer, initialState as never);

	let s = state as typeof initialState;
	const [isFold, setIsFold] = useState(true);
	const [pos, setPos] = useState({ y: window.scrollY, x: window.screenX });
	// useMemo(() => window.innerHeight)

	useLayoutEffect(() => {
		window.onscroll = function () {
			const { y } = pos;
			setPos({ y: window.scrollY, x: window.screenX });
		}
	}, [pos]);

	return (
		<>

		</>
	);
}
/*eslint-env browser*/
ReactDOM.render(<App />, document.getElementById('root'));


