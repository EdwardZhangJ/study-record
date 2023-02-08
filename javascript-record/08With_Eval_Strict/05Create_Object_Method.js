/**
 * @Create_Object_Method.js
 * @description 创建对象的方式
 * @author zhangjun
 * @update (zhangjun 2021/12/28)
 **/

// 创建一个对象，对某一个人进行抽象(描述)

// 1. 通过 new  Object() 创建
var obj = new Object();
obj.name = "why";
obj.age = 16;
obj.height = 1.88;
obj.running = function() {
    console.log(this.name + "在跑步~");
}

// 2. 字面量形式

var info = {
    name: "kobe",
    age: 40,
    height: 1.98,
    eating: function() {
        console.log(this.name + '在吃饭~');
    }
}