import React, { Component, useState, useEffect } from 'react';
import { ScrollBox, Button, message, Translate, Input, Icon, Fold, GradientsBar, Bubble, Flex } from '../../../src/exports';
import GitHubStars from './plugins/githubStars';
const { Panel } = Fold;





export default class Message extends Component<any>{

	state = {
		title: true,
		value: 'fuckcuada',
	}

	render() {
		return (
			<React.Fragment>
				<Fold
				>
					<Panel
						headline="wanghan"
						mode='custom'
						icon={require('../../assets/github.svg')}
					>
						wangha
						</Panel>
					<Panel
						headline="wanghan"
					>
						wangha
						</Panel>
					<Panel
						headline="wanghan"
					>
						wangha
						</Panel>
					<Panel
						headline="wanghan"
						last
					>
						wangha
						</Panel>
				</Fold>
			</React.Fragment >
		)
	}
}
