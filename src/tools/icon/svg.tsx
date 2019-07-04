import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import { typeReplace } from '../../utils/muguetDash';
import { handleSize } from '../../utils/handleJSXProps';
import { CommonInterface } from '../../interfaces/common.interface';

interface SVGProps extends CommonInterface {
	src?: string;
}

/**
 * this is a svg module, using background url to load svg;
 * @module SVG
 * @example
 * <SVG
 *      src={require('../asset/demo.svg')}
 *      style={{width: '100px'}}
 *      size={[100, 100]}
 * ></SVG>
 *
 */

class SVG extends React.Component<SVGProps, any> {

	render() {
		const { src, children, style, size, className } = this.props;

		const mergeStyle = {
			...typeReplace(handleSize(size!) as Object, 'Object', {}),
			...typeReplace(style as Object, 'Object', {}),
			...typeReplace(src as Object, 'Undefined', {
				backgroundImage: `url(${this.props.src})`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			})
		}

		return (
			<div
				className={className}
				style={mergeStyle}
			>{children}</div>
		)
	}
}
polyfill(SVG);
export default SVG;
