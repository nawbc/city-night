import React from 'react';
import './style/index.scss';

const EffectMask = function (props) {
	return (
		<div
			className='mask'
		>
			{props.children}
		</div>
	);
};

export default EffectMask;

