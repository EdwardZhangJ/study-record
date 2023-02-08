/**
 * @06Compose_Function.js
 * @description 组合函数的理解
 * @author zhangjun
 * @update (zhangjun 2021/11/29)
 **/

// 1. 组合函数的简单使用
/*
function double(num) {
    return num * 2;
}

function square(num) {
    return num ** 2
}

var count = 10
var result = square(double(count))
console.log(result)

var num = 100

function composeFn(m, n) {
    return function(count) {
        return n(m(count))
    }
}

var newFn = composeFn(double, square)
console.log(newFn(10))
*/

// 2. 组合函数的通用使用, 可以传入多个函数进行调用
function hyCompose(...fns) {
    var length = fns.length
    for(var i = 0; i < length; i++) {
        if(typeof fns[i] !== "function") {
            throw new TypeError("Expect arguments are Function") // 抛出异常
        }
    }
    
    function  compose(...args) {
        var index = 0
        var result = length ? fns[index].apply(this, args) : args
        while (++index < length) {
            result = fns[index].call(this, result)
        }
        return result
    }
    return compose
}

function double(m) {
    return m * 2
}

function square(n) {
    return n ** 2
}

var newFn = hyCompose(double, square)
console.log(newFn(10))