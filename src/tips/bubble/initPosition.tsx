// too stupid need to be optimised later        ---optimization
import computedStyle from 'computed-style';

export const handleInitPosition = (props) => {
	const { place, bubble, container } = props;
	const animationDistance: number = 4;
	const childElement = bubble.nextElementSibling;
	const { mLeft, mRight, mTop, mBottom } = {
		mLeft: computedStyle(childElement, 'margin-left'),
		mRight: computedStyle(childElement, 'margin-right'),
		mTop: computedStyle(childElement, 'margin-top'),
		mBottom: computedStyle(childElement, 'margin-bottom')
	}

	let originHorz, originVert;

	function top() {
		originHorz = container['offsetWidth'] - childElement['offsetWidth'] / 2 - parseInt(mRight!) - bubble['offsetWidth'] / 2;
		originVert = - bubble['offsetHeight'] + animationDistance;
	}

	function bottom() {
		originHorz = container['offsetWidth'] - childElement['offsetWidth'] / 2 - parseInt(mRight!) - bubble['offsetWidth'] / 2;
		originVert = childElement['offsetHeight'] - animationDistance;
	}

	function left() {
		originHorz = -bubble['offsetWidth'] + animationDistance + parseInt(mLeft!);
		originVert = 0;
	}

	function right() {
		originHorz = childElement['offsetWidth'] + animationDistance;
		originVert = 0;
	}

	if ('top' === place[0]) {
		top();
	}
	if ('bottom' === place[0]) {
		bottom();
	}
	if ('left' === place[0]) {
		left();
	}
	if ('right' === place[0]) {
		right();
	}
	bubble.style.top = `${originVert}px`;
	bubble.style.left = `${originHorz}px`;

	return {
		who: bubble,
		child: childElement,
	}
}
