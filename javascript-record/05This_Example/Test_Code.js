/**
 * @Test_Code.js
 * @description
 * @author zhangjun
 * @update (zhangjun 2021/11/23)
 **/

function foo(el) {
  console.log(el, this.id)
}

var obj = {id: 'awesome'}
// var nums = [1, 2, 3];
;[1, 2, 3].forEach(foo, obj)
