/**
 * @03Strict_Mode.js
 * @description
 * @author zhangjun
 * @update (zhangjun 2021/12/6)
 **/
"use strict";

var message = "Hello World";
console.log(message);


function foo() {
    "use strict";
    
    true.foo = "abc";
}

foo();