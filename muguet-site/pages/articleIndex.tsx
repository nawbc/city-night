import React, { Component } from 'react';
import './style/articleIndex.scss';
import * as ArticleList from './articleList.json';
import { ScrollBox } from '../../src/exports';
import { NavLink } from 'react-router-dom';


export default class ArticleIndex extends Component<any>{
	private listContent;

	constructor(props) {
		super(props);
		this.listContent = Object.entries(Object.values(ArticleList)[0])
	}

	componentDidMount() {
		if (!this.props.mobile) {
			const el = this.refs['scrollSide'] as HTMLElement;
			el.style.height = window.innerHeight - 60 + 'px';
		}
	}

	render() {
		let block = (
			<React.Fragment>
				{
					this.listContent.map((ele, index) => {
						return (
							<ul
								key={index}
								className='typeWrapper'
								onClick={this.props.onShow}
							>
								{
									index === 0 || index === 1 || index === 2 ?
										<NavLink to={'/muguet-site/' + ele[0].split(/\s/g)[0].toLowerCase()} >
											<div className='articleTitle' style={{ paddingTop: '10px', fontSize: '17px' }}>{ele[0]}</div>
										</NavLink> :
										<div className='articleTitle'>{ele[0]}</div>
								}
								{ele[1].map((el, i) => {
									return (
										<li
											key={i}
										>
											<NavLink
												to={'/muguet-site/doc/' + el.split(/\s/g)[0].toLowerCase()}
											>
												{el}
											</NavLink>
										</li>
									)
								})}
							</ul>
						)
					})
				}
			</React.Fragment>
		)
		return (
			<div
				ref="scrollSide"
				className={`scrollSide ${this.props.indexDisplay ? 'index_show' : ''}`}
				style={{ width: '100%' }}
			>
				{
					this.props.mobile ?
						<div>{block}</div> :
						<ScrollBox
							hover
						>{block}</ScrollBox>
				}
			</div>
		)
	}
}
