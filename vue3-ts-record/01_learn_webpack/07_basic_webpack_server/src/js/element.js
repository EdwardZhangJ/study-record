// import 'css-loader!../css/style.css'
import '../css/style.css'
import '../css/title.less'
import '../css/test.css'
import '../css/image.css'

import imgUrl from '../image/second.png'

const divEl = document.createElement('div');

divEl.className = 'title'
divEl.innerHTML = '你好啊，李银河'

// 设置背景图片
const bgDivEl = document.createElement('div')
bgDivEl.className = 'image-bg'

// 设置img 元素的src
const imgEl = document.createElement('img')
imgEl.src = imgUrl


// i 元素
const iEl = document.createElement('div')


document.body.appendChild(divEl)
document.body.appendChild(bgDivEl)
document.body.appendChild(imgEl)
