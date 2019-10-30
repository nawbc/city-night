import React, { FC, ReactElement } from 'react';
import { is } from '../../../helper';

interface MapProps {
	data?: Record<string, any>;
	repeatCount?: number;
	children?: ReactElement | ((data) => ReactElement);
}

const Map: FC<MapProps> = function(props) {
	const { children, repeatCount, data } = props;
	let mapElement = null as any;
	const mapEleArray = [];

	if (is.number(repeatCount) && data === void 0) {
		for (let i = 0; i < repeatCount; i++) {
			mapEleArray.push(React.cloneElement(children as any, { key: i }) as never);
			mapElement = mapEleArray;
		}
	} else if (repeatCount === void 0 && is.function(children)) {
		let tmpCounter = 0;
		for (const prop in data) {
			tmpCounter++;
			const clonedElement = React.cloneElement(children(data[prop]), { key: tmpCounter });
			mapEleArray.push(clonedElement as never);
			mapElement = mapEleArray;
		}
	}
	return <>{mapElement}</>;
};

export default Map;
