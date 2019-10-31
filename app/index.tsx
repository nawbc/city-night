import ReactDOM from 'react-dom';
import { ScrollBox } from '../lib';
import React from 'react';
import './index.scss';

function App() {
	return (
		<ScrollBox size={['50%', 500]}>
			<div id="a" style={{ marginLeft: '0' }}>
				{Array(100)
					.fill('')
					.map(
						() =>
							'dsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasdadsadasda'
					)}
			</div>
		</ScrollBox>
	);
}

/*eslint-env browser*/
ReactDOM.render(<App />, document.getElementById('root'));
