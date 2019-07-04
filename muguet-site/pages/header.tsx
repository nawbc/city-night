import React, { Component } from 'react';
import { GradientsBar, GradientsFont, Icon, Button, Translate } from '../../components/exports';
import { ScreenContext } from './doc';
import './style/header.scss';


export default class Home extends Component<any>{

	state = {
		language: false
	}

	render() {
		return (
			<ScreenContext.Consumer>
				{(value: {isMobile: boolean}) => {

					return <GradientsBar
						size={['100%', '60px']}
						gradients='NewLife'
					>
						<a href="/site/introduce">
							<div className='logo'></div>
							<GradientsFont
								style={{ position: 'relative', top: '-10px', left: '-17px', userSelect: 'none' }}
								gradients='GrownEarly'
								size='large'
							>Muguet</GradientsFont>
						</a>
						<div style={{ position: 'absolute', bottom: '3px', right: '20px' }}>
							{
								value.isMobile ? null :
								<Button
									size='tiny'
									className='labelButton'
									style={{ background: 'transparent' }}
								><Translate id="sc_h1" /></Button>
							}
							<Button
								size='tiny'
								className='labelButton'
								style={{ background: 'transparent' }}
								href={{
									url: '/site/gradients.htm',
									target: 'blank'
								}}
							>Gradients Card</Button>
							<Button
								size={[70, 17]}
								style={{ background: 'transparent' }}
								onClick={() => {
									this.props.onState();
									this.setState({
										language: !this.state.language
									})
								}}
							>{this.state.language ? '中文' : 'English'}</Button>
						</div>
					</GradientsBar>
				}}
			</ScreenContext.Consumer>
		)
	}
}
