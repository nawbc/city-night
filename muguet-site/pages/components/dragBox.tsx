import React, { Component } from 'react';
import { ScrollBox, Translate, DragBox, Flex, Icon } from '../../../src/exports';

import Title from './others/title';
import ShowCode from './others/showCode';
import { WordBlock } from './others/wordBlock';
import Code from './others/code';
import DefaultFoot from './others/defaultFoot';


const block1 = {
	gui: (
		<DragBox
			mode='ghost'
			size={[100, 100]}
			className='dragBox'
			style={{ background: '#efefef' }}
		>
			<Flex.Avg size={['100%', '100%']}>
				<Translate id='dc_b1' />
			</Flex.Avg>
		</DragBox >
	),
	code: (
		<Code>
			{
				`
import React from 'react';
import { DragBox, message } from 'muguet-ui';

export default class ShowCode extends React.Component<any>{
	render() {
		return (
		<DragBox
				type='ghost'
				size={[100, 100]}
				className='dragBox'
				style={{ background: '#efefef' }}
			>
				<Flex.Avg size={['100%', '100%']}>Drawable</Flex.Avg>
			</DragBox >
		)
	}
}
`
			}
		</Code>
	),
	intro: <div
		style={{
			marginLeft: '35%'
		}}
	>
		<Translate id='dc_i1' />
	</div>
}

const block5 = {
	gui: (
		<DragBox
			mode='ghost'
			size={[100, 100]}
			className='dragBox'
			style={{ background: '#efefef' }}
		>
			<DragBox
				mode='upload'
				size={['100%', '100%']}
				onDraged={(file, ele) => { alert(file) }}
			>
				<Flex.Avg
					size={['100%', '100%']}
				>
					<Translate id='dc_b2' />
					<Icon
						size={['70%', '70%']}
						src={require('../../assets/upload.svg')}
					/>
				</Flex.Avg>
			</DragBox>
		</DragBox >
	),
	code: (
		<Code>
			{
				`
import React from 'react';
import { DragBox, message } from 'muguet-ui';

export default class ShowCode extends React.Component<any>{
	render() {
		return (
	<DragBox
			mode='ghost'
			size={[100, 100]}
			className='dragBox'
			style={{ background: '#efefef' }}
		>
			<DragBox
				mode='upload'
				size={['100%', '100%']}
				onDraged={(file, ele) => { alert(file) }}
			>
				<Flex.Avg
					size={['100%', '100%']}
				>
					<Translate id='dc_b2' />
					<Icon
						size={['70%', '70%']}
						src={require('../../assets/upload.svg')}
					></Icon>
				</Flex.Avg>
			</DragBox>
		</DragBox >
		)
	}
}
`
			}
		</Code>
	),
	intro: <div
		style={{
			marginLeft: '35%'
		}}
	>
		<Translate id='dc_i5' />
	</div>
}



const block2 = {
	gui: (
		<DragBox
			size={[100, 100]}
			mode='upload'
			onDraged={(file, ele) => { alert(file) }}
		>
			<Flex.Avg
				size={['100%', '100%']}
			>
				<Translate id='dc_b2' />
				<Icon
					size={['70%', '70%']}
					src={require('../../assets/upload.svg')}
				/>
			</Flex.Avg>
		</DragBox>
	),
	code: (
		<Code>
			{
				`
import React from 'react';
import { DragBox, message } from 'muguet-ui';

export default class ShowCode extends React.Component<any>{
	render() {
		return (
		<DragBox
					size={[100, 100]}
					type='upload'
					onDraged={(file, ele) => { alert(file) }}
				>
					<Flex.Avg
						size={['100%', '100%']}
					>
					Drawable
						<Icon
							size={['70%', '70%']}
							src={require('../../assets/upload.svg')}
						></Icon>
					</Flex.Avg>
				</DragBox>
		)
	}
}
`
			}
		</Code>
	),
	intro: <Translate id='dc_i2' />
}

const block3 = {
	gui: (
		<DragBox
			mode='split'
			size={[250, 250]}
			style={{ background: 'rgb(239, 239, 239)' }}
			padding
		>
			<div>
				The loneliest moment in someone’s life is when they are watching
				 their whole world fall apart</div>
			<div>
				"Whenever you feel like criticizing any one," he told me, "just
				 remember that all the people in this world
			</div>
		</DragBox>
	),
	code: (
		<Code>
			{
				`
import React from 'react';
import { DragBox, message } from 'muguet-ui';

export default class ShowCode extends React.Component<any>{
	render() {
		return (
	<DragBox
			mode='split'
			size={[300, 300]}
			style={{ background: 'rgb(239, 239, 239)' }}
			padding
		>
			<div>
				The loneliest moment in someone’s life is when they are watching
				 their whole world fall apart, and all they can do is stare blankly.</div>
			<div>
				"Whenever you feel like criticizing any one," he told me, "just
				 remember that all the people in this world haven't had the
				 advantages that you've had."
				“每逢你想要批评任何人的时候”，他对我说，“你就记住，这个世界
				上所有的人，并不是个个都有过你拥有的那些优越条件。”
			</div>
		</DragBox>
		)
	}
}
`
			}
		</Code>
	),
	intro: <Translate id='dc_i3' />
}
const block4 = {
	gui: (
		<>
			<DragBox
				mode='split'
				size={[250, 250]}
				style={{ background: 'rgb(239, 239, 239)', marginRight: '20px' }}
			>
				<DragBox
					mode='split'
					size={['100%', '100%']}
					style={{ background: 'rgb(239, 239, 239)' }}
					padding
				>
					<div>
						The loneliest moment in someone’s life is when they are watching
				 their whole world fall apart</div>
					<div>
						"Whenever you feel like criticizing any one," he told me, "just
						 remember that all the people in this world
					</div>
				</DragBox>
				<DragBox
					mode='split'
					size={['100%', '100%']}
					style={{ background: 'rgb(239, 239, 239)' }}
					padding
				>
					<div>
						The loneliest moment in someone’s life is when they are watching
				 their whole world fall apart</div>
					<div>
						"Whenever you feel like criticizing any one," he told me, "just
						 remember that all the people in this world
					</div>
				</DragBox>
			</DragBox>
			<DragBox
				mode='split'
				size={[250, 250]}
				style={{ background: 'rgb(239, 239, 239)' }}
			>
				<DragBox
					mode='split'
					size={['100%', '100%']}
					style={{ background: 'rgb(239, 239, 239)' }}
					direction="horizontal"
					padding
				>
					<div>
						The loneliest moment in someone’s life is when they are watching
		 their whole world fall apart.</div>
					<div>
						"Whenever you feel like criticizing any one," he told me, "just
						 remember that all the people in this world haven'
						</div>
				</DragBox>
				<DragBox
					mode='split'
					size={['100%', '100%']}
					style={{ background: 'rgb(239, 239, 239)' }}
					direction="horizontal"
					padding
				>
					<div>
						The loneliest moment in someone’s life is when they are watching
		 				their whole world fall apart.</div>
					<div>
						"Whenever you feel like criticizing any one," he told me, "just
						 remember that all the people in this world haven't
						</div>
				</DragBox>
			</DragBox>
		</>
	),
	code: (
		<Code>
			{
				`
import React from 'react';
import { DragBox, message } from 'muguet-ui';

export default class ShowCode extends React.Component<any>{
	render() {
		return (
			<>
			<DragBox
				mode='split'
				size={[250, 250]}
				style={{ background: 'rgb(239, 239, 239)', marginRight: '20px' }}
			>
				<DragBox
					mode='split'
					size={['100%', '100%']}
					style={{ background: 'rgb(239, 239, 239)' }}
					padding
				>
					<div>
						The loneliest moment in someone’s life is when they are watching
				 their whole world fall apart</div>
					<div>
						"Whenever you feel like criticizing any one," he told me, "just
						 remember that all the people in this world
					</div>
				</DragBox>
				<DragBox
					mode='split'
					size={['100%', '100%']}
					style={{ background: 'rgb(239, 239, 239)' }}
					padding
				>
					<div>
						The loneliest moment in someone’s life is when they are watching
				 their whole world fall apart</div>
					<div>
						"Whenever you feel like criticizing any one," he told me, "just
						 remember that all the people in this world
					</div>
				</DragBox>
			</DragBox>
			<DragBox
				mode='split'
				size={[250, 250]}
				style={{ background: 'rgb(239, 239, 239)' }}
			>
				<DragBox
					mode='split'
					size={['100%', '100%']}
					style={{ background: 'rgb(239, 239, 239)' }}
					direction="horizontal"
					padding
				>
					<div>
						The loneliest moment in someone’s life is when they are watching
		 				their whole world fall apart.</div>
					<div>
						"Whenever you feel like criticizing any one," he told me, "just
						 remember that all the people in this world haven'
						</div>
				</DragBox>
				<DragBox
					mode='split'
					size={['100%', '100%']}
					style={{ background: 'rgb(239, 239, 239)' }}
					direction="horizontal"
					padding
				>
					<div>
						The loneliest moment in someone’s life is when they are watching
		 				their whole world fall apart.</div>
					<div>
						"Whenever you feel like criticizing any one," he told me, "just
						 remember that all the people in this world haven't
						</div>
				</DragBox>
			</DragBox>
		</>
		)
	}
}
`
			}
		</Code>
	),
	intro: <Translate id='dc_i4' />
}

export default class Message extends Component<any>{
	render() {
		return (
			<ScrollBox>
				<div style={{ padding: '10px' }}>
					<Title
						content={['DragBox', <Translate id='dc_m1' />]}
						href="message1"
					/>
					<WordBlock.p>
						<Translate id='dc_m2' />
					</WordBlock.p>
					<Title
						level={2}
						content={[<Translate id='dc_m3' />]}
						href="message2"
					/>
					<br />
					<Title
						style={{ paddingLeft: '22px', marginBottom: '5px' }}
						level={3}
						content={[<Translate id='dc_m4' />]}
						href="message3"
					/>
					<WordBlock
						words={[
							<Translate id='dc_m5' />,
							<Translate id='dc_m6' />,
						]}
					/>
					<Title
						style={{ paddingLeft: '22px', marginBottom: '5px' }}
						level={3}
						content={[<Translate id='dc_m7' />]}
						href="message4"
					/>
					<WordBlock
						words={[
							<Translate id='dc_m8' />,
							<Translate id='dc_m9' />,
						]}
					/>
					<Title
						style={{ paddingLeft: '22px', marginBottom: '5px' }}
						level={3}
						content={[<Translate id='dc_m10' />]}
						href="message5"
					/>
					<WordBlock
						words={[
							<Translate id='dc_m11' />,
						]}
					/>
					<Title
						level={2}
						content={[<Translate id='dc_m12' />]}
						href="message6"
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
							<Title
								style={{ paddingLeft: '22px', marginBottom: '5px' }}
								level={3}
								content={[<Translate id='dc_m4' />]}
								href="message3"
							/>
							<ShowCode
								gui={block1.gui}
								code={block1.code}
								intro={block1.intro}
							/>
							<ShowCode
								gui={block5.gui}
								code={block5.code}
								intro={block5.intro}
							/>
							<Title
								style={{ paddingLeft: '22px', marginBottom: '5px' }}
								level={3}
								content={[<Translate id='dc_m10' />]}
								href="message5"
							/>
							<ShowCode
								gui={block2.gui}
								code={block2.code}
								intro={block2.intro}
							/>

						</div>

						<div style={{
							width: '45%',
						}}>
							<Title
								style={{ paddingLeft: '22px', marginBottom: '5px' }}
								level={3}
								content={[<Translate id='dc_m7' />]}
								href="message4"
							/>
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
						</div>
					</div>
				</div>
				<DefaultFoot />
			</ScrollBox>
		)
	}
}
