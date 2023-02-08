/**
 * @05Arrow_NoArguments.js
 * @description
 * @author zhangjun
 * @update (zhangjun 2021/11/27)
 **/
// 案例一
// var foo = () => {
//     console.log(arguments)
// };
//
// foo();


// 案例二
// function foo() {
//     var bar = () => {
//         console.log(arguments)  // 找上层中的 arguments
//     }
//     return bar;
// }
//
// var fn = foo(123);
// fn();

// 案例三

var foo = (num1, num2, ...args) => {
    console.log(args)
}

foo(10, 20, 30, 40, 50)