import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import React from 'react';

export default class Code extends React.Component<any>{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div style={{fontSize: '16px'}}>
				<SyntaxHighlighter
					language='jsx'
					customStyle={{
						background: '#fff'
					}}
				>{this.props.children}</SyntaxHighlighter>
			</div>
		)
	}
}
