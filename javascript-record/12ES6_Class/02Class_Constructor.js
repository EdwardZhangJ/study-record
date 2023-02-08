/**
 * @02Class_Constructor.js
 * @description 类的构造方法
 * @author zhangjun
 * @update (zhangjun 2022/1/12)
 **/

// 类的声明
class Person {
    // 类的构造方法；类有且只有一个构造函数
    // 1. 在内存中创建一个对象
    // 2. 将类的原型 prototype 赋值给创建出来的对象 moni.__proto__
    // 3. 将对象赋值给函数的this: new 绑定 this = moni
    // 4. 执行函数体中的代码
    // 5. 自动返回创建出来的对象
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
}

var p1 = new Person("why", 18);
var p2 = new Person("kobe", 38);
console.log(p1);
console.log(p2);