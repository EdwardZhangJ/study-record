/**
 * @03Object_Prototype.js
 * @description
 * @author zhangjun
 * @update (zhangjun 2021/12/31)
 **/

var obj = { name: 'why' };
// console.log(obj.address);

// 找到哪一层对象之后停止继续查找？
// 字面量 obj 的原型是： [Object: null prototype] {}
//  [Object: null prototype] {} 就是顶层的原型
console.log(obj.__proto__); // [Object: null prototype] {}

// obj.prototype =>  [Object: null prototype] {}
// console.log(obj.__proto__.__proto__); // null

// 顶层原型来自哪里

var obj1 = {}; // 创建了一个对象
var obj2 = new Object(); // 创建了一个对象

function Person() {

}

var  p = new Person();


// Object.prototype
// console.log(obj1.__proto__);
// console.log(Object.prototype);
// console.log(Object.prototype === obj1.__proto__); // true

console.log(Object.getOwnPropertyDescriptors(Object.prototype));