/**=================================================================================================
 *			LICENSE --- Apache-2.0
 *			LASTMODIFY --- 2019-10-09T13:59:54.538Z
 *			REPOSITORY --- https://github.com/sewerganger/silent-concept
 *=================================================================================================*/

import React, { HTMLAttributes, FC, ReactNode } from 'react';
import { SilentCommonAttr, ClassValue } from '../../interfaces';
import { accordType, splitJsxProps, handleSize } from '../../helper';
import classNames from 'classnames';
import { Circle, Rectangle, Sliver } from './components';
import Flex from '../Layout/Flex';

const prefix = 's-occupy-card';

const CardAttrs = ['style', 'className', 'size', 'effect', 'fillet', 'capital'];

const { Vertical } = Flex;

interface CardTempProps extends SilentCommonAttr, HTMLAttributes<HTMLDivElement> {
	className?: any;
	fillet?: boolean;
	capital?: ReactNode;
}

interface CardProps extends CardTempProps {
	className?: ClassValue;
}

const presetProps = function(props: CardProps) {
	const sProps = splitJsxProps<CardProps>(props, CardAttrs);
	sProps.customProps.size = handleSize(sProps.customProps.size!);
	return sProps;
};

/**=================================================================================================
 *			LASTMODIFY --- 2019-10-09T13:59:33.841Z
 *			DESCRIPTION --- Card
 *			PROPS
 *				--- size [SizeType]
 *   =================================================================================================*/

const Card: FC<CardProps> = function(props) {
	const { nativeProps, customProps } = presetProps(props);

	const { size, style, className, effect, fillet, capital } = customProps;
	const containerStyle = {
		...accordType(size, 'Object', {}),
		...style
	};

	return (
		<div
			{...nativeProps}
			className={classNames(prefix, className, { [`${prefix}-effect`]: effect })}
			style={containerStyle}
		>
			<Vertical style={{ minHeight: '235px' }} between>
				<Rectangle size="largest" effect={effect} fillet={fillet}>
					{capital}
				</Rectangle>

				<Flex style={{ width: '100%' }}>
					<Vertical style={{ width: '100%', marginRight: '20px' }} center={false} between start>
						<Sliver size={['30%']} fillet={fillet} effect={effect} />
						<Sliver size={['60%']} fillet={fillet} effect={effect} />
						<Sliver fillet={fillet} effect={effect} />
					</Vertical>
					<Vertical>
						<Circle size={[50, 50]} effect={effect} style={{ marginBottom: '10px' }} />
						<Circle size={[30, 30]} effect={effect} />
					</Vertical>
				</Flex>
			</Vertical>
		</div>
	);
};

Card.defaultProps = {
	effect: false
};

export default React.memo(Card);
