/**
 * @03Extends_Parasitic_Component.js
 * @description 继承最终实现方案---寄生组合式
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
    Object.defineProperty(SubType.prototype, "constructor", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: SubType
    })
}

function Person(name, age, friends) {
    this.name = name;
    this.age = age;
    this.friends = friends;
}

Person.prototype.running = function() {
    console.log("running~");
}

Person.prototype.eating = function() {
    console.log("eating~");
}

function Student(name, age, friends, sno, score) {
    Person.call(this, name, age, friends);
    this.sno = sno;
    this.score = score;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.studying = function() {
    console.log("studying");
}
var stu = new Student("why", 17, ["kobe"], 111, 100);
console.log(stu);
console.log(stu.running());
console.log(stu.studying ());