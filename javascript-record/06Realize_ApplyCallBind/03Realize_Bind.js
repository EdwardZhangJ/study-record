/**
 * @03Realize_Bind.js
 * @description
 * @author zhangjun
 * @update (zhangjun 2021/11/25)
 **/
Function.prototype.hybind = function(thisArg, ...argArray) {
    // 1， 获取到真实需要调用的函数
    var fn = this
    // 此处 this 指代 调用的函数 function foo() { }
    
    // 2， 绑定 this
    thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window
    
    function proxyFn(...args) {
        // 3. 将函数放到  thisArg 中进行调用
        thisArg.fn = fn
        // 特殊：对两个传入的参数进行合并
        var finalArgs = [...argArray, ...args]
        var result = thisArg.fn(...finalArgs)
        delete thisArg.fn
        // 4. 返回结果
        return result
    }
    return proxyFn
}

function foo() {
    console.log("foo 被执行", this)
}

function sum(num1, num2, num3, num4) {
    console.log(num1, num2, num3, num4)
}

// 系统调用
// var bar = foo.bind("abc")
// bar()

// 系统调用，以下传参方法 结果相同
// var newSum = sum.bind("aaa", 10, 20, 30, 40)
// newSum()

// var newSum = sum.bind("aaa")
// newSum(10, 20, 30, 40)

// var newSum = sum.bind("aaa", 10)
// newSum(20, 30, 40)

// 使用自己定义的bind
// var bar = foo.hybind("hybind被执行")
// bar()

var newSum = sum.hybind("hybind", 10, 20)
var result = newSum(30, 40)
