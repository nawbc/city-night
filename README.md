<h1 align="center">Muguet 是一款主打渐变色的 React ui 组件库</h1>

![lang](https://img.shields.io/github/languages/top/sewerganger/Muguet-ui.svg)
![liense](https://img.shields.io/github/license/sewerganger/Muguet-ui.svg)
![version](https://img.shields.io/github/package-json/v/sewerganger/Muguet-ui.svg)

<div align="center">

![logo](https://raw.githubusercontent.com/sewerganger/Muguet-ui/master/muguet-site/assets/logo/muguet256.gif)

</div>

[English](https://github.com/sewerganger/Muguet-ui/blob/dev_main/README_EN.md)

😭 进度： <font color="red">大规模改动中 ! ! ! ! !</font>

😝 版本： 0.1.0.0-alpha2

🙃 开源协议: MIT

😀 作者: 下水道的包工头

😘 邮箱: wanghan9423@outlook.com

### 一. 简介

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/42b72682e02143d1a17c87cbe2cd48de)](https://app.codacy.com/app/wanghan9423/muguet-ui?utm_source=github.com&utm_medium=referral&utm_content=sewerganger/muguet-ui&utm_campaign=Badge_Grade_Settings)

- 设计

Muguet 是一款主打渐变色的 React ui 组件库
<br>
其提供了大量渐变色。
<br>
<br>
<br>
![split](https://raw.githubusercontent.com/sewerganger/Muguet-ui/master/doc/images/gradients.gif)
Muguet 使用了直角设计，当然也提供了圆角接口，通过合理的搭配，组件将美到 Cry😭
<br>
![split](https://raw.githubusercontent.com/sewerganger/Muguet-ui/master/doc/images/button.jpg)

- 性能

和 antdesgin 不相上下(左 antd 右 muguet)

### 二. 模块(此处仅展示部分模块和功能, 详情请等待文档)

1.输入

`<Input></Input>`
<br>

1.布局

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

2.提示

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

`全局 message`

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
