/**
 * @11Create_Object_Prototype&Constructor.js
 * @description
 * @author zhangjun
 * @update (zhangjun 2021/12/31)
 **/

function Person(name, age, height, address) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.address = address;
    
}

Person.prototype.eating = function() {
    console.log(this.name + "在吃饭~")
}

Person.prototype.running = function() {
    console.log(this.name + "在跑步~");
}


var p1 = new Person("why", 18, 1.77, "北京市");
var p2 = new Person("kobe", 20, 1.98, "洛杉矶");

p1.eating();
p2.eating();