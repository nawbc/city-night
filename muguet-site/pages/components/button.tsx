import React, { Component } from 'react';
import { Avatar, Button, ScrollBox, message, Input, DragBox, GradientsBar, Flex, Icon, Bubble, Red, Citation } from '../../../src/exports';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Light from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-light';
import PDF from './example/pdfView';
import '../style/code.scss';
export default class ButtonPage extends Component<any, any>{
	temp: any;
	avatar: any;

	constructor(props) {
		super(props);
	}

	componentDidMount() {

	}

	render() {
		// const codeString = '(num) => num + 1; function demo(){console.log(111)}';
		return (
			<ScrollBox>
				<div style={{
					width: '400px',
					height: '400px',
				}}>
					<Citation
						src={import('./example/pdfView')}
					/>
				</div>
			</ScrollBox>
		)
	}
}
