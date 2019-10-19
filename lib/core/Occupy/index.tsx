import React, { HTMLAttributes } from 'react';
import Letter from './Letter';
import Admin from './Admin';
import News from './News';
import Card from './Card';
import { Circle, Sliver, Square, Rectangle } from './components';

export const prefix = 's-occupy';

export const commonPrefix = 's-occupy-component';

export default class Occupy extends React.PureComponent<HTMLAttributes<HTMLDivElement>> {
	static Letter: typeof Letter = Letter;
	static News: typeof News = News;
	static Admin: typeof Admin = Admin;
	static Card: typeof Card = Card;
	static Circle: typeof Circle = Circle;
	static Sliver: typeof Sliver = Sliver;
	static Square: typeof Square = Square;
	static Rectangle: typeof Rectangle = Rectangle;

	render() {
		return <News {...this.props} />;
	}
}
