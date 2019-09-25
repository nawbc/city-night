height:  `mutation` | `0px` |  `auto`

**adding `mutation` is to make `AutoHeight` can dynamic resize**

transitionDuration: number

transitionTimingFunction: 'linear' ....

```javascript

let foldTimer;

function Demo(){
	const [isFold, setIsFold] = useState(true);
	return (
		<>
			<button
				onClick={(e) => {
					e.stopPropagation();
					clearTimeout(foldTimer);

					if (isFold) {
						setFold('mutation');
						foldTimer = setTimeout(() => { setFold('auto'); }, 500);
					} else {
						if (fold === 'auto') {
							setFold('mutation');
							foldTimer = setTimeout(() => { setFold('0px'); }, 17);
						}
					}
				}
			></button>

			<AutoHeight
				transitionDuration={duration as any}
				transitionFunc={'ease'}
				height={fold}
				ref={autoHeightDivRef}
			>
				{children}
			</AutoHeight>
		</>
	)
}

```
