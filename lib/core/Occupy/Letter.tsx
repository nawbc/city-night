/**=================================================================================================
 *			LICENSE --- Apache-2.0
 *			LASTMODIFY --- 2019-10-09T13:59:54.538Z
 *			REPOSITORY --- https://github.com/sewerganger/silent-concept
 *=================================================================================================*/
import React, { HTMLAttributes, FC } from 'react';
import { SilentCommonAttr, ClassValue } from '../../interfaces';
import { accordType, splitJsxProps, handleSize } from '../../helper';
import Flex from '../Layout/Flex';
import classNames from 'classnames';
import { Sliver } from './components';

const prefix = 's-occupy-letter';

const { Vertical } = Flex;

interface LetterTempProps extends SilentCommonAttr, HTMLAttributes<HTMLDivElement> {
	className?: any;
	fillet?: boolean;
}

interface LetterProps extends LetterTempProps {
	className?: ClassValue;
}

const presetProps = function(props: LetterProps) {
	const sProps = splitJsxProps<LetterProps>(props, [
		'style',
		'className',
		'size',
		'effect',
		'fillet'
	]);
	sProps.customProps.size = handleSize(sProps.customProps.size!);
	return sProps;
};

/**=================================================================================================
 *			LASTMODIFY --- 2019-10-09T13:59:33.841Z
 *			DESCRIPTION --- Letter
 *			PROPS
 *				--- size [SizeType]
 *   =================================================================================================*/

const Letter: FC<LetterProps> = function(props) {
	const { nativeProps, customProps } = presetProps(props);

	const { size, style, className, effect, fillet } = customProps;
	const containerStyle = {
		...accordType(size, 'Object', {}),
		...style
	};

	const SliverGroup = Array(6)
		.fill('')
		.map((ele, index) =>
			index === 0 ? (
				<Sliver fillet={fillet} effect={effect} style={{ width: '50%' }} key={index} />
			) : (
				<Sliver fillet={fillet} effect={effect} key={index} />
			)
		);

	return (
		<div {...nativeProps} className={classNames(prefix, className)} style={containerStyle}>
			<Vertical
				center={false}
				start
				style={{ width: '100%', minHeight: '184px', marginBottom: '10px' }}
				around
			>
				{SliverGroup}
			</Vertical>
		</div>
	);
};

Letter.defaultProps = {
	effect: false,
	fillet: false
};

export default React.memo(Letter);
