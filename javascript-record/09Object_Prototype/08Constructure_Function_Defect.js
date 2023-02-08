/**
 * @08Constructure_Function_Defect.js
 * @description
 * @author zhangjun
 * @update (zhangjun 2021/12/31)
 **/

function foo() {
    function bar () {
    
    }
    return bar;
}

var fn1 = foo();
var fn2 = foo();

console.log(fn1 === fn2)