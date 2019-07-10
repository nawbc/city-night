import React, { Component } from 'react';
import ArticleIndex from './articleIndex';
import ArticleContent from './articleContent';
import Header from './header';
import { Row, Col, GradientsBar, Icon, Muguet } from '../../src/exports';
import { ZH_CN, EN_US } from '../doc/i18n/index';
import './style/doc.scss';

export const ScreenContext = React.createContext({});

export default class Doc extends Component<any>{

	state = {
		isMobile: false,
		indexDisplay: false,
		language: false,
	}

	componentDidMount() {
		if (window.innerWidth < 768) {
			this.setState({ isMobile: true })
			document.body.style.overflowY = "auto"
		}
	}

	render() {
		const pc = (
			<Row>
				<Col xs={2}>
					<ArticleIndex />
				</Col>
				<Col xs>
					<ArticleContent />
				</Col>
			</Row>
		)

		const mobile = (
			<React.Fragment>
				<GradientsBar
					size={[35, 35]}
					gradients="GrownEarly"
					className='menuBtn'
					ref='menuBtn'
					onClick={() => {
						const a = document.getElementById('icon-hidden') as HTMLElement;
						a.style.opacity = "0";
						setTimeout(() => {
							a.style.opacity = "1";
							this.setState({ indexDisplay: !this.state.indexDisplay })
						}, 200)
					}}
				>
					<Icon
						id='icon-hidden'
						size={['100%', '100%']}
						src={this.state.indexDisplay ? require('../../assets/back.svg') : require('../../assets/menu.svg')}
					/>
				</GradientsBar>
				<ArticleIndex
					mobile={this.state.isMobile}
					indexDisplay={this.state.indexDisplay}
					onShow={() => {
						this.setState({ indexDisplay: !this.state.indexDisplay })
					}}
				/>
				<ArticleContent />
			</React.Fragment>
		)

		return (
			<Muguet
				langs={['en', 'zh']}
				locale={this.state.language ? 'en' : 'zh'}
				i18n={this.state.language ? EN_US : ZH_CN}
				style={{
					overflowY: 'hidden',
				}}
			>
				<ScreenContext.Provider value={{ isMobile: this.state.isMobile }}>
					<Header
						onState={() => {
							this.setState({
								language: !this.state.language,
							})
						}} />
					{this.state.isMobile ? mobile : pc}
				</ScreenContext.Provider>
			</Muguet>
		)
	}
}

