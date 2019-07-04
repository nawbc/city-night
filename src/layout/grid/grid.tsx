import React from 'react'
import { Grid, GridProps } from 'react-flexbox-grid';
import { polyfill } from 'react-lifecycles-compat';
import { JSXProps, handleSize } from '../../utils/handleJSXProps';
import { JSXPropsInterface } from '../../interfaces/common.interface';
import { SizeType } from '../../interfaces/customTypes';
import { typeReplace } from '../../utils/muguetDash';


const customGridAttrs = ['size', 'children'];

/**
 * @see react-flexbox-grid
 * {@link  https://www.npmjs.com/package/react-flexbox-grid}
 */

interface MuguetGridProps extends GridProps {
	size?: SizeType;
}

class MuguetRow extends React.Component<MuguetGridProps, any> {

	handleExtraProps = (): JSXPropsInterface<MuguetGridProps> => {
		const gridProps = JSXProps<MuguetGridProps>(this.props, customGridAttrs);
		const { customProps } = gridProps;
		customProps.size = handleSize(customProps.size as SizeType);
		return gridProps;
	}

	render() {
		const { nativeProps, customProps } = this.handleExtraProps();
		const mergeStyle = {
			...typeReplace(customProps.size as SizeType, 'Object', {}),
			...typeReplace(customProps.style as Object, 'Object', {})
		}
		return (
			<Grid
				{...nativeProps}
				style={mergeStyle}
			>{customProps.children}</Grid>
		)
	}
}
polyfill(MuguetRow);
export default MuguetRow;







