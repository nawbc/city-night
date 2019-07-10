import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import routerList from './pages/routes/index';

class App extends React.Component<any> {

	state = {
		language: false,
	}

	render() {
		return (
			<React.Fragment>
				{/* <input
					id='copy-input'
					type="text"
					style={{
						position: 'fixed',
						top: '-1000px',
						opacity: 0,
					}}
				/> */}
				<BrowserRouter
					basename='/'
				>
					{routerList.map((ele, index) => {
						return (
							<Route
								key={index}
								{...ele}
							/>
						)
					})}
				</BrowserRouter>
			</React.Fragment>
		)
	}
}

export default App;
