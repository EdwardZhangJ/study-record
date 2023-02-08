/**
 * @01Analyze_Function_This.js
 * @description
 * @author zhangjun
 * @update (zhangjun 2021/11/23)
 **/

// 1. setTimeout
// function hySetTimeout(fn, duration) {
//   fn.call('abc')
// }

// hySetTimeout(function () {
//   console.log(this) // window 对象
// }, 3000)

// setTimeout(function () {
//   console.log(this) // window 对象
// }, 2000)

// 2. 监听点击
/* const boxDiv = document.querySelector('.box')
boxDiv.onclick = function () {
  console.log(this) // .box 盒子对象
}

boxDiv.addEventListener('click', function () {
  console.log(this) // .box 盒子对象
})
boxDiv.addEventListener('click', function () {
  console.log(this) // .box 盒子对象
})
boxDiv.addEventListener('click', function () {
  console.log(this) // .box 盒子对象
}) */

// 3. 数组 forEach/map/filter/find
var names = ['abc', 'cba', 'nba']
names.forEach(function (item) {
  console.log(item, this)
}, 'abc')
names.map(function (item) {
  console.log(item, this)
}, 'cba')
