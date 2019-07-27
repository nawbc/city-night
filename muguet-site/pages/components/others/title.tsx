import React, { Component } from 'react';
import '../../style/title.scss';

export default class Title extends Component<any>{
	static defaultProps = {
		level: 1
	}
	render() {
		let whichSizeTitle;
		switch (this.props.level) {
			case 1: whichSizeTitle = (
				<div
					id={this.props.href}
				>
					<h1
						className='titleH'
					>{this.props.content[0]}</h1>
					<span>{this.props.content[1]}</span>
					<a href={"#" + this.props.href}>#</a>
				</div>
			); break;
			case 2: whichSizeTitle = (
				<div
					id={this.props.href}
				>
					<h2
						className='titleH'
					>{this.props.content[0]}</h2>
					<span>{this.props.content[1]}</span>
					<a href={"#" + this.props.href}>#</a>
				</div>
			); break;
			case 3: whichSizeTitle = (
				<div
					id={this.props.href}
				>
					<h3
						className='titleH'
					>{this.props.content[0]}</h3>
					<span>{this.props.content[1]}</span>
					<a href={"#" + this.props.href}>#</a>
				</div>
			); break;
			case 4: whichSizeTitle = (
				<div
					id={this.props.href}
				>
					<h4
						className='titleH'
					>{this.props.content[0]}</h4>
					<span>{this.props.content[1]}</span>
					<a href={"#" + this.props.href}>#</a>
				</div>
			); break;
			case 5: whichSizeTitle = (
				<div
					id={this.props.href}
				>
					<h5
						className='titleH'
					>{this.props.content[0]}</h5>
					<span>{this.props.content[1]}</span>
					<a href={"#" + this.props.href}>#</a>
				</div>
			); break;
		}

		return (
			<div
				style={this.props.style}
				className='titleWrapper'
			>
				{whichSizeTitle}
			</div>
		)
	}
}
