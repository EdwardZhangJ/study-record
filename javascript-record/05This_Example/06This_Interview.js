/**
 * @06This_Interview.js
 * @description
 * @author zhangjun
 * @update (zhangjun 2021/11/24)
 **/

// 面试题一
// var name = "window";
// var person = {
//     name: "person",
//     sayName: function () {
//         console.log(this.name)
//     }
// };
// function sayName() {
//     var sss = person.sayName;
//     sss(); // window：独立函数调用
//     person.sayName(); // person：隐式调用
//     (person.sayName)(); // person：间接函数引用，还是隐式调用
//     (b = person.sayName)() // window：多了赋值表达式，变为独立函数调用
// }
// sayName();

// 面试题二
// var name = "window";
// var person1 = {
//     name: "person1",
//     foo1: function () {
//         console.log(this.name)
//     },
//     foo2: () => console.log(this.name),
//     foo3: function () {
//         return function () {
//             console.log(this.name)
//         }
//     },
//     foo4: function () {
//         return () => {
//             console.log(this.name)
//         }
//     }
// };
// var person2 = { name: 'person2'};

// person1.foo1(); // person1：隐式绑定
// person1.foo1.call(person2); // person2：显示绑定优先级大于隐式绑定

// person1.foo2(); // window 箭头函数未绑定 this; 找上层作用域全局window， Object obj 无作用域
// person1.foo2.call(person2); // window 箭头函数未绑定 this

// person1.foo3()(); // window 独立函数调用
// person1.foo3.call(person2)(); // window 独立函数调用
// person1.foo3().call(person2); // person2 显示绑定

// person1.foo4()(); // person1 箭头函数不绑定 this 上层作用域是 person1
// person1.foo4.call(person2)() // person2 上层作用被显示的绑定到 person2
// person1.foo4().call(person2) // person1 上层作用域是 person1


// 面试题三
// var name = "window";
// function Person (name) {
//     this.name = name;
//     this.foo1 = function () { // 上层作用域为 全局 window
//         console.log(this.name)
//     };
//     this.foo2 = () => console.log(this.name);
//     this.foo3 = function () {
//         return function () {
//             console.log(this.name)
//         }
//     };
//     this.foo4 = function () {
//         return () => {
//             console.log(this.name)
//         }
//     }
// }
//
// var person1 = new Person('person1');
// var person2 = new Person('person2');
//
// person1.foo1(); // person1
// person1.foo1.call(person2); // person2 (显示绑定高于隐式)
//
// person1.foo2(); // person1 (上层作用域中的 this 是 person1 )
// person1.foo2.call(person2); // person1(上层作用域 this 是 person1)
//
// person1.foo3()(); // window (独立函数调用)
// person1.foo3.call(person2)(); // window (独立函数调用)
// person1.foo3().call(person2); // person2
//
// person1.foo4()(); // person1 上层作用域 this 是 person1
// person1.foo4.call(person2)(); // person2 显示绑定，上层作用域是 person2
// person1.foo4().call(person2); // person1 箭头函数不进行绑定，上层作用仍是 person1


// 面试题四
var name = "window";
function Person (name) {
    this.name = name;
    this.obj = {
        name: 'obj',
        foo1: function () {
            return function () {
                console.log(this.name)
            }
        },
        foo2: function () {
            return () => {
                console.log(this.name)
            }
        }
    }
}

var person1 = new Person('person1');
var person2 = new Person('person2');

person1.obj.foo1()(); // window 独立函数调用
person1.obj.foo1.call(person2)(); // window 独立函数调用
person1.obj.foo1().call(person2); // person2

person1.obj.foo2()(); // obj：foo2 调用时绑定的是 obj, 即在上层作用域 obj 中调用
person1.obj.foo2.call(person2)(); // person2：foo2 return 中的箭头 绑定了 person2 之后调用
person1.obj.foo2().call(person2); // obj：foo2 调用时绑定的是 obj
