import React, { HTMLAttributes } from 'react';
import Letter from './Letter';
import News from './News';
import Admin from './Admin';
import { Circle, Sliver, Square, Rectangle } from './components';

export const prefix = 's-occupy';

export const commonPrefix = 's-occupy-component';

export default class Occupy extends React.PureComponent<HTMLAttributes<HTMLDivElement>> {
	static Letter: typeof Letter = Letter;
	static News: typeof News = News;
	static Admin: typeof Admin = Admin;
	static Circle: typeof Circle = Circle;
	static Sliver: typeof Sliver = Sliver;
	static Square: typeof Square = Square;
	static Rectangle: typeof Rectangle = Rectangle;

	render() {
		return <News {...this.props} />;
	}
}
