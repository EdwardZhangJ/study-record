/**
 * @01Realize_Call.js
 * @description
 * @author zhangjun
 * @update (zhangjun 2021/11/25)
 **/
// 给所有函数添加一个 hycall 方法
Function.prototype.hycall = function(thisArg, ...args) {
    // console.log("hycall 被调用")
    // 在这里可以执行调用的那个函数 (foo)
    // 问题：得可以获取到是一个函数执行了 hycall
    
    // 1. 获取需要被执行的函数
    var fn = this
    
    // 2. 对thisArg转成对象类型(放置它传入的是非对象类型数据)
    thisArg = thisArg ? Object(thisArg) : window
    
    // 3. 调用需要执行的函数
    thisArg.fn = fn
    var result = thisArg.fn(...args)
    delete thisArg.fn
    
    // 4. 将最终结果返回出去
    return result
}

function foo() {
    console.log("foo 函数被执行", this)
}

function sum(num1, num2) {
    console.log("sum 函数被执行", this, num1, num2)
    return num1 + num2
}

// 系统的函数的call 方法
foo.call(undefined)
var result = sum.call({}, 10, 20)
console.log("系统调用结果：", result)

// 自己实现的函数的 hycall 方法
// 默认进行隐式绑定
foo.hycall(undefined)
var result1 = sum.hycall("abc", 10, 20)
console.log("hycall调用结果：",result1)


// Object(null) Object(undefined)