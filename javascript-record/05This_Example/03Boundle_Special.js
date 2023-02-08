/**
 * @03Boundle_Special.js
 * @description
 * @author zhangjun
 * @update (zhangjun 2021/11/23)
 **/

// 1. 忽略显示绑定

function foo() {
  console.log(this)
}
// apply/call/bind：当传入 null/undefined时,自动将 this 绑定成全局对象
// foo.apply('abc')
// foo.apply({})
// foo.apply(null)
// foo.apply(undefined)
// var bar = foo.bind(null)
// bar()

// 2. 简接函数引用
var obj1 = {
  name: 'obj1',
  foo: function () {
    console.log(this)
  },
}

var obj2 = {
  name: 'obj2',
  bar: '',
}

// obj2.bar = obj1.foo;
// obj2.bar();  // 返回 obj2 对象

;(obj2.bar = obj1.foo)() // 独立函数调用 返回 window 对象
