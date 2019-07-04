import React, { Component } from 'react';
import { ScrollBox, Citation, Loading, Avatar, Icon, Red, Bubble, Button, Flex, Menu, Fold } from '../../../components/exports';
import '../style/introduce.scss';

const headlines = ['list1', 'list2', 'list3'];

export default class Introduce extends Component<any>{
	attach: React.RefObject<any>;
	constructor(props) {
		super(props);
		this.attach = React.createRef()
	}

	state = {
		contextmenu: false
	}

	render() {

		return (
			<div>
				<div
					style={{
						backgroundSize: 'cover',
						backgroundImage: `url(${require('../../../assets/mails.svg')})`,
						width: '25px',
						height: '25px'
					}}
				></div>

				{/* <Fold
					size={['100%']}
				>
					<Fold.Panel
						defaultIcon={require('../../assets/logo/muguet.svg')}
						headline="wanghan"
						last
					>
						wanghan
					</Fold.Panel>
				</Fold> */}
				{/* <Menu.context></Menu.context> */}
			</div>
		)
	}
}
