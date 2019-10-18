import ReactDOM from 'react-dom';
import { Occupy } from '../lib';
import React from 'react';
import './index.scss';
const { News, Letter, Admin } = Occupy;

function App() {
	return (
		<div style={{ height: '100%' }}>
			<News fillet />
			<Letter fillet />
			<Admin fillet />
		</div>
	);
}

/*eslint-env browser*/
ReactDOM.render(<App />, document.getElementById('root'));
