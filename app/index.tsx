import ReactDOM from 'react-dom';
import { ScrollBox } from '../lib';
import React from 'react';
import './index.scss';

function App() {
	return (
		<ScrollBox size={['100%', window.innerHeight]}>
			<div id="a" style={{ marginLeft: '50px' }}>
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
