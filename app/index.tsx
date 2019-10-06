import ReactDOM from 'react-dom';
import { Loading, Silent, Picture, Icon, Button, EffectMask, Fold, Panel } from '../lib/index';
import React, { useState, useEffect, useContext, useMemo, useCallback, useRef, forwardRef, useImperativeHandle, useLayoutEffect, PureComponent, HTMLAttributes, useReducer } from 'react';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import Parallax from '../plugins/parallax';
import './index.scss';
import { is } from '../lib/helper';
function PicTemplate({ lazy }) {
	return (
		<>
			<Component
				componentStyle={{
					'.component': {
						border1: '100px',
						color: 'red',
						'.a': {
							border2: '100px solid #000',
							'.aa': {
								border3: '10000px solid'
							}
						},
						'user-select': 'none',
						'.b': {
							border2: '100px solid #fff'
						},
						'.c': {}
					}
				}}
			/>
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

const componentStyleRules = function (styleObject) {
	let count = 0;
	let nameStack = [];

	const recursion = function (styles) {
		count++;
		let content = '';
		let objStack = [];
		console.log(nameStack, count);
		for (let selector in styles) {
			const propVal = styles[selector] as never;
			const currentProp = selector.trim() as never;
			if (is.object(propVal)) {
				objStack.push(propVal);
				nameStack.push(currentProp);
				recursion(propVal);
			} else {
				content += currentProp + ':' + propVal + ';';
			}
		}
		console.log(nameStack, content);
	};
	recursion(styleObject);
}

const addStyle = function (styles) {
	const style = document.createElement('style');
	document.getElementsByTagName('head')[0].appendChild(style);
	style.appendChild(document.createTextNode(''));
	var s = document.styleSheets[document.styleSheets.length - 1] as CSSStyleSheet;

	for (const prop in styles) {
		let content = '';
		const propVal = styles[prop];
		const currentProp = prop.trim();
		for (const key in propVal) {
			content += key + ':' + propVal[key] + ';';
		}
		const insertValue = '.component' + ' ' + currentProp + '{' + content + '}';
		s.insertRule(insertValue)
	}
};

function Component(props) {
	addStyle(props.componentStyle);

	return (
		<>
			<div className='component'>
				<div
					className='b'
				>
					<div className='c'>sa</div>
					<div className='d'>dada</div>
				</div>
			</div>
		</>
	);
}

function App() {
	return (
		<>
		
		</>
	);
}
/*eslint-env browser*/
ReactDOM.render(<App />, document.getElementById('root'));

