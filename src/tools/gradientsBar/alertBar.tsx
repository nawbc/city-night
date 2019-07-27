import GradientsBar from './gradientsBar';
import React from 'react';
import ReactDOM from 'react-dom';

const alertBar = (type, content, duration = 3500, options) => {};

export default {
	info(content?: string | React.ReactElement, duration?: number, options?: any) {
		alertBar('info', content, duration, options);
	},
	success(content?: string | React.ReactElement, duration?: number, options?: any) {
		return alertBar('success', content, duration, options);
	},
	warning(content?: string | React.ReactElement, duration?: number, options?: any) {
		alertBar('warning', content, duration, options);
	},
	danger(content?: string | React.ReactElement, duration?: number, options?: any) {
		alertBar('danger', content, duration, options);
	},
	loading(content?: string | React.ReactElement, duration?: number, options?: any) {
		alertBar('loading', content, duration, options);
	},
};
