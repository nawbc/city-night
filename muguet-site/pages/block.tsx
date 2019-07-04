import React,{ Component } from 'react';
import { Row, Col } from '../../components/exports';

export default class Block extends Component<any>{

	render(){
		return (
			<div>
				<Row>
					<Col xs={5}>
						<div
							style={{
								borderLeft: '1px dotted #000'
							}}
						>dsadsadas</div>
					</Col>
					<Col xs>
							dsadasdsa
					</Col>
				</Row>
			</div>
		)
	}
}
