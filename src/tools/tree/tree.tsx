import React from "react";
import { polyfill } from 'react-lifecycles-compat';
import { typeReplace } from '../../utils/muguetDash';
import './style/citationTypeOne.css';

class CitationTypeOne extends React.Component<any>{
	render(){
		const mergeStyle = {
			...typeReplace(this.props.size as Object, 'Object', {}),
			...typeReplace(this.props.style as Object, 'Object', {})
		}
		return (
			<div
				style={mergeStyle}
			>
				<div
					{...this.props}
					className='citationTypeOne'
				>
					{Array(5).fill('').map((ele, index)=>(
						<div
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
