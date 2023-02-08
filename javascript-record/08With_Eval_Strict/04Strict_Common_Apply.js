/**
 * @04Strict_Common_Apply.js
 * @description
 * @author zhangjun
 * @update (zhangjun 2021/12/27)
 **/

"use strict";

/**
 * 1. 禁止意外创建全局变量
 * 2. 不允许函数由相同的参数名称
 * 3. 静默错误
 * 4. 不允许使用原先的 八进制格式 0123
 * 5. with 语句不允许使用
 * 6. eval 函数不会向上引用变量
 * 7. 严格模式下的 this
 **/

/* // ex.1
function foo() {
    age = 20;
}
foo();
console.log(age);
*/

/*
// ex.2
function foo(x, y, z) {
    console.log(x, y, x)
}
foo(10, 20, 30);
*/

// ex.3 静默错误
/*
// true.name = "abc";
// NaN = 123;

var obj = {};
Object.defineProperty(obj, "name", {
    configurable: false, // 不可配置
    writable: false, // 不可重写
    value: "why"
})

console.log(obj.name);
obj.name = 'kobe';
*/

// ex.4 不允许使用原先的 八进制格式 0123
/* // 下面在 ES6 之后引入
var num1 = 0o123;  // 表示 八进制 数值
var num2 = 0x123; // 十六进制
var num3 = 0b100; // 二进制
console.log(num1, num2, num3);
*/

// ex.5 with 语句不允许使用

// ex.6 eval 函数不会向上引用变量

/*
var JSString = 'var message = "Hello World"; console.log(message);'
eval(JSString);
console.log(message);
*/

// ex.7 严格模式下的 this
/*
function foo() {
    console.log(this) // 严格模式下 自执行函数会指向 undefined
}
var obj = {
    name: "why",
    foo: foo
}
foo(); // 指向undefined
var bar = obj.foo;
bar(); //
*/

// ex.8 setTimeout 的 this
// 通过 fn.apply(this = window)
setTimeout( function() {
    console.log(this); // window
}, 1000)

