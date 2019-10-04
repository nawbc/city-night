height:   `0px` |  `auto`

transitionDuration: number

transitionTimingFunction: 'linear' ....

1.0.6: fix init render will auto spread

```javascript

const { HeightZeroToAuto } = 'height-zero2auto';

function Demo(){
	const [isFold, setIsFold] = useState(true);
	return (
		<>
			<button
				onClick={()=>{
					setIsFold(!isFold);
				}}
			>FOLD</button>
			<div
			 style={{
				 border: '1px solid #000'
			 }}
			>
				<HeightZeroToAuto
					transitionDuration={400}
					transitionFunc={'ease'}
					height={isFold ? '0px': 'auto'}
				>
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
				</HeightZeroToAuto>
			</div>
		</>
	)
}

```
