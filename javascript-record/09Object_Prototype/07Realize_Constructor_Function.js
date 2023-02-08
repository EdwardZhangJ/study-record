/**
 * @06Realize_Constructor_Function.js
 * @description
 * @author zhangjun
 * @update (zhangjun 2021/12/31)
 **/

function foo() {
    console.log("foo~， 函数体代码");
}

// foo 就是一个普通的函数
// foo();

// 换一种方式来调用 foo 函数，通过 new 关键字去调用一个函数，那么这个函数就是 构造函数了
var f1 = new foo;
console.log(f1)

// 通过 new 去调用一个函数时，和直接调用有什么区别？