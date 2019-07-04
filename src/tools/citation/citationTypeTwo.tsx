import React from "react";
import { polyfill } from 'react-lifecycles-compat';
import { JSXPropsInterface } from '../../interfaces/common.interface';
import { CitationTypeOneProps } from './citationTypeOne';
import { JSXProps, handleSize } from "../../utils/handleJSXProps";
import { SizeType } from "../../interfaces/customTypes";
import { typeReplace } from '../../utils/muguetDash';
import './style/citationTypeTwo.css';
import Icon from "../icon/icon";

const prefix = 'm-citationTT';

const customCitationTypeTwoProps = [
	'size',
	'style',
	'icon',
	'effect',
	'shape'
];

export interface CitationTypeTwoProps extends CitationTypeOneProps {
	icon?: string;
	effect?: boolean;
}

class CitationTypeTwo extends React.Component<CitationTypeTwoProps>{

	private static readonly defaultProps = {
		effect: false,
		shape: 'square'
	}

	handleExtraProps = (): JSXPropsInterface<CitationTypeTwoProps> => {
		const citationTypeTwoProps = JSXProps<CitationTypeTwoProps>(this.props, customCitationTypeTwoProps);
		const { customProps } = citationTypeTwoProps;
		customProps.size = handleSize(customProps.size as SizeType);
		return citationTypeTwoProps;
	}


	render() {
		const { nativeProps, customProps } = this.handleExtraProps();
		const animateClassName = customProps.effect ? `${prefix}-animate` : '';
		const shape = `${prefix}-${customProps.shape}`;
		const mergeStyle = {
			...typeReplace(customProps.size as Object, 'Object', {}),
			...typeReplace(customProps.style as Object, 'Object', {})
		}

		return (
			<div
				{...nativeProps}
				style={mergeStyle}
				className={prefix}
			>
				<div
					className={`${prefix}-wrapper`}
				>
					<div
						className={`${prefix}-square ${animateClassName} ${shape}`}
					>
						{
							customProps.icon ? <Icon
								size={['100%', '100%']}
							src={customProps.icon}
							></Icon> : null
						}
					</div>
					<div
						className={`${prefix}-squareSide`}
					>
						{
							Array(3).fill('').map((ele, index) => (
								<div
								className={animateClassName}
								key={index}></div>
							))
						}
					</div>
				</div>

				<div className='m-citationTT-bw'>
					{
						Array(2).fill('').map((ele, index) => (
							<div
								className={animateClassName}
								key={index}></div>
						))
					}
				</div>
			</div>
		)
	}
}
polyfill(CitationTypeTwo);
export default CitationTypeTwo;
