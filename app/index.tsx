import ReactDOM from 'react-dom';
import { ArticleOccupy, Panel } from '../lib';
import React from 'react';
import './index.scss';

function App() {
	const { Sliver, Circle } = ArticleOccupy;

	return (
		<div>
			<Panel headline="hange">Fuck</Panel>
			<Panel headline="hange">Fuck</Panel>
			<Panel headline="hange">Fuck</Panel>
			<Panel headline="hange">Fuck</Panel>
			<Panel headline="hange">Fuck</Panel>
			<Sliver />
			<Circle effect />
		</div>
	);
}
/*eslint-env browser*/
ReactDOM.render(<App />, document.getElementById('root'));
