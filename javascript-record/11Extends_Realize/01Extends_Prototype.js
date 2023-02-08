/**
 * @01Extends_Prototype.js
 * @description 原型式 继承
 * @author zhangjun
 * @update (zhangjun 2022/1/12)
 **/

var obj = {
    name: "why",
    age: 17
}

// 方法一
function createObject(o) {
    var newObj = {};
    Object.setPrototypeOf(newObj, o);
    return newObj
}

// 方法二
function createObject2(o) {
    function Fn() {}
    Fn.prototype = o;
    var newObj = new Fn();
    return newObj;
}



var info = createObject(obj);
console.log(info)
console.log(info.__proto__);

//  方法三
var info2 = createObject2(obj);
var info3 = Object.creat(obj);
