import React from "react";
import { polyfill } from 'react-lifecycles-compat';
import { typeReplace } from '../../utils/muguetDash';
import './style/citationTypeOne.css';
import { JSXPropsInterface, CommonInterface } from '../../interfaces/common.interface';
import { JSXProps, handleSize } from "../../utils/handleJSXProps";
import { SizeType } from "../../interfaces/customTypes";

const customCitationTypeOneProps = [
	'size',
	'style',
	'effect'
];

export interface CitationTypeOneProps extends CommonInterface { }

class CitationTypeOne extends React.Component<CitationTypeOneProps>{

	private static readonly defaultProps = {
		effect: false
	}

	handleExtraProps = (): JSXPropsInterface<CitationTypeOneProps> => {
		const citationProps = JSXProps<CitationTypeOneProps>(this.props, customCitationTypeOneProps);
		const { customProps } = citationProps
		customProps.size = handleSize(customProps.size as SizeType);
		return citationProps;
	}

	render() {
		const { nativeProps, customProps } = this.handleExtraProps();
		console.log(customProps)
		const mergeStyle = {
			...typeReplace(customProps.size as Object, 'Object', {}),
			...typeReplace(customProps.style as Object, 'Object', {})
		}
		return (
			<div
				{...nativeProps}
				style={mergeStyle}
			>
				<div
					className='m-citationTypeOne'
				>
					{Array(4).fill('').map((ele, index) => (
						<div
							className={customProps.effect ? 'm-citationTypeOne-animate' : ''}
							key={index}
						></div>
					))}
				</div>
			</div>
		)
	}
}
polyfill(CitationTypeOne);
export default CitationTypeOne;
