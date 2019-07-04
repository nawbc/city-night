import React from 'react'
import { Col, ColProps } from 'react-flexbox-grid';
import { polyfill } from 'react-lifecycles-compat';
import { JSXProps, handleSize } from '../../utils/handleJSXProps';
import { JSXPropsInterface } from '../../interfaces/common.interface';
import { SizeType } from '../../interfaces/customTypes';
import { typeReplace } from '../../utils/muguetDash';

const customColAttrs = ['size', 'children'];

/**
 * @see react-flexbox-grid
 * {@link  https://www.npmjs.com/package/react-flexbox-grid}
 */

interface MuguetColProps extends ColProps {
	size?: SizeType;
}

class MuguetCol extends React.Component<MuguetColProps, any> {

	handleExtraProps = (): JSXPropsInterface<MuguetColProps> => {
		const colProps = JSXProps<MuguetColProps>(this.props, customColAttrs);
		const { customProps } = colProps;
		customProps.size = handleSize(customProps.size as SizeType);
		return colProps;
	}

	render() {
		const { nativeProps, customProps } = this.handleExtraProps();
		const mergeStyle = {
			...typeReplace(customProps.size as SizeType, 'Object', {}),
			...typeReplace(customProps.style as Object, 'Object', {})
		}
		return (
			<Col
				{...nativeProps}
				style={mergeStyle}
			>{customProps.children}</Col>
		)
	}
}
polyfill(MuguetCol);
export default MuguetCol





