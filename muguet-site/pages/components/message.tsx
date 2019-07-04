import React, { Component } from 'react';
import { ScrollBox, Button, message, Translate } from '../../../components/exports';

import Title from './others/title';
import ShowCode from './others/showCode';
import { WordBlock } from './others/wordBlock';
import Code from './others/code';


const block1 = {
	gui: (
		<React.Fragment>
			<Button
				onClick={() => {
					message.info('this is the first test', 11000000)
				}}
			>消息</Button>
			<Button
				gradients='SunnyMorning'
				onClick={() => {
					message.warning('this is the first test', 30000)
				}}
			>警告</Button>
			<Button
				gradients='RipeMalinka'
				onClick={() => {
					message.danger('this is the first test', 3000, {
						place: 'left'
					})
				}}
			>危险</Button>
			<Button
				gradients='Nega'
				onClick={() => {
					message.danger('this is the first test', 30000000, {
						onClose: function (e) {

						},
						gradients: 'PassionateBed',
						place: 'bottom',
						icon: require('../../../assets/mails.svg')
					})
				}}
			>渐变色</Button>
			<Button
				gradients='NewLife'
				onClick={() => {
					message.loading('this is the first test', Math.pow(100, 10), {})
				}}
			>加载中.....</Button>
		</React.Fragment>
	),
	code: (
		<Code>
			{
				`
import React from 'react';
import '../../style/showCode.scss';
import { Icon } from '../../../../components/exports';

export default class ShowCode extends React.Component<any>{
	componentDidMount(){

	}

	render() {
		return (
		<div className='site-block' ref='site-block'>
				<div>{this.props.gui}</div>

				<div
					className='block displayCode'
				>
					<div className='codeIcon'>
						<Icon
							effect='click-down'
							size='small'
							src={require('../../../assets/logo/code.svg')}
						></Icon>
					</div>
					<div className='code'>{this.props.code}</div>
				</div>

			</div>
		)
	}
}
`
			}
		</Code>
	)
}

export default class Message extends Component<any>{
	render() {
		return (
			<ScrollBox>
				<div style={{ padding: '10px' }}>
					<Title
						content={['Message', <Translate id='sc_m1' />]}
						href="message1"
					/>
					<WordBlock.p>
						<Translate id='sc_m2' />
					</WordBlock.p>
					<Title
						level={2}
						content={[<Translate id='sc_m3' />]}
						href="message2"
					/>
					<WordBlock
						words={[
							<Translate id='sc_m4' />,
							<Translate id='sc_m5' />
						]}
					/>
					<Title
						level={2} content={[<Translate id='sc_m6' />]}
						href="message3"
					/>
					<div
						style={{
							width: '100%',
							display: 'flex',
							alignItems: 'flex-start',
							flexWrap: 'wrap'
						}}
					>
						<div style={{
							width: '45%',
							marginRight: '10px'
						}}>
							<ShowCode gui={block1.gui} code={block1.code} />
							<ShowCode gui={block1.gui} code={
								<Code>

								</Code>
							} />
							<ShowCode
								gui={block1.gui}
								code={"dsadasdasa"} />
						</div>
						<div style={{
							width: '45%',
						}}>
							<ShowCode
								gui={block1.gui}
								code={"dsadasdasa"} />
							<ShowCode
								gui={<div></div>}
								code={"dsadasdasa"} />
							<ShowCode
								gui={block1.gui}
								code={"dsadasdasa"} />
						</div>
					</div>
				</div>
			</ScrollBox>
		)
	}
}
