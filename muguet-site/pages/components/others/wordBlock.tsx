import React from 'react'



class P extends React.Component<any>{

	render() {
		return (
			<p
				style={{ color: '#314659' }}>
				{this.props.children}
			</p>
		)
	}
}

export class WordBlock extends React.Component<any>{
	static p = P;
	static defaultProps = {
		words: []
	}

	render() {
		return (
			<div>
				<ul
					style={{ color: '#314659' }}
				>
					{
						this.props.words!.map((word, index) => (
							<li
								key={index}
								style={{marginBottom: '7px'}}
							>{word}</li>
						))
					}
				</ul>
			</div>
		)
	}
}

