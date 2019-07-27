import React,{ Component } from 'react';
import { Button, DragBox, Row, Col, ScrollBox, Select, Icon, Citation } from '../../../src/exports';
import View from './example/pdfView';

export default class ButtonPage extends Component<any>{

	render(){

		return (
			<ScrollBox>
				<Citation
					size={[200, 300]}
					src={import('./bubble')}
				></Citation>
			</ScrollBox>
		)
	}
}
