/**
 * @02Realize_Apply.js
 * @description
 * @author zhangjun
 * @update (zhangjun 2021/11/25)
 **/
// 自己实现 apply
Function.prototype.hyapply = function(thisArg, argArray) {
    // 1. 获取到需要执行的函数
    var fn = this;
    
    // 2. 处理绑定的 thisArg
    thisArg = thisArg ? Object(thisArg) : window;
    
    // 3. 执行函数
    thisArg.fn = fn
    var result
    
    // if (!argArray) { // argArray 没有值 第一种方法
    //     result = thisArg.fn()
    // }
    // else {
    //     result = thisArg.fn(...argArray);
    // }
    
    // argArray = argArray ? argArray : [] // 第二种方法
    argArray = argArray || []
    result = thisArg.fn(...argArray);
    delete thisArg.fn
    
    // 4. 将最终结果返回出去
    return result
}

function sum(num1, num2) {
    console.log("sum 函数被执行", this, num1, num2)
    return num1 + num2
}

function foo(num) {
    return num
}

// 系统调用
var result = sum.apply({}, [20, 30])
console.log("系统调用结果：", result)

// 自己实现调用
var result1 = sum.hyapply("abc", [20, 30])
console.log("hycall调用结果：", result1)

var result2 = foo.hyapply("", [20])
console.log('result2', result2);

// 对于 0 的 edge case
