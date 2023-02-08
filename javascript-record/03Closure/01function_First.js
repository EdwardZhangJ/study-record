// function calc(num1, num2, calcFn){
//     console.log(calcFn(num1, num2));
// }
//
// function add(num1, num2) {
//     return num1 + num2
// }
//
// function sub(num1, num2){
//     return num1 - num2
// }
//
// function mul(num1, num2) {
//     return num1 * num2
// }
//
// let m = 20,
//     n = 30;
//
//
// calc(m, n, add)
//
//
// function foo() {
//     function bar() {
//         console.log("bar")
//     }
//     return bar
// }
// var fn = foo()
// fn()

function makeAdder(count) {
    function add(num) {
        return count + num
    }
    return add
}

let add5 = makeAdder(5)
console.log(add5(6))
