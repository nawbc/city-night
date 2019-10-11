import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import Letter from './Letter';
// import moduleName from './circle';

const prefix = 's-articleOccupy';

export default class ArticleOccupy extends React.PureComponent<HTMLAttributes<HTMLDivElement>> {
	static Letter: typeof Letter = Letter;
	// static Sliver: typeof Sliver = Sliver;
	// static Sliver: typeof Sliver = Sliver;

	render() {
		return <div className={classNames(prefix, this.props.className)}>{this.props.children}</div>;
	}
}
