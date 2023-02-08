/**
 * @02Pure_Function_Exam.js
 * @description 判断是否为纯函数 
 * @author zhangjun
 * @update (zhangjun 2021/11/29)
 **/

// foo 函数是否是一个纯函数
// 1. 相同的输入一定会产生相同的输出
// 2. 在执行过程中不会产生任何的副作用
function foo(num1, num2) {
    return num1 * 2 + num2 * num2;
}

// bar 不是一个纯函数, 它修改了外界的变量
var name = "abc"
function bar () {
    console.log("bar 其他代码的执行")
    name = "cba"
}

bar()
console.log(name)

// baz 不是一个纯函数, 它修改了传入的参数
function baz(info) {
    info.age = 100
}

var obj = {
    name: 'why',
    age: 18
}

// baz(obj)
// console.log(obj)

// test 是否是一个纯函数？ 是一个纯函数
function test(info) {
    return {
        ...info,
        age: 100
    }
}

test(obj)
console.log(obj)


// React 的函数组件(类组件)
function HelloWorld(props) {

}

