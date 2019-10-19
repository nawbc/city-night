import ReactDOM from 'react-dom';
import { Occupy } from '../lib';
import React from 'react';
import './index.scss';
const { News, Letter, Admin, Card } = Occupy;

function App() {
	return (
		<div style={{ height: '100%' }}>
			<News capital={<div>AA</div>} />
			<Letter />
			<Admin />
			<Card capital={<div>AA</div>} />
		</div>
	);
}

/*eslint-env browser*/
ReactDOM.render(<App />, document.getElementById('root'));
