/**
 * @01Class_Define.js
 * @description class 定义类的名称
 * @author zhangjun
 * @update (zhangjun 2022/1/12)
 **/

// 类的声明
class Person {

}

// 类的表达式(类似于下面函数的表达式,使用较少)
/*
function foo() {}

var foo = function() { }
*/

var Animals = class {

}

// 研究一下类的特点

console.log(Person.prototype); // {}
console.log(Person.prototype.__proto__); // [Object: null prototype]{}
console.log(Person.prototype.constructor); // [class Person]
console.log(typeof Person); // function



var p = new Person();
console.log(p.__proto__ === Person.prototype); // true


