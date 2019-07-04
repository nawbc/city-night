import React from 'react';
import classNames from 'classnames';
import { CommonInterface, JSXPropsInterface } from '../../interfaces/common.interface';
import { handleSize, JSXProps } from '../../utils/handleJSXProps';
import { polyfill } from 'react-lifecycles-compat';
import { typeReplace } from '../../utils/muguetDash';
import './style/dragBox.css';
import { SizeType } from '../../interfaces/customTypes';

type dragType = 'ghost' | 'split' | 'upload';
type uploadSettingType = {
	action?: string,
	picturePreview?: boolean,
};


const prefix = 'm-dragBox';
const customDragBoxAttrs = [
	'mode',
	'size',
	'father',
	'direction',
	'share',
	'padding',
	'lineStyle',
	'gradients',
	'onDraged',
	'uploadSetting', //undo
	'style',
	'children',
	'className'
]

interface DragBoxProps extends CommonInterface, DragBoxClassNames {
	mode?: dragType;
	lineStyle?: {};
	father?: boolean;
	direction?: 'vertical' | 'horizontal';
	uploadSetting?: uploadSettingType;
	padding?: boolean;
	onDraged?: (files?: FileList, ele?: HTMLElement) => any;
}

interface DragBoxClassNames {
	uploadName?: string;
	containerName?: string;
	fstBoxName?: string;
	secBoxName?: string;
	dragLineName?: string;
}

/**
 * =============================================================================
 *  2019/4/16 19:28
 *  record: upload doesn't finish because ajax
 * =============================================================================
 */

/**
 * this is dragBox module, it can make a box which can drag and
 * it has two drag type. one can drag  anywhere on screen likes a
 * ghost,  another one can split the box, it has a split line which
 * can be drag to adjust each size,
 *
 *	support gradients
 * @module DragBox
 * @example
 * <DragBox
 *      mode='ghost' //ghost(default) | split | upload(get local file to upload or others)
 *      size={[100, 100]}
 *			className='dragBox' @see classNames {@link https://www.npmjs.com/package/classnames}
 *			gradients="DeepBlue"
 *  ></DragBox>
 *
 * <DragBox
 *      mode='split'
 *      direction='vertical' // vertical | horizontal
 *      lineStyle={{ background: #000}} // using this or define css property '.m-dragBox' to overwrite need drag='split'
 *			className='dragBox' @see classNames {@link https://www.npmjs.com/package/classnames}
 *			padding // padding child element
 *  ></DragBox>
 *
 * <DragBox
 *      mode='upload'
 * 			onDraged={(file, ele)=>{}}
 *  ></DragBox>
 *
 *
 */

class DragBox extends React.Component<DragBoxProps, any> {
	containerRef: React.RefObject<any>;
	dragLineRef: React.RefObject<any>;
	fstBoxRef: React.RefObject<any>;
	secBoxRef: React.RefObject<any>;
	uploadRef: React.RefObject<any>;


	constructor(props) {
		super(props);
		this.containerRef = React.createRef();
		this.dragLineRef = React.createRef();
		this.fstBoxRef = React.createRef();
		this.secBoxRef = React.createRef();
		this.uploadRef = React.createRef();
	}

	// save after render
	tempPropsSaver: DragBoxProps;
	private static readonly defaultProps = {
		mode: 'ghost',
		direction: 'vertical',
		lineStyle: { background: '#dddcdc' },
		uploadSetting: {
			picturePreView: false
		}
	}

	componentDidMount() {
		switch (this.tempPropsSaver.mode) {
			case 'ghost': this.handleGhostDragEvent(); break;
			case 'upload': this.handleUploadDragEvent(this.tempPropsSaver); break;
			case 'split': this.handleSplitDragEvent(); break;
		}
	}

	readonly handleGhostDragEvent = (): void => {
		const container = this.containerRef.current;
		let isDraging_g = false, distanceX, distanceY;

		container.addEventListener('mousedown', (e) => {
			isDraging_g = true;
			distanceX = e.pageX - Math.abs(container.getBoundingClientRect()!['x']);
			distanceY = e.pageY - Math.abs(container.getBoundingClientRect()!['y']);
		})

		document.addEventListener('mousemove', (e) => {
			if (isDraging_g) {
				let x = e.pageX - distanceX;
				let y = e.pageY - distanceY;
				if (x < 0 || distanceX > container.offsetWidth) {
					isDraging_g = false;
				}
				if (y < 0 || distanceY > container.offsetHeight) {
					isDraging_g = false;
				}
				container.style.left = x + "px";
				container.style.top = y + "px";
			}
		})

		container.addEventListener('mouseup', () => {
			isDraging_g = false;
		})
	}

	readonly handleSplitDragEvent = () => {
		const dragLine = this.dragLineRef.current;
		const fstBox = this.fstBoxRef.current;
		const secBox = this.secBoxRef.current;
		const container = this.containerRef.current;

		console.log(secBox)
		const { direction } = this.tempPropsSaver;

		let isDraging_s = false;

		fstBox.ondragstart = () => false;
		secBox.ondragstart = () => false;

		dragLine.addEventListener('mousedown', (e) => {
			isDraging_s = true;
		})

		document.addEventListener('mousemove', (e) => {
			if (isDraging_s) {
				let a = container.getBoundingClientRect();
				if ('vertical' === direction) {
					let distanceX = e.pageX - a!['x'];
					if (distanceX >= 0) {
						let tempVert = a!['width'] - distanceX;
						fstBox.style.right = tempVert + dragLine.offsetWidth / 2 + 'px';
						secBox.style.width = tempVert + 'px';
					}
				} else if ('horizontal' === direction) {
					let distanceY = e.pageY - a!['y'];
					if (distanceY > 0) {
						let tempHorz = a!['height'] - distanceY;
						fstBox.style.bottom = tempHorz + 'px';
						secBox.style.height = tempHorz + 'px';
					}
				}
			}
		})

		document.addEventListener('mouseup', () => { isDraging_s = false; })
	}

	readonly handleUploadDragEvent = (props) => {
		const container = this.uploadRef.current;

		container.addEventListener('dragover', (e) => e.preventDefault())

		container.addEventListener('drop', (e) => {
			e.preventDefault();
			props.onDraged(e.dataTransfer!.files, container);
		})
	}

	handleExtraProps = (): JSXPropsInterface<DragBoxProps> => {
		const dragBoxProps = JSXProps<DragBoxProps>(this.props, customDragBoxAttrs);
		const { customProps } = dragBoxProps;
		customProps.size = handleSize(customProps.size as SizeType);
		return dragBoxProps;
	}

	handleClassName = (classProps): DragBoxClassNames => {
		const { direction, className, padding, gradients, mode } = classProps;

		return {
			containerName: classNames({
				[`${className}`]: className,
				[`${prefix}-default`]: true,
				[`${prefix}-${mode}`]: true,
			}),
			fstBoxName: classNames({
				[`${prefix}-padding`]: padding,
				[`${prefix}-fstBox`]: true,
				[`${prefix}-fstBox-${direction}`]: true,
				[`m-gradients-${gradients}`]: gradients
			}),
			secBoxName: classNames({
				[`${prefix}-padding`]: padding,
				[`${prefix}-secBox`]: true,
				[`${prefix}-secBox-${direction}`]: true,
				[`m-gradients-${gradients}`]: gradients
			}),
			dragLineName: classNames({
				[`${prefix}-dragLine`]: true,
				[`${prefix}-dragLine-${direction}`]: true,
			}),
			uploadName: classNames({
				[`${prefix}-uploadChild`]: true,
			})
		}
	}

	EmbedChild(props: DragBoxProps) {
		const {
			children,
			lineStyle,
			uploadName,
			fstBoxName,
			secBoxName,
			dragLineName,
		} = props;

		let tempChild: HTMLElement | React.ReactNode;
		switch (props.mode) {
			case 'ghost':
				tempChild = children;
				break;
			case 'split':
				tempChild = (
					<React.Fragment>
						<div
							ref={this.fstBoxRef}
							className={fstBoxName}
						>
							<div>{React.Children.map(children, (ele, i) => (i === 0 ? ele : null))}</div>
						</div>
						<div
							ref={this.secBoxRef}
							className={secBoxName}
						>
							<div
								ref={this.dragLineRef}
								className={dragLineName}
								style={lineStyle}
							></div>
							<div>{React.Children.map(children, (ele, i) => (i === 1 ? ele : null))}</div>
						</div>
					</React.Fragment>
				)
				break;
			case 'upload':
				tempChild = (
					<div
						ref={this.uploadRef}
						className={uploadName}
					>{children}</div>
				)
				break;
		}
		return tempChild;
	}

	render() {
		const { customProps, nativeProps } = this.handleExtraProps();
		const className = this.handleClassName(customProps);
		this.tempPropsSaver = Object.assign(customProps, className);
		const mergeStyle = {
			...typeReplace(customProps.size as Object, 'Object', {}),
			...typeReplace(customProps.style as Object, 'Object', {})
		}

		return (
			<div
				{...nativeProps}
				className={className.containerName}
				ref={this.containerRef}
				style={mergeStyle}
			>{this.EmbedChild(customProps)}</div>
		)
	}
}
polyfill(DragBox);
export default DragBox;
