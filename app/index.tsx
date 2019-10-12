import ReactDOM from 'react-dom';

import React from 'react';
import './index.scss';
import { Panel } from '../lib';

function App() {
	// const { Letter } = ArticleOccupy;
	return (
		<div>
			{Array(10)
				.fill('')
				.map((ele, index) => (
					<Panel key={index} headline="fuck">
						fuck
					</Panel>
				))}
		</div>
	);
}
/*eslint-env browser*/
ReactDOM.render(<App />, document.getElementById('root'));
