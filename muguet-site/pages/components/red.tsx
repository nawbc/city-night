import React, { Component } from 'react';
import { ScrollBox, Button, message, Translate, Red, Avatar, Bubble } from '../../../src/exports';

import Title from './others/title';
import ShowCode from './others/showCode';
import { WordBlock } from './others/wordBlock';
import DefaultFoot from './others/defaultFoot';
import Code from './others/code';

class Block1Gui extends Component {
	state = {
		count: 0
	}
	render() {
		return (
			<div
				style={{ display: 'flex', width: '100%', height: '100%', alignItems: 'center' }}
			>
				<Red
					containStyle={{ marginRight: '20px' }}
					place='topLeft'
					count={1}
				>
					<Avatar></Avatar>
				</Red>
				<Red
					count={1000}
					containStyle={{ marginRight: '20px' }}
				>
					<Avatar></Avatar>
				</Red>
				<Red
					containStyle={{ marginRight: '20px' }}
					count={this.state.count}
				>
					<Button
						gradients="StrongBliss"
						onClick={() => {
							this.setState({
								count: this.state.count + 1
							})
						}}
					>
						<Translate id="rc_b1" />
					</Button>
				</Red>
				<Red
					count={15}
					containStyle={{ marginRight: '20px' }}
					place='bottomRight'
				>
					<Avatar></Avatar>
				</Red>
			</div>

		)
	}
}

const block1 = {
	gui: (<Block1Gui />),
	code: (
		<Code>
			{
				`
import React from 'react';
import { Button, message } from 'muguet-ui';

export default class ShowCode extends React.Component<any>{
	render() {
		return (
			<Button
				onClick={() => {
					message.info('this is a information message');
				}}>Information</Button>
		)
	}
}
`
			}
		</Code>
	),
	intro: <Translate id='mc_mi1' />
}

const block2 = {
	gui: (
		<>
			<Bubble
				style={{ marginRight: '20px' }}
				content={"10000"}
				duration={10000}
			>
				<Red
					count={10000}
				>
					<Button>wanghan</Button>
				</Red>
			</Bubble>
		</>
	),
	code: (
		<Code>
			{
				`
import React from 'react';
import { Button, message } from 'muguet-ui';

export default class ShowCode extends React.Component<any>{
	render() {
		return (
			<>
			<Button
				style={{ marginRight: '10px' }}
				gradients="RipeMalinka"
				onClick={() => {
					message.danger('this is a error message')
				}}
			>Error</Button>
			<Button
				style={{ marginRight: '10px' }}
				gradients="SunnyMorning"
				onClick={() => {
					message.warning('this is a warning message')
				}}
			>Warning</Button>
			<Button
				gradients="GrownEarly"
				onClick={() => {
					message.success('this is a success message');
				}}
			>Success</Button>
		</>
		)
	}
}
`
			}
		</Code>
	),
	intro: <Translate id='mc_mi2' />
}

const block3 = {
	gui: (
		<>
			<Red
				containStyle={{ marginRight: '10px' }}
				place='topLeft'
				mini={true}
				shape='circle'
			>
				<Avatar></Avatar>
			</Red>
			<Red
				containStyle={{ marginRight: '10px' }}
				shape='circle'
			>
				<Avatar></Avatar>
			</Red>
			<Red
				containStyle={{ marginRight: '10px' }}
				place='bottomRight'
				shape='fillet'
			>
				<Avatar></Avatar>
			</Red>
			<Red
				containStyle={{ marginRight: '10px' }}
				place='bottomLeft'
				shape='fillet'
			>
				<Avatar></Avatar>
			</Red>
		</>
	),
	code: (
		<Code>
			{
				`
import React from 'react';
import { Button, message } from 'muguet-ui';

export default class ShowCode extends React.Component<any>{
	render() {
		return (

		)
	}
}
`
			}
		</Code>
	),
	intro: <Translate id='mc_mi3' />
}
const block4 = {
	gui: (
		<>
			<Red
				containStyle={{ marginRight: '10px' }}
				place='topLeft'
				shape='circle'
				gradients="GrownEarly"
			>
				<Avatar></Avatar>
			</Red>
			<Red
				containStyle={{ marginRight: '10px' }}
				shape='circle'
				gradients="PassionateBed"
			>
				<Avatar></Avatar>
			</Red>
			<Red
				containStyle={{ marginRight: '10px' }}
				place='bottomRight'
				shape='fillet'
				gradients="Nega"
			>
				<Avatar></Avatar>
			</Red>
			<Red
				containStyle={{ marginRight: '10px' }}
				place='bottomLeft'
				shape='fillet'
			>
				<Avatar></Avatar>
			</Red>
		</>
	),
	code: (
		<Code>
			{
				`
import React from 'react';
import { Button, message } from 'muguet-ui';

export default class ShowCode extends React.Component<any>{
	render() {
		return (
	<Button
				gradients='SandStrike'
				style={{ marginRight: '10px' }}
				onClick={() => {
					message.danger('this is a error message', 3500, {
						gradients: 'SandStrike',
						icon: require('../../assets/mails.svg')
					});
				}}
		>Custom Icon</Button>
		)
	}
}
`
			}
		</Code>
	),
	intro: <Translate id='mc_mi4' />
}


class Block5Gui extends Component<any, any> {
	constructor(props) {
		super(props);
		this.state = {
			loading: true
		}
	}

	render() {
		return (
			<Button
				gradients='EarlGray'
				style={{ marginRight: '10px' }}
				onClick={() => {
					message.loading('this is a async loading', 10 ** 10, {
						loadingClose: (e, msg) => {
							message.info("close 3s later");
							setTimeout(() => {
								e.unSubscribe(msg);
							}, 3000);
						}
					});
				}}
			><Translate id='mc_mb6' /></Button>
		)
	}
}

const block5 = {
	gui: (<Block5Gui />),
	code: (
		<Code>
			{
				`
import React from 'react';
import { Button, message } from 'muguet-ui';

export default class ShowCode extends React.Component<any>{
	render() {
		return (
			<Button
			gradients='EarlGray'
			style={{ marginRight: '10px' }}
			onClick={() => {
				message.loading('this is a async loading', Math.pow(10, 10), {
					loadingClose: (e, msg) => {
						message.info("close 3s later");
						setTimeout(() => {
							e.unSubscribe(msg);
						}, 3000);
					}
				});
			}}
		>Async Loading</Button>
		)
	}
}
`
			}
		</Code>
	),
	intro: <Translate id='mc_mi5' />
}

const block6 = {
	gui: (
		<Button
			onClick={() => {
				message.info('display for 2s', 2000);
			}}
		><Translate id='mc_mb7' /></Button>
	),
	code: (
		<Code>
			{
				`
import React from 'react';
import { Button, message } from 'muguet-ui';

export default class ShowCode extends React.Component<any>{
	render() {
		return (
			<Button
			onClick={() => {
				message.info('display for 2s', 2000);
			}}
		>Display 2s</Button>
		)
	}
}
`
			}
		</Code>
	),
	intro: <Translate id='mc_mi6' />
}


const block7 = {
	gui: (
		<div></div>
	),
	code: (
		<Code>
			{
				`
import React from 'react';
import { Button, message } from 'muguet-ui';

export default class ShowCode extends React.Component<any>{
	render() {
		return (

		)
	}
}
`
			}
		</Code>
	),
	intro: <Translate id='mc_mi7' />
}

export default class RedPage extends Component<any>{
	render() {
		return (
			<ScrollBox>
				<div style={{ padding: '10px' }}>
					<Title
						content={['Message', <Translate id='mc_m1' />]}
						href="message1"
					/>
					<WordBlock.p>
						<Translate id='mc_m2' />
					</WordBlock.p>
					<Title
						level={2}
						content={[<Translate id='mc_m3' />]}
						href="message2"
					/>
					<WordBlock
						words={[
							<Translate id='mc_m4' />,
							<Translate id='mc_m5' />
						]}
					/>
					<Title
						level={2} content={[<Translate id='mc_m6' />]}
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
							<ShowCode
								gui={block1.gui}
								code={block1.code}
								intro={block1.intro}
							/>
							<ShowCode
								gui={block2.gui}
								code={block2.code}
								intro={block2.intro}
							/>
							<ShowCode
								gui={block5.gui}
								code={block5.code}
								intro={block5.intro}
							/>
							<ShowCode
								gui={block7.gui}
								code={block7.code}
								intro={block7.intro}
							/>

						</div>

						<div style={{
							width: '45%',
						}}>
							<ShowCode
								gui={block3.gui}
								code={block3.code}
								intro={block3.intro}
							/>
							<ShowCode
								gui={block4.gui}
								code={block4.code}
								intro={block4.intro}
							/>
							<ShowCode
								gui={block6.gui}
								code={block6.code}
								intro={block6.intro}
							/>
						</div>
					</div>
				</div>
				<DefaultFoot>

				</DefaultFoot>
			</ScrollBox>
		)
	}
}
