import Message, { MessageProps, MsgParams } from './messageElement';
import React from 'react';
import ReactDOM from 'react-dom';

export const prefix = 'm-message';
export const MSG_ID = `${prefix}-container`;

const createMessage = (function() {
	const div = document.createElement('div');
	div.setAttribute('id', MSG_ID);
	document.body.appendChild(div);
	const msgRef = React.createRef() as React.RefObject<any>;
	ReactDOM.render(<Message ref={msgRef} container={div} />, div);

	return {
		addMessage(msgProps: MsgParams) {
			const options = msgProps.options!;
			if (options) div.setAttribute('class', `m-message-${options.place ? options.place : 'top'}`);
			return msgRef.current.handleMessage(msgProps);
		},
	};
})();

const message = (type, content, duration = 3500, options: MessageProps = {}) => {
	return createMessage.addMessage({ type, content, duration, options });
};

export default {
	info(content?: string | React.ReactElement, duration?: number, options?: MessageProps) {
		return message('info', content, duration, options);
	},
	success(content?: string | React.ReactElement, duration?: number, options?: MessageProps) {
		return message('success', content, duration, options);
	},
	warning(content?: string | React.ReactElement, duration?: number, options?: MessageProps) {
		return message('warning', content, duration, options);
	},
	danger(content?: string | React.ReactElement, duration?: number, options?: MessageProps) {
		return message('danger', content, duration, options);
	},
	loading(content?: string | React.ReactElement, duration?: number, options?: MessageProps) {
		return message('loading', content, duration, options);
	},
};
