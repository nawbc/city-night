import React, { Component } from 'react';
import articleRouter from './routes/articleRouter';
import { Route } from 'react-router-dom';

class ArticleContent extends Component<any>{
	componentDidMount() {
		// tslint:disable-next-line: prefer-const
		let aContent = this.refs['articleContent'] as HTMLElement;
		aContent.style.height = window.innerHeight - 60 + 'px';
	}

	render() {

		return (
			<div
				ref='articleContent'
			>
				{articleRouter.map((ele, index) => {
					return (
						<Route
							key={index}
							{...ele as any}
						/>
					)
				})}
			</div>
		)
	}
}

export default ArticleContent;
