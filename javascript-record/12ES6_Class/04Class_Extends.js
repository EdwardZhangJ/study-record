/**
 * @04Class_Extends.js
 * @description class 实现 继承
 * @author zhangjun
 * @update (zhangjun 2022/1/13)
 **/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    running() {
        console.log(this.name + ' running~');
    }
    eating() {
        console.log(this.name + ' eating~');
    }
    
    personMethod() {
        console.log("处理逻辑1");
        console.log("处理逻辑2");
        console.log("处理逻辑3");
    }
    
    static staticMethod() {
        console.log('静态方法');
    }
}

// Student 称之为 子类（派生类）
class Student extends Person {
    // JS 引擎在解析子类时要求：如果有实现继承
    // 子类的构造方法中，在使用 this 之前，必须调用 super()
    constructor(name, age, sno) {
        super(name, age); // 构造方法的继承
        this.sno = sno;
    }
    
    studying() {
        console.log(this.name + ' studying~');
    }
    
    // 方法的重写
    running () {
        console.log("Student " + this.name + " running~");
    }
    
    personMethod() {
        // 重构方法
        super.personMethod();
        
        console.log("处理逻辑4");
        console.log("处理逻辑5");
        console.log("处理逻辑6");
    }
    
    static staticMethod() {
        // 重构静态代码
        super.staticMethod();
    
        console.log('子类 静态方法')
    }
}

var stu = new Student("why", 18, 111);
console.log(stu);

// console.log(Object.getOwnPropertyDescriptors(stu.__proto__));
// console.log(Object.getOwnPropertyDescriptors(stu.__proto__.__proto__));

stu.running();
stu.eating();

stu.personMethod();

Student.staticMethod();