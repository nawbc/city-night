import ReactDOM from 'react-dom';
import { Occupy, Panel, Picture, Icon, Loading, ScrollBox, ScrollSlider } from '../lib';
import React, { useState, useCallback, useRef, useEffect } from 'react';
// import { HeightZeroToAuto } from '../plugins/react-mini-plugins/useAutoHeight';
import { useSpring } from 'react-spring';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import './index.scss';
import MutationObserver from 'resize-observer-polyfill';
const { News, Letter, Admin, Card } = Occupy;

function App() {
	console.log(ScrollSlider);
	return (
		<ScrollBox size={['100%', window.innerHeight]}>
			<div id="a" style={{ marginLeft: '50px' }}>
				{Array(100)
					.fill('')
					.map(
						(_, $) =>
							'dsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasda'
					)}
			</div>
		</ScrollBox>
	);
}

/*eslint-env browser*/
ReactDOM.render(<App />, document.getElementById('root'));
