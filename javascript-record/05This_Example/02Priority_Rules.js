/**
 * @02Priority_Rules.js
 * @description
 * @author zhangjun
 * @update (zhangjun 2021/11/23)
 **/

/*
var obj = {
    name: 'obj',
    foo: function () {
        console.log(this)
    }
}
obj.foo();
// call apply 的显示绑定高于隐式绑定
obj.foo.call('abc');
obj.foo.apply('abc');
*/

// 2. bind 隐式绑定 bind优先级高于隐式绑定
// var bar = obj.foo.bind('cba')
// bar()

// 3. bind 隐式绑定 更明显的比较
/*
function foo() {
    console.log(this)
}
var obj = {
    name: 'obj',
    foo: foo.bind('aaa')
}
obj.foo()
*/

// 4. new 绑定

var obj = {
  name: 'obj',
  foo: function () {
    console.log(this)
  },
}
// new 绑定 高于隐式绑定
var f = new obj.foo()

// new绑定高于 显示绑定; new 关键字不能和 apply/call 一起使用

function foo() {
  console.log(this)
}
var bar = foo.bind('aaa')
var obj = new bar()

// new 绑定 > 显示绑定(apply/call/bind) > 隐式绑定(obj.foo()) > 默认绑定(独立函数调用)
