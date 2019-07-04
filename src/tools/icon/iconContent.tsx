import React from 'react';
import { isObject } from '../../utils/muguetDash';
import { prefix } from './icon';
import SVG from './svg';

// ExpReg
export const isSvgExpReg = /\.svg$/gi;

export default function (props) {
	const isSvg = isSvgExpReg.test(props.src);
	return (
		isObject(props.src) ?
			props.src :
			isSvg ?
				<SVG
					src={props.src}
					className={`${prefix}-child-svg`}
				></SVG> :
				<div
					className={`${prefix}-child-image`}
					style={{ backgroundImage: `url(${props.src})` }}
				></div>
	)
}
