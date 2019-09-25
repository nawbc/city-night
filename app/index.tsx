import ReactDOM from 'react-dom';
import { Loading, Silent, Picture, Icon, Button, EffectMask, Fold, Panel } from '../lib/index';
import React, { useState, useEffect, useContext, useMemo, useCallback, useRef, forwardRef, useImperativeHandle, useLayoutEffect, Component, PureComponent, HTMLAttributes } from 'react';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import { AutoHeight } from 'height-zero2auto';
// import './index.scss';

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



function App() {

	const data: Record<string, string> = {
		'fuck': 'fuck me',
		'fuck you': 'ok come on',
		'fuck he': 'ok come fuck'
	}

	return (
		<>
			<Button>汪涵</Button>
			<div
				style={{
					width: '500px',
					height: '600px'
				}}
			>
				<Fold
					fillet
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
					>
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
						>fuck</Panel>
					</Panel>
				</Fold>
			</div>
		</>
	);
}
/*eslint-env browser*/
ReactDOM.render(<App />, document.getElementById('root'));


