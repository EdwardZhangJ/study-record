/**
 * @01With_Statement.js
 * @description
 * @author zhangjun
 * @update (zhangjun 2021/12/6)
 **/

// 目前仅有两个作用域，全局作用域 函数作用域
var message = "Hello World"

// with 语句：可以形成自己的作用域
var obj = {name: "why", age: "18", message: "Hello World"};

function foo() {
    function bar() {
        with(obj) {
            console.log(message)
            console.log("------")
        }
    }
    bar()
}

foo()

var info = {name: "kobe"}
with (info) {
    console.log(name)
}