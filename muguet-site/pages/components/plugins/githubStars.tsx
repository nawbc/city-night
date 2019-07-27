import React, { Component, useState } from 'react';
import { Button, Bubble } from '../../../../src/exports';
import axios from 'axios';

export default class GitHubStars extends Component<any>{

	state = {
		github_stars: 0
	}

	requestGitHub() {
		axios.
			get('https://api.github.com/repos/sewerganger/Muguet-ui').
			then((response) => {
				this.setState({ github_stars: response.data.stargazers_count })
			})
	}

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.requestGitHub();
	}

	render() {
		return (
			<>
				<Bubble
					duration={10000 * 100000}
					content={this.state.github_stars}
					display={true}
				>
					<Button
						href="https://github.com/sewerganger/Muguet-ui"
						gradients="DeepBlue"
						icon={require('../../../assets/github.svg')}
					>github</Button>
				</Bubble>
			</>
		)
	}
}
