/**
 * @04Object_Funtion_Judgement.js
 * @description
 * @author zhangjun
 * @update (zhangjun 2022/1/12)
 **/

function createObject(o) {
    function Fn() {}
    Fn.prototype = o;
    return new Fn();
}

function inheritPrototype(SubType, SuperType) {
    SubType.prototype = createObject(SuperType.prototype);
    Object.defineProperties(SubType.prototype, "constructor", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: SubType
    })
}

var obj = {
    name: "why",
    age: 17
}

var info = Object.create(obj, {
    address: {
        value: "北京市",
        enumerable: true
    }
})

// console.log(info); // 在info对象上
// console.log(info.__proto__); // 在 info 原型上

// hasOwnProperty 方法 判断是否存在某个属性
// console.log(info.hasOwnProperty('address')); // true
// console.log(info.hasOwnProperty('name')); // false

// in 操作符: 不管在当前对象还是原型中存在即返回 true
// console.log("address" in info); // true
// console.log("name" in info); // true

// instanceof 方法： 用于检测构造函数的 prototype, 是否出现在某个实例对象的原型链上。
function inheritPrototype() {

}

function Student() {}
function Person() {}

inheritPrototype(Student, Person);

var stu = new Student()
// console.log(stu instanceof Student);
// console.log(stu instanceof Person);
// console.log(stu instanceof Object);


// isPrototypeOf 方法：用于检测某个对象 是否出现在某个实例的原型链上。
var p = new Person();
console.log(p instanceof Person) // true
console.log(Person.prototype.isPrototypeOf(p)); // true

console.log(obj.isPrototypeOf(info)); // true