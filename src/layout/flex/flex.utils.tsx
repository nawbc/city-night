import React from 'react';
import { CommonInterface, JSXPropsInterface } from '../../interfaces/common.interface';
import { handleSize, JSXProps } from '../../utils/handleJSXProps';
import classNames from 'classnames';
import { typeReplace } from '../../utils/muguetDash';
import { SizeType } from '../../interfaces/customTypes';
import './style/flex.css';


const customFlexAttrs = [
    'size',
    'children',
		'style',
		'className'
]

interface FlexProps extends CommonInterface{}

export class Template extends React.PureComponent<FlexProps, any>{
    protected type: string;

    handleExtraProps = (): JSXPropsInterface<FlexProps> => {
		const iconProps = JSXProps<FlexProps>(this.props, customFlexAttrs);
		const { customProps } = iconProps;
		customProps.size = handleSize(customProps.size as SizeType);
		return iconProps;
	}

    render() {
        const { nativeProps,  customProps } = this.handleExtraProps();
        const { className, children } = customProps;
        const mergeStyle = {
			...typeReplace(customProps.size as SizeType, 'Object', {}),
			...typeReplace(customProps.style as Object, 'Object', {})
		}
        return (
            <div
                {...nativeProps}
                className={classNames({
                    [`${className}`]: className,
                    [`m-flex-layout-${this.type}`]: true,
                })}
                style={mergeStyle}
            >{ children }</div>
        )
    }
}

/**
 *
 * @description 只适用于 子元素需要等高 , 均匀分布布局
 * 使用 align-items: center; justify-content: space-around;
 *
 */
export class Avg extends Template{
    protected type = 'avg';
}
/**
 * @description 竖直方向 space-around
 *
 */
export class Vert extends Avg {
    protected type='vert';
}

