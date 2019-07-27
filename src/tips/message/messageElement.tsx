import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import { CommonInterface } from '../../interfaces/common.interface';
import { TipsType, PositionType } from '../../interfaces/customTypes';
import { generateToken } from '../../utils/muguetDash';
import MessageTemplate from './messageTemplate';

export interface MessageProps extends CommonInterface {
	container?: HTMLElement;
	onClose?: (ref: React.ReactElement) => void;
	icon?: string | React.ReactElement;
	loadingClose?: (ele: Message, props: MsgParams) => void; // loadingClose: (e, m)=>{e.unSubscribe(m)}
	place?: PositionType;
}

export interface MsgParams {
	type?: TipsType;
	content?: string | React.ReactNode;
	duration?: number;
	options?: MessageProps;
	token?: string;
}

class Message extends React.Component<MessageProps, any> {
	state = {
		messages: [] as any,
	};

	handleMessage = (msg: MsgParams) => {
		msg.token = generateToken();
		this.subscribe(msg);

		if ('loading' === msg.type && msg.options!.loadingClose) {
			msg.options!.loadingClose(this, msg);
		}
		if (msg.duration! > 0) setTimeout(this.unSubscribe, msg.duration, msg, msg.options);
	};

	subscribe = who => {
		if (this.state.messages.every(ele => ele.token !== who.token)) {
			this.state.messages.push(who);
			this.setState({
				messages: this.state.messages,
			});
		}
	};

	// ☠
	unSubscribe = who => {
		// only execute one time
		let lock = true;
		this.setState({
			messages: this.state.messages.filter(ele => {
				if (who.options) {
					if (who.options.onClose && lock) {
						lock = false;
						who.options.onClose(this.refs[who.token]);
					}
				}
				return ele.token !== who.token;
			}),
		});
	};

	render() {
		const { messages } = this.state;

		return (
			<React.Fragment>
				{messages.map((avg, index) => (
					<MessageTemplate ref={avg.token} key={index} container={this.props.container} {...avg} />
				))}
			</React.Fragment>
		);
	}
}
polyfill(Message);

export default Message;
