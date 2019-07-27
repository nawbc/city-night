import React, { Component } from 'react';
import { Flex } from '../../../../src/exports';

export default class DefaultFoot extends Component<any>{

	render() {
		return (
			<div
				style={{
					width: '100%',
					height: '150px',
					marginTop: '100px',
					position: 'relative',
					paddingTop: '30px'
				}}
			>
				<Flex.Avg
					size={['90%', '100%']}
				>
					<Flex.Vert
						size={[300]}
					>
						<span
							style={{ fontSize: '16px', color: '#979797' }}
						>
							Muguet-ui 遵循MIT 协议
						</span>
						<br />
						<span
							style={{ color: '#979797' }}
						>
							Copyright © 2019 Han Wang
						</span>
						<br />
						<span
							style={{ fontSize: '13px', color: '#979797' }}
						>
							网站由 Muguet-ui 强力驱动
						</span>
					</Flex.Vert>
				</Flex.Avg>
			</div>
		)
	}
}
