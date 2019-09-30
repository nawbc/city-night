height:   `0px` |  `auto`

transitionDuration: number

transitionTimingFunction: 'linear' ....

1.0.6: fix init render will auto spread

```javascript

let foldTimer;

function Demo(){
	const [isFold, setIsFold] = useState(true);
	return (
		<>
			<AutoHeight
				transitionDuration={2000}
				transitionFunc={'ease'}
				height={isFold ? '0px', 'auto'}
				ref={autoHeightDivRef}
			>
				{children}
			</AutoHeight>
		</>
	)
}

```
