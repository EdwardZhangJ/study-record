/**
 * @10Function_Prototype.js
 * @description 函数的原型
 * @author zhangjun
 * @update (zhangjun 2021/12/31)
 **/

/*
function foo() {

}

// 函数也是一个对象
// console.log(foo.__proto__); // 函数作为对象来说，它也是有 [[prototype]] 隐式原型

// 函数还会多出来一个显示原型属性： prototype
// console.log(foo.prototype);

var f1 = new foo();
var f2 = new foo();

console.log(f1.__proto__ === foo.prototype); // true
console.log(f2.__proto__ === foo.prototype); // true
*/

function Person() {

}

// Person 中一个 constructor 属性
/*
var p1 = new Person();
var p2 = new Person();

console.log(Person.prototype);
console.log(Object.getOwnPropertyDescriptors(Person.prototype));
*/

// 2. 可以添加自己的舒服
Person.prototype.name = "why";
Person.prototype.age = 18;

var p3 = new Person();
console.log(p3.name, p3.age);

// 3. 直接修改 整个 prototype 对象
Person.prototype = {
    name: "why",
    age: 18,
    height: 1.88
}

// 真实开发中 可以通过 Object.defineProperty() 方式添加 constructor
Object.defineProperty(foo.prototype, "constructor", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: foo
})
