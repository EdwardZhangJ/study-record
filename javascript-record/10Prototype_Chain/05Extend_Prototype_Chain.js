/**
 * @05Extend_Prototype_Chain.js
 * @description
 * @author zhangjun
 * @update (zhangjun 2022/1/7)
 **/

// 父类： 公共属性和方法
function Person(name, age, friends) {
    this.name = name;
    this.age = age
    this.friends = friends;
}

Person.prototype.eating = function() {
    console.log(this.name + "eating~");
}

// 子类： 特有属性和方法
function Student(name, age, friends, sno) {
    Person.call(this, name, age, friends);
    this.sno = 111;
}

Student.prototype = new Person();

Student.prototype.studying = function() {
    console.log(this.name + " studying~")
}

// var stu = new Student();
/*console.log(stu.name);
stu.eating();


// 存在的弊端
// 1. 打印 stu 对象，继承的属性看不到

console.log(stu) // Person { sno: 111 }

// 2. 创建两个stu 对象，获取引用，或修改引用中的值，会相互影响
 var stu1 = new Student();
 var stu2 = new Student();

 stu1.name = "kobe"; // 直接赋值不会影响

stu1.friends.push("kobe");
console.log(stu1.friends);
console.log(stu2.friends)*/

// 3. 在前面实现类的过程中，都没有传入参数

// var stu3 = new Student("lilei", 112);

var stu = new Student("why", 18, ["kobe"], 111);
console.log(stu)

var stu1 = new Student("why", 18, ["lilei"], 112);
var stu2 = new Student("kobe", 18, ["james"], 113);

stu1.friends.push("lucy");
console.log(stu1.friends)
console.log(stu2.friends)
