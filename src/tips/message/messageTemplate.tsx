import React from 'react';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { typeReplace } from '../../utils/muguetDash';
import { handleSize, JSXProps } from '../../utils/handleJSXProps';
import { JSXPropsInterface } from '../../interfaces/common.interface';
import { SizeType } from '../../interfaces/customTypes';
import { MessageProps, MsgParams } from './messageElement';
import Loading from '../../tools/loading/loading';
import Flex from '../../layout/flex/flex';
import Icon from '../../tools/icon/icon';
import { prefix, MSG_ID } from './message';
import './style/message.css';

const customMsgTemplateAttr = [
	'icon',
	'type',
	'content',
	'options',
	'gradients',
	'duration',
	'container'
]

interface MsgTemplateProps extends MessageProps, MsgParams { }

class MessageTemplate extends React.Component<MsgTemplateProps, any> {
	tempSaver: MsgTemplateProps;

	setMessageContainer = (ele: HTMLElement, callback) => {
		ele.style.width = 'auto';
		ele.style.right = '0px';
		ele.style.top = '0px';
		ele.style.left = '0px';
		ele.style.bottom = '73px';
		ele.style.marginLeft = '0px';;
		callback();
	}

	componentDidMount() {
		const msgContainer = document.getElementById(MSG_ID) as HTMLElement;
		const { options } = this.tempSaver;
		if ('right' === options!.place) {
			this.setMessageContainer(msgContainer, function () {
				msgContainer.style.left = 'unset';
				msgContainer.style.bottom = 'unset';
				msgContainer.style.marginRight = '25px';
			})

		} else if ('left' === options!.place) {
			this.setMessageContainer(msgContainer, function () {
				msgContainer.style.right = 'unset';
				msgContainer.style.bottom = 'unset';
				msgContainer.style.marginLeft = '25px';
			})
		} else if ('bottom' === options!.place) {
			this.setMessageContainer(msgContainer, function () {
				msgContainer.style.top = 'unset';
				msgContainer.style.width = '100%';
			})
		} else {
			this.setMessageContainer(msgContainer, function () {
				msgContainer.style.bottom = 'unset';
				msgContainer.style.width = '100%';
			})
		}
	}

	handleExtraProps = (): JSXPropsInterface<MsgTemplateProps> => {
		const msgTemplateProps = JSXProps<MsgTemplateProps>(this.props, customMsgTemplateAttr)
		const { customProps } = msgTemplateProps;
		customProps.size = handleSize(customProps.size as SizeType);
		return msgTemplateProps;
	}

	handleClassName = (classProps) => {
		const {
			size,
			gradients,
			className,
		} = classProps.options;
		return classNames({
			[`${prefix}-default`]: true,
			[`${classNames(className)}`]: className,
			[`m-gradients-${gradients ? gradients : 'CloudyKnoxville'}`]: true,
			[`${prefix}-size-${size}`]: typeReplace(size as SizeType, 'String', false),
		});
	}

	handleType = (props): React.ReactElement => {
		const { type, options } = props;
		const commonStyle = { marginRight: '6px' };

		if (options.icon) {
			return <Icon
				style={commonStyle}
				src={options.icon} />;
		} else {
			switch (type) {
				case 'success': return (
					<Icon
						style={commonStyle}
						src={require('../../assets/icons/local/success.svg')} />
				);
				case 'info': return (
					<Icon
						style={commonStyle}
						src={require('../../assets/icons/local/info.svg')} />
				);
				case 'warning': return (
					<Icon
						style={commonStyle}
						src={require('../../assets/icons/local/warning.svg')} />
				);
				case 'danger': return (
					<Icon
						style={commonStyle}
						src={require('../../assets/icons/local/danger.svg')} />
				);
				case 'loading': return (
					<Loading.Hoop
						size={['25px', '25px']}
					/>
				);
				default: return (
					<Icon
						style={commonStyle}
						src={require('../../assets/icons/local/info.svg')} />
				);
			}
		}
	}

	render() {
		const { nativeProps, customProps } = this.handleExtraProps();
		const className = this.handleClassName(customProps);
		const mergeStyle = {
			...typeReplace(customProps.size as Object, 'Object', {}),
			...typeReplace(customProps.style as Object, 'Object', {})
		}

		this.tempSaver = customProps;

		return (
			<div
				{...nativeProps}
				className={className}
				style={mergeStyle}
			>
				<Flex.Avg
					style={{ flexWrap: 'nowrap' }}
				>
					{this.handleType(customProps)}
					{customProps.content}
				</Flex.Avg>
			</div>
		)
	}
}
polyfill(MessageTemplate);
export default MessageTemplate;
