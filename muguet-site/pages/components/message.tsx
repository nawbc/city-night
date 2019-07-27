import React, { Component } from 'react';
import { ScrollBox, Button, message, Translate } from '../../../src/exports';

import Title from './others/title';
import ShowCode from './others/showCode';
import { WordBlock } from './others/wordBlock';
import DefaultFoot from './others/defaultFoot';
import Code from './others/code';

const block1 = {
	gui: (
		<Button
			onClick={() => {
				message.info('this is a information message', 3000000)
			}}
		><Translate id='mc_mb1' /></Button>
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
			<Button
				style={{ marginRight: '10px' }}
				onClick={() => {
					message.danger('this is a error message')
				}}
			><Translate id='mc_mb2' /></Button>
			<Button
				style={{ marginRight: '10px' }}
				onClick={() => {
					message.warning('this is a warning message')
				}}
			><Translate id='mc_mb3' /></Button>
			<Button
				onClick={() => {
					message.success('this is a success message');
				}}
			><Translate id='mc_mb4' /></Button>
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
				onClick={() => {
					message.danger('this is a error message')
				}}
			>Error</Button>
			<Button
				style={{ marginRight: '10px' }}
				onClick={() => {
					message.warning('this is a warning message')
				}}
			>Warning</Button>
			<Button
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
			<Button
				style={{ marginRight: '10px' }}
				onClick={() => {
					message.danger('this is a error message', 3500, {
						gradients: 'RipeMalinka'
					});
				}}
			>RipeMalinka</Button>
			<Button
				style={{ marginRight: '10px' }}
				onClick={() => {
					message.warning('this is a warning message', 3500, {
						gradients: 'SunnyMorning'
					});
				}}
			>SunnyMorning</Button>
			<Button
				onClick={() => {
					message.success('this is a warning message', 3500, {
						gradients: 'HealthyWater'
					});
				}}
			>HealthyWater</Button>
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
					onClick={() => {
						message.danger('this is a error message', 3500, {
						});
					}}
				>RipeMalinka</Button>
				<Button
					style={{ marginRight: '10px' }}
					onClick={() => {
						message.warning('this is a warning message', 3500, {
						});
					}}
				>SunnyMorning</Button>
				<Button
					onClick={() => {
						message.success('this is a warning message', 3500, {
						});
					}}
				>HealthyWater</Button>
			</>
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
		<Button
			style={{ marginRight: '10px' }}
			onClick={() => {
				message.danger('this is a custom icon message', 3500, {
					icon: require('../../assets/mails.svg')
				});
			}}
		><Translate id='mc_mb5' /></Button>
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
				style={{ marginRight: '10px' }}
				onClick={() => {
					message.danger('this is a error message', 3500, {
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
				style={{ marginRight: '10px' }}
				onClick={() => {
					message.loading('this is a async loading', 10 ** 10, {
						loadingClose: (e, msg) => {
							console.log(msg);
							message.info("close 3s later", 40000);
							setTimeout(() => {
								e.unSubscribe(msg);
							}, 3500);
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
		<>
			<Button
				style={{ marginRight: '10px' }}
				onClick={() => {
					message.info('display on top', 3500);
				}}
			><Translate id='mc_mb7' /></Button>
			<Button
				style={{ marginRight: '10px' }}
				onClick={() => {
					message.info('display on left', 3500, {
						place: 'left'
					});
				}}
			><Translate id='mc_mb8' /></Button>
			<Button
				style={{ marginRight: '10px' }}
				onClick={() => {
					message.info('display on right', 3500, {
						place: 'right'
					});
				}}
			><Translate id='mc_mb9' /></Button>
			<Button
				style={{ marginRight: '10px' }}
				onClick={() => {
					message.info('display on bottom', 3500, {
						place: 'bottom'
					});
				}}
			><Translate id='mc_mb10' /></Button>
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
				onClick={() => {
					message.info('display for 2s', 3500);
				}}
			><Translate id='mc_mb7' /></Button>
			<Button
				style={{ marginRight: '10px' }}
				onClick={() => {
					message.info('display for 2s', 3500, {
						place: 'left'
					});
				}}
			><Translate id='mc_mb8' /></Button>
			<Button
				style={{ marginRight: '10px' }}
				onClick={() => {
					message.info('display for 2s', 3500, {
						place: 'right'
					});
				}}
			><Translate id='mc_mb9' /></Button>
			<Button
				style={{ marginRight: '10px' }}
				onClick={() => {
					message.info('display for 2s', 3500, {
						place: 'bottom'
					});
				}}
			><Translate id='mc_mb10' /></Button>
		</>
		)
	}
}
`
			}
		</Code>
	),
	intro: <Translate id='mc_mi7' />
}

export default class Message extends Component<any>{
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
