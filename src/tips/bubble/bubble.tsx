import React from 'react';
import classNames from 'classnames';
import Icon from '../../tools/icon/icon';
import { handleSize, JSXProps } from '../../utils/handleJSXProps';
import { CommonInterface, JSXPropsInterface } from '../../interfaces/common.interface';
import { typeReplace } from '../../utils/muguetDash';
import { TipsType, SizeType } from '../../interfaces/customTypes';
import { polyfill } from "react-lifecycles-compat";
import { handleInitPosition } from './initPosition';
import './style/bubble.css';

type placeType = ['right' | 'left' | 'top' | 'bottom', 'left' | 'middle' | 'right']
	| ['right' | 'left' | 'top' | 'bottom'];

type BubbleContent = string
	| React.ReactChild
	| object;

const prefix = 'm-bubble';

const customBubbleAttrs = [
	'icon',
	'type',
	'size',
	'mode',
	'place',
	'attach',
	'radius',
	'content',
	'display',
	'duration',
	'fontColor',
	'className',
	'style',
	'children'
]

/**
 * @interface BubbleProps
 */
interface BubbleProps extends CommonInterface {
	icon?: string;
	duration?: number;
	radius?: boolean;
	place?: placeType;
	type?: TipsType;
	mode?: 'hover' | 'click';
	content?: BubbleContent;
	fontColor?: 'white' | 'black';
	attach?: React.RefObject<any>;
}

/**
 * @interface BubbleClassNames
 */
interface BubbleClassNames {
	containerName?: string;
	wrapperName?: string;
	triangleName?: string;
	contentName?: string;
}

/**
 * @module Bubble
 * @example
 * <Bubble
 *     content="this is muguet bubble test" // string
 *     icon="https://www.baidu.com" //string | require(url)
 *     place={['top', 'left']} // ['left'|'right'|'top'(default)|'bottom', 'left'|'middle(default)'|'right']
 *     mode={'hover'}          // click(default) || hover
 *     duration={10000}            //3000(default)
 *     type="success" //'danger' | 'success' | 'info' | 'warning' | 'loading';
 *     fontColor='white' | black
 * 		 radius
 * >
 *      <Button></Button> {...}
 * </Bubble>
 */

class Bubble extends React.Component<BubbleProps, any>{

	tempPropsSaver: BubbleProps;

	private static readonly defaultProps = {
		place: ['top', 'middle'],
		duration: 3000,
		mode: 'click',
		type: 'normal',
		radius: false,
		fontColor: 'white',
	}

	state = {
		place: ['top', 'middle']
	}

	bubbleRef: React.RefObject<any>;
	containerRef: React.RefObject<any>;

	constructor(props) {
		super(props);
		if (!props.children) {
			throw new Error('Error: Bubble needs to have child element');
		}
		this.bubbleRef = React.createRef();
		this.containerRef = React.createRef();
	}

	componentDidMount() {
		const bubble = this.bubbleRef.current;
		const container = this.containerRef.current;
		const place = this.tempPropsSaver.place;
		const posAfterHandle = handleInitPosition({ bubble, container, place });
		this.handleCustomEvent(posAfterHandle);
	}

	handlePlace = (pl: placeType) => 2 === pl.length ? pl : [pl[0], 'middle'] as placeType;

	handleCustomEvent = (props) => {
		const { who, child } = props;
		const { duration, mode, display, place } = this.tempPropsSaver;
		const container = this.containerRef.current;
		const direction = (place![0] === 'left' || place![0] === 'right') ? 'X' : 'Y';

		const execVisible = (vision) => {

			who.style.visibility = vision;
			if ('visible' === vision)
				who.style.transform = `translate${direction}(-4px)`;
			else
				who.style.transform = `translate${direction}(4px)`;
		}

		if (display) {
			execVisible('visible');
		}

		if (!child['disabled']) {
			// when refresh hover or click  will display bubble          ---bug
			if ('hover' === mode) {
				container.addEventListener('mousemove', () => {
					execVisible('visible');
				})

				container.addEventListener('mouseout', () => {
					execVisible('hidden');
				})
			} else if ('click' === mode) {
				var currentTimeout;
				container.addEventListener('click', () => {
					if ('visible' === who.style.visibility) {
						execVisible('hidden');
						clearTimeout(currentTimeout);
					} else {
						execVisible('visible');
						if (duration! > 0)
							currentTimeout = setTimeout(execVisible, duration, 'hidden');
					}
				})
			}
		}
	}

	handleExtraProps = (): JSXPropsInterface<BubbleProps> => {
		const bubbleProps = JSXProps<BubbleProps>(this.props, customBubbleAttrs);
		const { customProps } = bubbleProps;
		customProps.size = handleSize(customProps.size as SizeType);
		customProps.place = this.handlePlace(customProps.place!);
		return bubbleProps;
	}

	handleClassName = (classProps: BubbleProps): BubbleClassNames => {
		const { type, place, className, fontColor, radius } = classProps;
		return {
			containerName: classNames({
				[`${prefix}-container`]: true,
				[`${className}`]: className,
			}),
			wrapperName: classNames({
				[`${prefix}-wrapper`]: true,
				[`${prefix}-place-${place![0]}`]: place
			}),
			triangleName: classNames({
				[`${prefix}-triangle-${place![1]}`]: place,
				[`${prefix}-triangle-default`]: true,
				[`${prefix}-type-${type}`]: type,
			}),
			contentName: classNames({
				[`${prefix}-content`]: true,
				[`${prefix}-type-${type}`]: type,
				[`${prefix}-content-${place![0]}`]: place && radius,
				[`${prefix}-fontColor-${fontColor}`]: fontColor
			})
		}
	}

	EmbedChild = (props) => {
		const { place, content, icon, className } = props;
		const e = 'bottom' === place[0] || 'right' === place[0];

		return (
			<div
				ref={this.bubbleRef}
				className={className.wrapperName}
			>
				<div
					className={e ? className.triangleName : className.contentName}
				>{e ? null : icon ? <Icon src={icon}></Icon> : null}{e ? null : content}</div>
				<div
					className={e ? className.contentName : className.triangleName}
				>{e ? icon ? <Icon src={icon}></Icon> : null : null}{e ? content : null}</div>
			</div>
		)
	}

	BubbleContainer = () => {
		const { customProps, nativeProps } = this.handleExtraProps();
		const className = this.handleClassName(customProps);
		this.tempPropsSaver = customProps;
		const mergeStyle = {
			...typeReplace(customProps.size as SizeType, 'Object', {}),
			...typeReplace(customProps.style as Object, 'Object', {})
		}

		const embedChild = this.EmbedChild({ ...customProps, className });

		return (
			<div
				style={mergeStyle}
				ref={this.containerRef}
				className={className.containerName}
				{...nativeProps}
			>
				{embedChild}
				{customProps.children}
			</div>
		)
	}

	render() {
		return this.BubbleContainer();
	}
}

polyfill(Bubble);
export default Bubble;
