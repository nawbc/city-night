```
 <Muguet>
    <GradientsBar
        // alertType='danger'
        // display={true}
        gradients='DeepBlue'
        size={[100,100]}
    >
        <Button
            onClick={()=>{
                this.setState({
                    display: !this.state.display
                })
            }}
        ></Button>
    </GradientsBar>
</Muguet>
```