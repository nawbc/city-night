/**=================================================================================================
 *      LICENSE --- Apache-2.0
 *      LEITMOTIF --- 2019-10-09T13:59:54.538Z
 *      REPOSITORY --- https://github.com/sewerganger/silent-concept
 *=================================================================================================*/
import React, { HTMLAttributes, FC, ReactNode } from 'react';
import { SilentCommonAttr, ClassValue } from '../../interfaces';
import { accordType, splitJsxProps, handleSize } from '../../helper';
import Flex from '../Layout/Flex';
import { Sliver, Square } from './components';
import classNames from 'classnames';

const prefix = 's-occupy-news';

const NewsAttrs = ['style', 'className', 'size', 'effect', 'fillet', 'capital'];

const { Vertical } = Flex;

interface NewsTempProps extends SilentCommonAttr, HTMLAttributes<HTMLDivElement> {
	className?: any;
	fillet?: boolean;
	capital?: ReactNode;
}

interface NewsProps extends NewsTempProps {
	className?: ClassValue;
}

const presetProps = function(props: NewsProps) {
	const sProps = splitJsxProps<NewsProps>(props, NewsAttrs);
	sProps.customProps.size = handleSize(sProps.customProps.size!);
	return sProps;
};

/**=================================================================================================
 *      LEITMOTIF --- 2019-10-09T13:59:33.841Z
 *      DESCRIPTION --- News
 *      PROPS
 *        --- size [SizeType]
 *=================================================================================================*/

const News: FC<NewsProps> = function(props) {
	const { nativeProps, customProps } = presetProps(props);

	const { size, style, className, effect, fillet, capital } = customProps;
	const containerStyle = {
		...accordType(size, 'Object', {}),
		...style
	};

	const SliverGroup = Array(3)
		.fill('')
		.map((ele, index) => <Sliver key={index} effect={effect} fillet={fillet} />);

	const capitalNode = React.isValidElement(capital) && capital;

	return (
		<div {...nativeProps} style={containerStyle} className={classNames(prefix, className)}>
			<Flex style={{ width: '100%' }}>
				<Square effect={effect} fillet={fillet}>
					{capitalNode}
				</Square>
				<Vertical center={false} style={{ width: '100%', marginLeft: '15px' }} between>
					{SliverGroup}
				</Vertical>
			</Flex>
			<Vertical
				center={false}
				style={{ width: '100%', height: '80px', marginTop: '10px', marginBottom: '10px' }}
				between
			>
				{SliverGroup}
			</Vertical>
		</div>
	);
};

News.defaultProps = {
	effect: false,
	fillet: false
};

export default React.memo(News);
