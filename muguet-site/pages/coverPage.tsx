import React, { Component } from 'react';
import GitHubStars from './components/plugins/githubStars';
import { GradientsBar, Button, Flex } from '../../src/exports';
import './style/coverPage.scss';
import Header from './header';
import { ScreenContext } from './doc';
import LogoAnimation from './components/others/logoAnimation';

export default class CoverPage extends Component<any>{

	state = {
		language: false,
	}

	render() {
		return (
			<ScreenContext.Consumer>{(value: { isMobile: boolean }) => (
				<GradientsBar
					gradients='NewLife'
					className='coverPage'
				>
					<Header
						onState={() => {
							this.setState({
								language: !this.state.language,
							})
						}} />
					<h1 style={{
						fontSize: `${value.isMobile ? '40px' : '45px'}`,
						color: '#314659',
						paddingLeft: '150px',
						paddingTop: '100px',
					}}>
						Muguet-ui
				</h1>
					<h2 style={{
						color: '#314659',
						fontWeight: 500,
						paddingLeft: '150px',
						lineHeight: '1.8',
					}}>
						<strong>Muguet</strong> 是一款主打渐变色的 React ui 组件库 <br />
						目前专注于为个人开发者带来跟好的web开发体验。
				</h2>
					<Flex.Avg
						style={{
							marginTop: '100px',
							paddingLeft: '150px',
						}}
					>
						<Button
							gradients="AriellesSmile"
							onClick={() => {
								this.props.onShow();
							}}
						>开始使用</Button>
						<GitHubStars />
						<Button
							href="https://gitee.com/sewerganger/Muguet-ui"
							gradients="RipeMalinka"
							icon={require('../assets/logo-black.svg')}
						>Gitee</Button>
					</Flex.Avg>
					<LogoAnimation />
				</GradientsBar>
			)}</ScreenContext.Consumer>
		)
	}
}
