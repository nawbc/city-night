import React,{ Component } from 'react';



export default class BubblePage extends Component<any>{
	state = {
		a: false
	}
	render(){
		let a;
		setTimeout(() => {
			this.setState({
				a : <div>dadadaaddasdas</div>
			})
		}, 1000);
		return (
			<div>{this.state.a}</div>
		);
	}
}
