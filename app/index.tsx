import ReactDOM from 'react-dom';
import { Loading, Silent, Picture, Icon, Button, EffectMask, Fold, Panel } from '../lib/index';
import React, { useState, useEffect, useContext, useMemo, useCallback, useRef, forwardRef, useImperativeHandle, useLayoutEffect, Component, PureComponent, HTMLAttributes, useReducer } from 'react';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import Parallax from '../plugins/parallax';

import './index.scss';

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

function App() {

	// const [state, setState] = useState(true);
	const [tmp, setTmp] = useState(false);
	const [state, dispatch] = useReducer(reducer, initialState as never);

	let s = state as typeof initialState;

	return (
		<>
			<div
				style={{
					width: '500px',
					height: '600px'
				}}
			>
				<button
					onClick={() => {
						setTmp(!tmp);
					}}
				>Click</button>
				<Fold>
					<Panel
						headline={
							<>
								<span>fuck</span>
								<Icon type='Cross' />
							</>
						}
						onDelete={() => {
							return true;
						}}
					>han</Panel>
					<Panel
						headline='fuck'
						readOnly={tmp}
						onDelete={() => {
							return true;
						}}
					>
						<Panel
							headline='fuck'
							onDelete={() => {
								return true;
							}}
						>aaaa</Panel>
						<Panel
							headline='fuck'
							onDelete={() => {
								return true;
							}}
						>aaa</Panel>
						<Panel
							headline='fuck'
							onDelete={() => {
								return true;
							}}
						>aaa</Panel>
						<Panel
							headline='fuck'
						>aaaa</Panel>
						<Panel
							headline='fuck'
						>aaa</Panel>
						<Panel
							headline='fuck'
						>aaa</Panel>
						<Panel
							headline='fuck'
						>aaaa</Panel>
						<Panel
							headline='fuck'
						>aaa</Panel>
						<Panel
							headline='fuck'
						>aaa</Panel>
						<Panel
							headline='fuck'
						>aaaa</Panel>
						<Panel
							headline='fuck'
						>aaa</Panel>
						<Panel
							headline='fuck'
						>aaa</Panel>
					</Panel>
					<Panel
						onDelete={() => {
							return true;
						}}
						headline='fuck'
					>
						<Button>Fuck </Button>
					</Panel>
				</Fold>
				<br />
				<Panel
					headline='dadsad'
				>aaa</Panel>

				{/* <Fold
				>
					{Object.keys(data).map((ele, index) => {
						return <Panel headline={ele} key={index}>{data[ele]}</Panel>;
					})}
					<br />
					{Object.keys(data).map((ele, index) => {
						return <Panel headline={ele} key={index}>{data[ele]}</Panel>;
					})}
					<Panel
						headline='fuck'
						onDelete={() => {
							return true;
						}}
					>
						<Panel
							headline='fuck'
							onFold={tmp}
						>fuck</Panel>
						<Panel
							headline='fuck'
						>fuck</Panel>
						<Panel
							headline='fuck'
						>fuck</Panel>
						<Panel
							headline='fuck'
						>fuck</Panel>
					</Panel>
				</Fold>
				<br />
				<Panel
					headline='fuck'
				>fuck</Panel>
				<Panel
					headline='fuck'
				>fuck</Panel>
				<Panel
					headline='fuck'
				>fuck</Panel>
				<Panel
					headline='fuck'
					>fuck</Panel> */}
			</div>
		</>
	);
}
/*eslint-env browser*/
ReactDOM.render(<App />, document.getElementById('root'));


