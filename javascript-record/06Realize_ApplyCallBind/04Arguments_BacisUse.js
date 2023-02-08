/**
 * @04Arguments_BacisUse.js
 * @description
 * @author zhangjun
 * @update (zhangjun 2021/11/27)
 **/

/*
function foo(num1, num2, num3) {
    // 类数组对象中(长得像数组，本质上是一个对象)：arguments
    // console.log(arguments)
    // 常见的对 arguments 的三个操作
    // 1. 获取参数的长度
    console.log(arguments.length)
    // 2. 根据索引值获取某一个参数
    console.log(arguments[2])
    console.log(arguments[3])
    console.log(arguments[4])
    // 3. callee 获取当前 arguments 所在的函数
    console.log(arguments.callee)
    // console.log(num1, num2, num3);
}
foo(10, 20, 30, 40, 50)
*/

function foo(num1, num2) {
    // 1. 自己遍历
    var newArr = []
    for(var i = 0; i < arguments.length; i++) {
        newArr.push(arguments[i] * 10)
    }
    // console.log(newArr)
    // 2. arguments 转成array 类型
    // 2.1 自己遍历 arguments 中所有的元素
    
    // 2.2 Array.prototype.slice 将 arguments 转成 Array
    var newArr2 = Array.prototype.slice.call(arguments)
    console.log(newArr2)
    
    var newArr3 = [].slice.call(arguments)
    console.log(newArr3)
    
    // 2.3 ES6的语法
    var newArr4 = Array.from(arguments)
    console.log(newArr4)
    
    var newArr5 = [...arguments]
    console.log(newArr5)
    
    
}

foo(10, 20, 30, 40, 50)
var names = ["aaa", "bbb", "ccc", "ddd"]


Array.prototype.hyslice = function (start, end) {
    // console.log(this)
    var arr = this
    start = start || 0
    end = end || arr.length
    var newArr = []
    for(var i = start; i< end; i++) {
        newArr.push(arr[i])
    }
    return newArr
}

var newArray = Array.prototype.hyslice.call(["aaa", "bbb", "ccc"], 1, 3);
console.log(newArray);