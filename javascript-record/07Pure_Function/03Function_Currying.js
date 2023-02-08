/**
 * @03Function_Currying.js
 * @description 函数的柯里化，柯里化的过程和结构
 * @author zhangjun
 * @update (zhangjun 2021/11/29)
 **/

function add(x, y, z) {
    return x + y + z;
}

var result = add(10, 20, 30);
console.log(result);



function sum1(x) {
    return function(y) {
        return function(z) {
            return x + y + z;
        }
    }
}

var result1 = sum1(10)(20)(30);
console.log(result1)

// 简化 柯里化的代码
var sum2 = x => y => z => {
    return x + y + z;
}

console.log(sum2(10)(20)(30))

var sum3 = x => y => z => x + y + z; // redux thunk 中
