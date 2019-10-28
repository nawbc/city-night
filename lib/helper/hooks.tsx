import MutationObserver from 'resize-observer-polyfill';
import { useRef, useState, useEffect } from 'react';

export const useResize = function() {
	const ref = useRef();
	const [bounds, setBounds] = useState({
		bottom: 0,
		height: 0,
		left: 0,
		right: 0,
		top: 0,
		width: 0,
		x: 0,
		y: 0
	});
	const ob = new MutationObserver(([entry]) => setBounds(entry.contentRect));
	useEffect(() => {
		ob.observe((ref.current as unknown) as HTMLElement);
		return () => {
			ob.disconnect();
		};
		/* eslint-disable */
	}, []);
	return [ref, bounds];
};
