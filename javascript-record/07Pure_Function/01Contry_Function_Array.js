/**
 * @01Contry_Function_Array.js
 * @description
 * @author zhangjun
 * @update (zhangjun 2021/11/29)
 **/

var names = ["abc", "cba", "nba", "dna"]

// slice 只要给它传入一个 start/end, 那么对于同一个数组来说, 它会给我们返回确定的值
// slice 函数本身它是不会修改原来的数组
// slice -> this  slice 函数本身就是一个 纯函数
// var newNames1 = names.slice(0, 3)
// console.log(newNames1)
// console.log(names)


// splice 在执行时, 会修改掉原来调用的数组对象本身, 该修改操作就是产生的副作用
// splice 不是一个 纯函数
var newNames2 = names.splice(2)
console.log(newNames2)
console.log(names) // splice 方法修改了原数组