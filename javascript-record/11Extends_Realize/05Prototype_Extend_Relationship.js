/**
 * @05Prototype_Extend_Relationship.js
 * @description 原型继承关系———— 对象-函数-原型间的关系
 * @author zhangjun
 * @update (zhangjun 2022/1/12)
 **/
var obj = {
    name: "why"
}

console.log(obj.__proto__);

//  对象里面是有一个 __proto__ 对象：隐式原型对象

// Foo 是一个函数，那么它会有一个 显示原型对象：Foo.prototype

// Foo.prototype 来自哪里
// 创建了一个函数：Foo.prototype = { constructor: Foo }

// Foo 是一个对象，那么它会有一个 隐式原型对象：Foo.__proto__
// Foo.__proto__ 来自哪里？
// new Function(); Foo.__proto__ = Function.prototype
// Function.prototype = { constructor: Function }

function Foo() {

}

console.log(Foo.prototype === Foo.__proto__); // false
// 例外： Function.prototype === Function.__proto__
console.log(Foo.prototype.constructor); // Function: Foo
console.log(Foo.__proto__.constructor); // Function: Function

var foo1 = new Foo();
var obj1 = new Obj();