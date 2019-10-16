import ReactDOM from 'react-dom';
import { ArticleOccupy, Panel } from '../lib';
import React from 'react';
import './index.scss';

function App() {
	const { Sliver, Circle, Rectangle, Square } = ArticleOccupy;

	return (
		<div>
			<Panel headline="hange">Fuck</Panel>
			<Panel headline="hange">Fuck</Panel>
			<Panel headline="hange">Fuck</Panel>
			<Panel headline="hange">Fuck</Panel>
			<Panel headline="hange">Fuck</Panel>
			<Sliver fillet />
			<Circle effect />
			<Rectangle fillet />
			<Square />
		</div>
	);
}
/*eslint-env browser*/
ReactDOM.render(<App />, document.getElementById('root'));
