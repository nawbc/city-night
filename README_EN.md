<h1 align="center">Muguet is a React UI component library with a gradient theme</h1>

![react](https://img.shields.io/badge/powered-react-blue.svg)
![build](https://img.shields.io/badge/build-passing-green.svg)
![liense](https://img.shields.io/badge/license-MIT-yellowgreen.svg)
![lang](https://img.shields.io/badge/lang-typescript-blue.svg)

<div align="center">

![logo](https://raw.githubusercontent.com/sewerganger/Muguet-ui/master/site/assets/logo/muguet256.gif)

</div>

[chinese](https://github.com/sewerganger/Muguet-ui/blob/master/README.md)

```
😱Progress: Desperately developing! Document website under development

🍖version： 0.1.0.0-alpha2

🥪license: MIT

😝Author: HanWang

🥤Mailbox: wanghan9423@outlook.com
```

### 一. introduce

- Design

Muguet is a React UI component library with a gradient theme
<br>
It provides a great deal of gradient.
<br>
![split](https://raw.githubusercontent.com/sewerganger/Muguet-ui/master/doc/images/gradients.gif)
The right angle design is used, and of course the rounded corner interface is provided. Through reasonable collocation, the components will be beautiful to Cry.😭
<br>
![split](https://raw.githubusercontent.com/sewerganger/Muguet-ui/master/doc/images/button.jpg)

- performance

No less than antdesgin (left antd right muguet)

### 2. Modules (only some of the functions are shown here, For details, please wait for the document to be published.)

1.layout

`<Flex></Flex>`

- <Flex.vert></Flex.vert>
  <br>
- <Flex.avg></Flex.avg>

<br>

`<DragBox></DragBox>`

![split](https://raw.githubusercontent.com/sewerganger/Muguet-ui/master/doc/images/drag-ghost.gif)

- ghost

```
<ScrollBox>
	<DragBox
		size={[200,200]}
		style={{
			background: 'green',
			opacity: 0.6
		}}
	>
		<div
			style={{lineHeight: '200px'}}
		>This can be draged anywhere</div>
	</DragBox>
</ScrollBox>
```

![split](https://raw.githubusercontent.com/sewerganger/Muguet-ui/master/doc/images/drag-split1.gif)
![split](https://raw.githubusercontent.com/sewerganger/Muguet-ui/master/doc/images/drag-split.gif)

- split

```
<DragBox
	type='split'
	size={[300,300]}>
	<DragBox
		type='split'
		size={['100%','100%']}
		style={{background: 'yellow',opacity: 0.6}}
		padding
	>
		<div>content console.timeEnd(object); console.timeEnd(object);</div>
		<div>content console.timeEnd(object); console.timeEnd(object);</div>
	</DragBox>
	<DragBox
		type='split'
		size={['100%','100%']}
		style={{background: 'green',opacity: 0.6}}
		direction='horizontal'
		padding
	>
		<div>content console.timeEnd(object); console.timeEnd(object);</div>
		<div>content console.timeEnd(object); console.timeEnd(object);</div>
	</DragBox>
</DragBox>
```

![split](https://raw.githubusercontent.com/sewerganger/Muguet-ui/master/doc/images/drag-upload.gif)

```
<DragBox
	type='upload'
	size={[200,200]}
	onDraged={(file, ele)=>{
		console.log(file, ele)
	}}
>
	<Icon
		src={require('../../assets/upload.svg')}
		size={['60%','60%']}
	></Icon>
	<span>upload native file</span>
</DragBox>
```

<br>

2.tips

`<Bubble></Bubble>`

![split](https://raw.githubusercontent.com/sewerganger/Muguet-ui/master/doc/images/bubble.gif)

```
<Flex.avg size={[500, 500]}>
	<Bubble
		content={this.state.value}
		duration={50000}
		icon={require('../../../assets/mails.svg')}
	>
		<Input
			value={this.state.value}
			onChange={(e)=>{
				this.setState({
					value: e.target.value
				})
			}}
		/>
	</Bubble>
	<Bubble
		type='success'
		place={['right']}
		content={<span>Success</span>}
	>
		<Button
			gradients='HappyFisher'
		>测试</Button>
	</Bubble>
</Flex.avg>
```

`global message`

![split](https://raw.githubusercontent.com/sewerganger/Muguet-ui/master/doc/images/message.gif)

```
<React.Fragment>
	<Button
		onClick={()=>{
			message.info('this is the first test', 3000)
		}}
	>消息</Button>
	<Button
		gradients='SunnyMorning'
		onClick={()=>{
			message.warning('this is the first test', 3000)
		}}
	>警告</Button>
	<Button
		gradients='RipeMalinka'
		onClick={()=>{
			message.danger('this is the first test', 3000)
		}}
	>危险</Button>
	<Button
		gradients='Nega'
		onClick={()=>{
			message.danger('this is the first test', 3000, {
				onClose: function(e){
					console.log(e)
				},
				gradients: 'PassionateBed'
			})
		}}
	>渐变色</Button>
</React.Fragment>
```

<br>

### For Developers

1. npm run release 进行打包发布版本

2. npm run clean 删除 release

3. npm run dev-scss 编译 scss(开发环境， 已编译好)

4. npm test 经行测试单元(未配置)

5. npm run pro-scss 或者 node src\stylesheet\color\getGandientsFromWebgradient.js 存放目录，

6. npm run update:color 更新渐变色 自动生成渐变色 Card
   <br>
   爬取渐变色 css， 生成渐变色目录
   使用的渐变色大多来自 https://webgradients.com/ 😜
   <br>

### 模块目前健壮性并未达到完美

#### 欢迎加入 Muguet-ui 开发交流群，群聊号码：279499604
