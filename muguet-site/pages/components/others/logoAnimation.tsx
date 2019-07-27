import React, { Component, useState } from 'react';
import { Button, Bubble, Icon } from '../../../../src/exports';
import axios from 'axios';
import '../../style/logoAnimation.scss';

export default class LogoAnimation extends Component<any>{

	state = {
		github_stars: 0,
	}

	requestGitHub() {
		axios.
			get('https://api.github.com/repos/sewerganger/Muguet-ui').
			then((response) => {
				this.setState({ github_stars: response.data.stargazers_count })
			})
	}

	componentDidMount() {
		this.requestGitHub();
	}

	render() {
		return (
			<div
				className='animationWrapper'
			>
				<Icon
					size={[170, 400]}
					src={require('../../../assets/left-leaf.svg')}
				/>
				<Icon
					className='muguet-right-leaf'
					size={[80, 195]}
					src={require('../../../assets/right-leaf.svg')}
				/>
				<Icon
					size={[400, 255]}
					className='muguet-branch-leaf'
					src={require('../../../assets/branch.svg')}
				/>
			</div>
		)
	}
}
