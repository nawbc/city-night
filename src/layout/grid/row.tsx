import React from 'react'
import { Row, RowProps } from 'react-flexbox-grid';
import { polyfill } from 'react-lifecycles-compat';
import { JSXProps, handleSize } from '../../utils/handleJSXProps';
import { JSXPropsInterface } from '../../interfaces/common.interface';
import { SizeType } from '../../interfaces/customTypes';
import { typeReplace } from '../../utils/muguetDash';


const customRowAttrs = ['size', 'children'];

/**
 * @see react-flexbox-grid
 * {@link  https://www.npmjs.com/package/react-flexbox-grid}
 */

interface MuguetRowProps extends RowProps {
	size?: SizeType;
}

class MuguetRow extends React.Component<MuguetRowProps, any> {

	handleExtraProps = (): JSXPropsInterface<MuguetRowProps> => {
		const rowProps = JSXProps<MuguetRowProps>(this.props, customRowAttrs);
		const { customProps } = rowProps;
		customProps.size = handleSize(customProps.size as SizeType);
		return rowProps;
	}

	render() {
		const { nativeProps, customProps } = this.handleExtraProps();
		const mergeStyle = {
			...typeReplace(customProps.size as SizeType, 'Object', {}),
			...typeReplace(customProps.style as Object, 'Object', {})
		}

		return (
			<Row
				{...nativeProps}
				style={mergeStyle}
			>{customProps.children}</Row>
		)
	}
}
polyfill(MuguetRow);
export default MuguetRow;







