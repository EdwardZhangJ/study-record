/**
 * @09Realize_Object_Prototype.js
 * @description
 * @author zhangjun
 * @update (zhangjun 2021/12/31)
 **/

//  每个对象中都有一个 [[prototype]], 这个属性可以称之为 对象的原型（隐式原型）
var obj = { name: 'why' }; // [[prototype]]
var info = {} // [[prototype]]

// 1.解释原型的概念和看一下原型
/*
// 早期的 ECMA 是没有规范如何去查看 [[prototype]]

// 给对象中提高了一个属性，可以让我们查看一下这个原型对象（浏览器对象）
// __proto__
console.log(obj.__proto__); // {}
console.info(info.__proto__); // {}

// ES5 之后提供了 getPrototypeOf
console.log(Object.getPrototypeOf(obj));
*/


// 2. 原型有什么用呢？
// 当我们从对象中获取一个属性时，它会触发 [[get]] 操作（两步操作）
// 2.1 在当前对象中查找对应的属性，如果找到就直接使用
// 2.2 如果未找到，则会沿着它的原型去查找 [[prototype]]

// obj.age = 18;
obj.__proto__.age = 18;
console.log(obj.age) // undefined