
LOG:
<br />
withContext 全局
2019/10/17 移动到linux平台 , @增加 relation 布局 相似安卓的约束性布局 位置相对于绑定的元素
2019/10/15 增加 类似于 安卓的recyclerView

TODO:
完全放弃全是渐变色
全面使用hook

1 . 两套方案
 ②view silent自带的设计风格 流畅设计 抄袭微软 这里给出blur效果 gradient 的标签 `<EffectView />`
    然后就是简约设计 抄袭ant d
 ①structure 结构自己实现 二次封装

2 . element 的className 类似vue的v-bind
自定义性强 留出可以修改每个div央视的api

3 . Bubble 是否带有箭头 悬浮延时 可以气泡 也能悬浮

4 . 自定义calendar的周长

5 . 同时支持 移动端 和 pc端

6 . 用flex 写一套类似安卓布局的组件
LinearLayout stretch
FrameLayout

7 . calendar自定义周长

8 . notification 网页通知 和 系统通知

9 . ghost 模式的div  可以四周给出多余部分设置拖拽(抄袭b站) 也可以整个div 拖拽

10 . 给出调整位置的api 以防出现位置错误

SilentElements

Input [ edit originProps ]
Select
Bubble
EffectView

11 .把自己的模块注册进来
data dataset

12 滚动同步模块z

备用字体 Greve

视差滚动 parallax

nav  百叶窗功能 类似简书
