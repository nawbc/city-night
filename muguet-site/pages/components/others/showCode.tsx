import React from 'react';
import '../../style/showCode.scss';
import { Icon, Bubble, message, Translate } from '../../../../components/exports';

export default class ShowCode extends React.Component<any>{
	attach: React.RefObject<any>;
	constructor(props) {
		super(props);
		this.attach = React.createRef()
	}

	state = {
		showCode: false
	}

	render() {
		return (
			<div
				className='site-block'
				ref='site-block'
			>
				<div
					className='block gui'
				>{this.props.gui}</div>
				<div
					className="block intro"
				>{this.props.intro}</div>
				<div
					className='block displayCode'
				>
					<div className='codeIcon'>
						<Bubble
							content={<Translate id='sc_s1' />}
							duration={100000000000}
							mode='hover'
							attach={this.attach}
						>
							<a href="https://github.com/sewerganger/Muguet-ui/issues" target="_blank">
								<Icon
									ref={this.attach}
									style={{ marginLeft: '15px' }}
									effect='click-down'
									size='small'
									src={require('../../../assets/bug.svg')}
								></Icon>
							</a>
						</Bubble>
						<Bubble
							mode='hover'
							content={<Translate id='sc_s2' />}
						>
							<Icon
								style={{ marginLeft: '15px' }}
								effect='click-down'
								size='small'
								src={require('../../../assets/copy.svg')}
								onClick={() => {
									if (React.isValidElement(this.props.code)) {
										var a = this.props.code as any;
										var b = document.getElementById('copy-input');
										b!['value'] = a.props.children
										b!['select']();
										try {
											document.execCommand('copy');
											message.success('success');
										} catch (e) {
											message.danger('failure');
										}
									} else {
										message.danger('failure');
									}
								}}
							></Icon>
						</Bubble>
						<Bubble
							mode='hover'
							content={this.state.showCode ? <Translate id='sc_s3' /> : <Translate id='sc_s4' />}
						>
							{
								this.state.showCode ?
									<Icon
										style={{ marginLeft: '15px' }}
										effect='click-down'
										src={require('../../../assets/back-g.svg')}
										size='small'
										onClick={() => {
											this.setState({ showCode: !this.state.showCode })
										}}
									></Icon> :
									<Icon
										style={{ marginLeft: '15px', marginRight: '0' }}
										effect='click-down'
										size='small'
										src={require('../../../assets/code.svg')}
										onClick={() => {
											this.setState({ showCode: !this.state.showCode })
										}}
									></Icon>
							}
						</Bubble>
					</div>
					{
						this.state.showCode ? <div className='code'>{this.props.code}</div> : null
					}
				</div>

			</div>
		)
	}
}
