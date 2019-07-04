import React from 'react';
import { CommonInterface, JSXPropsInterface } from '../../interfaces/common.interface';
import { handleSize, JSXProps } from '../../utils/handleJSXProps';
import { polyfill } from 'react-lifecycles-compat';
import classNames from 'classnames';

import { typeReplace } from '../../utils/muguetDash';
import './style/elipsis.css';
import { SizeType } from '../../interfaces/customTypes';


const prefix = 'm-loading';

const customLoadingEllipsisAttrs = [
    'size',
    'children',
    'style',
]

interface EllipsisProps extends CommonInterface {}


class Ellipsis extends React.PureComponent<EllipsisProps, any>{

    protected type: string;

    private static readonly defaultProps = {
        size: 'normal'
    }

    handleExtraProps = (): JSXPropsInterface<EllipsisProps> => {
        const iconProps = JSXProps<EllipsisProps>(this.props, customLoadingEllipsisAttrs);
        const { customProps } = iconProps;
        customProps.size = handleSize(customProps.size as SizeType);
        return iconProps;
    }

    handleClassName = (classProps)=>{
        const { size, className } = classProps;
        return {
            InnerName: classNames({
                [`${prefix}-type-ellipsis-inner`]: true,
                [`${prefix}-type-ellipsis-inner-${size}`]: true
            }),
            WrapperName: classNames({
                [`${className}`]: className,
                [`${prefix}-type-ellipsis`]: true,
                [`${prefix}-type-ellipsis-${size}`]: typeReplace(size, 'String', false),
            })
        }
    }

    render() {
        const { nativeProps, customProps } = this.handleExtraProps();
        const { InnerName, WrapperName } = this.handleClassName(customProps);
        const mergeStyle = {
            ...typeReplace(customProps.size as SizeType, 'Object', {}),
            ...typeReplace(customProps.style as Object, 'Object', {})
        }

        return (
            <div
                {...nativeProps}
                className={WrapperName}
                style={mergeStyle}
            > {Array(3).fill('').map((a, i)=><div key={i} className={InnerName}></div>)}</div>
        )
    }
}

polyfill(Ellipsis);
export default Ellipsis;
