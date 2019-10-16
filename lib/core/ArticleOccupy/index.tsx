import React, { HTMLAttributes } from 'react';
import Letter from './Letter';
import News from './News';
import { Circle, Sliver, Square, Rectangle } from './components';
import './style/articleOccupy.scss';

export const prefix = 's-occupy-article';

export const commonPrefix = 's-occupy-component';

export default class ArticleOccupy extends React.PureComponent<HTMLAttributes<HTMLDivElement>> {
	static Letter: typeof Letter = Letter;
	static News: typeof News = News;
	static Circle: typeof Circle = Circle;
	static Sliver: typeof Sliver = Sliver;
	static Square: typeof Square = Square;
	static Rectangle: typeof Rectangle = Rectangle;

	render() {
		return <News {...this.props} />;
	}
}
