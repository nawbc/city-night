import React, { Component, CSSProperties } from 'react';
import requestAnimationFramePolyfill from 'raf';
import computedStyle from 'computed-style';

interface MuguetAutoHeightInterface extends React.Attributes {
	height?: string | number;
	transitionDuration?: number;
	transitionFunc?: string;
	style?: CSSProperties;
}

class MuguetAutoHeight extends Component<MuguetAutoHeightInterface, any> {

	container: React.RefObject<any>
	wrapper: React.RefObject<any>;

	private static defaultProps = {
		duration: 300,
		timeFunction: 'ease'
	}

	state = {
		height: this.props.height
	}

	constructor(props) {
		super(props);
		this.container = React.createRef();
		this.wrapper = React.createRef();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.height !== this.props.height)
			requestAnimationFramePolyfill(this.handleAfterRender);
	}

	handleAfterRender = (timeStamp: any = new Date()) => {
		if (this.props.height === 'auto') {
			// setState current 的高度
			this.setState({ height: computedStyle(this.wrapper.current, 'height') });
		} else {
			this.container.current.style.height = computedStyle(this.wrapper.current, 'height');
			// 处理收起
			setTimeout(() => { this.setState({ height: this.props.height }) }, 16.7);
		}
		// 刷新一帧使用 16.7
		if (Math.abs(new Date() as any) - timeStamp < 16.7)
			requestAnimationFramePolyfill(this.handleAfterRender);
	}

	render() {
		return (
			<div
				ref={this.container}
				style={{
					...{
						transitionProperty: 'height',
						overflow: 'hidden',
						transitionDuration: this.props.transitionDuration + 'ms',
						transitionTimingFunction: this.props.transitionFunc,
						height: this.state.height
					},
					...this.props.style
				}}
			>
				<div
					ref={this.wrapper}
					style={{ height: 'auto' }}
				>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default MuguetAutoHeight;
