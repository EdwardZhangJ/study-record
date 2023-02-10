# 邂逅Canvas

Canvas:

- HTML5 新增元素
- <font color="red">提供了非常多的 JavaScript绘图 API（比如：绘制路径、矩形、圆、文本和图形等方法）</font>，集合` <canvas> `元素可以绘制各种2D图形
- Canvas API 主要用于绘制2D图形，也可以使用Canvas提供给WebGL API 来绘制3D图形

## Canvas 优缺点

- 优点：
  - Canvas 提供的功能更加原始，适合像素级处理，动态渲染和大量数据的绘制，如：图片编辑、热力图、炫光尾巴特效等
  - Canvas 非常适合图形密集型的游戏开发，适合频繁重绘大量的图形对象
  - Canvas 能够以 .png 或 .jpg 格式保存图像，适合对图片进行像素级的处理

- 缺点
  - 移动端如果 Canvas 使用数量过多，会使内存占用超出了手机承受范围，可能会导致浏览器崩溃
  - Canvas 绘图只能通过 JavaScript 脚本操作
  - Canvas 是由一个个像素点构成的图形，放大会使图形变得颗粒状和像素化（导致图形模糊）

## 初体验 Canvas

使用Canvas的注意事项：

初体验Canvas

- Canvas通用模板
- Canvas绘制正方形

## Canvas Grid 和坐标空间

## 绘制矩形

Canvas 支持两种方式来绘制矩形：<font color='red'>矩形方法和路径方法</font>

- 路径是通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合
- 除了矩形，其他的图形都是通过一条或者多条路径组合而成的
- 通常会通过多种路径绘制复杂的图形

Canvas 绘制矩形的方法

- fillRect(x, y, width, height)：绘制一个填充的矩形
- strokeRect(x, y, width, height): 绘制一个矩形的边框
- clearRect(x, y, width, height): 清除指定矩形区域，让清除部分完全透明

## 认识路径

图形的基本元素是路径。

- 路径是点列表，由线段连接。这些线段可以具有不同形状、连续或不连续的、不同的宽度和颜色
- 路径是可由很多子路径构成，这些子路径都是在一个列表中，列表中所有子路径（线、弧形等）将构成图形
- 绘制一个路径，甚至一个子路径，通常都是闭合的（会调用 closePath 来闭合）

使用路径绘制图形的步骤

1. 首先需要创建路径起始点（beginPath）
2. 然后使用绘图命令去画出路径（arc、lineTo）
3. 之后把路径闭合（closePath, 不是必须）
4. 一旦路径生成，就能通过描边（stoke）或填充路径区域（fill）来渲染图形

以下是绘制路径时需要用到的函数

- beginPath(): 新建一条路径，生成之后，图形绘制命令被指向到新的路径上绘图，不会关联到旧的路径
- closePath(): 闭合路径之后图形绘制命令又重新指向到 beginPath 之前的上下文中
- stroke(): 通过线条来绘制图形轮廓/描边（针对当前路径图形）
- fill(): 通过填充路径的内容区域生成实心的图形（针对当前路径图形）

### 路径 - 绘制直线

- 移动画笔 moveTo(x, y) 方法

- 绘制直线 lineTo(x, y) 方法，绘制一条从当前位置到指定 (x, y) 位置的直线
  - 有两个参数 (x, y) 代表坐标系中<font color="red">直线结束的点</font>
  - 开始点和之前绘制的路径有关，之前路径结束点就是接下来的开始点
  - 当然开始点也可以通过 moveTo() 函数改变

### 路径 - 绘制三角形（Triangle）

- 绘制一个三角形步骤
  1. 调用 beginPath() 来生成路径
  2. 调用 moveTo()、lineTo() 函数来绘制路径
  3. 闭合路径 closePath()，非必需
     1. closePath() 方法会通过绘制一条从当前点到开始点的直线来闭合图形
     2. 如果图形是已经闭合了的，即当前点位开始点，该函数什么野不做

  4. 调用 stroke() 函数来给线描边，或者调用 fill() 函数来填充
     1. 使用 fill 时，路径会自动闭合，而 stroke 不会

### 路径 - 绘制圆弧（Arc）、圆（Circle）

- 绘制圆弧或者圆，使用 arc() 方法
  - arc(x, y, radius, startAngle, endAngle, anticlockwise), 该方法有六个参数
  - x,y：圆心坐标
  - radius：圆弧半径
  - startAngle、endAngle：指定开始和结束的弧度。以x轴为基准
  - anticlockwise：为一个布尔值。true，逆时针，false，顺时针

## 色彩 Colors

- 给图形上色
  - fillStyle = color：设置图像的填充颜色，需在 fill() 函数前调用
  - strokeStyle = color：设置图像的轮廓颜色，需在 stroke() 函数前调用

- color 颜色
  - color 可以是表示 CSS 颜色值的字符串，支持：关键字、十六进制、rgb、rgba格式
  - 默认情况下，都是黑色

## 透明度 Transparent

除了可以绘制实色图形，还可以用 canvas 来绘制半透明的图形

- strokeStyle 和 fillStyle 属性结合 RGBA
- globalAlpha 属性
  - 这个属性影响到 canvas 里所有图形的透明度
  - 有效值是 0.0 - 1.0

## 线型 Line styles

调用 lineTo() 函数绘制的线条，可以通过一系列属性来设置 线的样式

- lineWidth = value：设置线条的宽度
  - 设置线条宽度的属性值必须为正数。默认值是1px，不需单位
  - 线宽是指给定路径的中心到两边的粗细。换句话说就是在路径的跳变各绘制线宽的一半
  - <font color='red'>要解决这个问题，还必须对路径精确的控制。如，1px的线条会在路径两边各延伸半像素，name第三幅图绘制从(3.5, 1)到(3.5, 5) 的线条，其边缘正好落在像素边界，填充出来的就是准确的宽为 1.0 的线条</font>
- lineCap = type：设置线条末端样式
  - butt: 截断
  - round: 圆形
  - square: 正方形
- lineJoin = type：设定线条与线条间结合处的样式
  - round: 圆形
  - bevel: 斜角
  - miter: 斜槽规，默认值

## 绘制文本

- canvas 提供了两种方法来渲染文本
  - fillText(text, x, y, [, maxWidth])
    - 在 x,y 位置填充指定文本
    - 绘制的最大宽度

  - strokeText(text, x, y, [, maxWidth])

- 文本的样式
  - font = value: 当前绘制文本的样式。和 css font属性相同的语法，默认为 10px sans-serif
  - textAlign = value: 文本对齐选项。可选值: start、end、left、right or center，默认值 start
  - textBaseline = value: 基线的对齐选项，可选值: top、hanging、middle、alphabetic、ideographic、bottom

## 绘制图片

绘制图片，可以使用 drawImage 方法将它渲染到 canvas 里。

- drawImage(image, x, y)
- drawImage(image, x, y, width, height)
- drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)

图片的来源，canvas 的API可以使用下面这些类型中的一种作为图片的源

- HTMLImageElement：这些图片是有 Image() 函数构造出来的，或者任何的 `<img>` 元素
- HTMLVideoElement：用一个HTML的 `<video>` 元素作为你的图片源，可以从视频中抓取当前帧作为一个图像
- HTMLCanvasElement：可以使用另一个 `<canvas>` 元素作为图片源

## Canvas 绘画状态 - 保存和恢复

Canvas 绘画状态：当前绘画时所产生的样式和形变的一个快照

- Canvas 在绘画时，会产生相应的绘画状态，其实是可以将某些绘画的状态存储在栈中为以后复用
- Canvas 绘画状态的可以调用 save 和 restore 方法用来保存和恢复的

保存和恢复(Canvas)绘画状态

- save(): 保存画布的所有绘画状态
- restore(): 恢复画布的所有绘画状态

Canvas 绘画状态包括

- 当前应用的形变（即移动、旋转和缩放）
- 以下属性：strokeStyle、fillStyle、globalAlpha、lineWidth、lineCap、lineJoin、miterLimit、font、textAlign、textBaseline ......
- 当前的裁切路径（clipping path）

## 变形 Transform

Canvas 和 CSS3 一样也支持形变。可以将坐标原点移动到另一个点、形变可以对网格进行旋转和缩放

Canvas 形变的4种方法：

- translate(x, y): 用来移动 canvas 和它的原点到一个不同的位置
- rotate(x, y):用于以原点为中心旋转 canvas
- scale(x, y): 用来增减图形在 canvas 中像素数目，对图形进行缩小或放大
- transform(x, y):  

- 注意事项：
  - 做形变之前先调用 save 方法保存状态
  - 大多数情况下，调用 restore 方法比手动恢复原先的状态要简单的多
  - 如果在循环中做位移但没有保存和恢复canvas状态，可能已经超出 canvas 画布以外了
  - 形变需要在绘制图形前调用

## Canvas 动画

Canvas 绘图都是通过 JavaScript 去操作的，如果实现一些交互性动画是非常容易的，

- canvas 可能最大的限制就是图像一旦绘制出来，它就是一直保持那样
- 如需要执行动画，不得不对画布上所有图形进行一帧一帧的重绘
- 为了实现动画，需要一些定时执行重绘的方法：
  - setInterval、setTimeout 和 requestAnimationFrame 三种方法

- Canvas 画出一帧动画的基本步骤（如需画出流畅动画，1s需绘60帧）
  1. 用 clearRect 方法清空 canvas。除非接下来绘制的内容会完全充满 canvas
  2. 保存 canvas 状态
  3. 绘制动画图形，及绘制动画中的一帧
  4. 恢复canvas 状态

### demo - 绘制秒针 - setInterval

- 绘制秒针动画，绘制步骤
  1. 用 clearRect() 方法，清空 canvas
  2. 保存 canvas 状态
  3. 修改 canvas 状态（样式、移动坐标、旋转等）
  4. 绘制秒针图形
  5. 恢复 canvas 状态，准备重绘下一帧

- setInterval 定时器的缺陷
  - setInterval 定时器不是非常精准的，因为setTimeout的回调函数是放到了宏任务中等待执行
  - 如果微任务中一直有未处理完成的任务，那么setTimeout的回调函数就有可能不会在指定时间内触发回调
  - 如果想要更加平稳和更加精准的定时执行某个任务的话，可以使用 requestAnimationFrame 函数

### demo - 绘制秒针 - requestAnimationFrame

- requestAnimationFrame 函数：
  - 告诉浏览器 - 你希望执行一个动画，并且要求浏览器在下次重绘之前调用该函数的回调函数来更新动画
