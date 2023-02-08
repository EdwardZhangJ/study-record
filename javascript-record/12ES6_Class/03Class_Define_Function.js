/**
 * @03Class_Define_Function.js
 * @description class 中的定义方法
 * @author zhangjun
 * @update (zhangjun 2022/1/13)
 **/

var names = ["abc", "cba", "nba", "uba"];

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this._address = "广州市";
    }
    
    // 普通实例方法
    // 创建出来的对象进行访问
    eating() {
        console.log(this.name + ' eating~');
    }
    
    running() {
        console.log(this.name + ' running~');
    }
    
    
    // 类的访问器方法
    get address() {
        console.log("访问拦截操作");
        return this._address;
    }
    set address(newAddress) {
        console.log("拦截设置操作");
        this._address = newAddress;
    }
    
    // 类的静态方法
    // 通过类名进行访问 Person.createPerson()
    static randomPerson() {
        var nameIndex = Math.floor(Math.random() * names.length);
        var name = names[nameIndex];
        var age =  Math.floor(Math.random() * 100);
        return new Person(name, age)
    }
}

var p = new Person("why", 18);
p.eating();
p.running();

console.log(p.address);
p.address = "北京市";
console.log(Object.getOwnPropertyDescriptors(Person.prototype))

for(var i = 0; i < 50; i++) {
    console.log(Person.randomPerson());
}