/**
 * @02Realize_Prototype_Linked.js
 * @description
 * @author zhangjun
 * @update (zhangjun 2021/12/31)
 **/


var obj = {
    name: "why",
    age: 18
}

// [[get]] 操作
// 1. 在当前的对象中查找属性
// 2. 如果没有找到，这个时候回去原型 (__proto__) 对象上查找

obj.__proto__ = {

}

// 原型链
obj.__proto__.__proto__ = {
    address: "广州市"
}



console.log(obj.address);
