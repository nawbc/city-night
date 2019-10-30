import MutationObserver from 'resize-observer-polyfill';
import { useRef, useState, useEffect, RefObject } from 'react';

const initRect = {
	bottom: 0,
	height: 0,
	left: 0,
	right: 0,
	top: 0,
	width: 0,
	x: 0,
	y: 0
};

export const useResize = function(init = initRect): [RefObject<any>, typeof initRect] {
	const ref = useRef();
	const [bounds, setBounds] = useState(init);

	const ob = new MutationObserver(([entry]) => setBounds(entry.contentRect));

	useEffect(() => {
		ob.observe((ref.current as unknown) as HTMLElement);
		return () => {
			ob.disconnect();
		};
		/* eslint-disable react-hooks/exhaustive-deps */
	}, []);
	return [ref, bounds];
};
