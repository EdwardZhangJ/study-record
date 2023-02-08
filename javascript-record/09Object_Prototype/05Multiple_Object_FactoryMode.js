/**
 * @05Multiple_Object_FactoryMode.js
 * @description 用工厂模式创建多个变量
 * @author zhangjun
 * @update (zhangjun 2021/12/29)
 **/

// 工厂模式： 工厂函数
function creatPerson(name, age, height, address) {
    var p = { };
    p.name = name;
    p.age = age;
    p.height = height;
    p.address = address;
    
    p.eating = function () {
        console.log(this.name + '在吃饭~');
    },
    p.running = function ( ) {
        console.log(this.name + '在跑步~');
    }
    return p;
}

var p1 = creatPerson("张三", 18, 1.88, "广州市");
var p2 = creatPerson("李四", 16, 1.66, "北京市");
var p3 = creatPerson("王五", 30, 1.76, "上海市");

// 工厂模式的缺点
console.log(p1, p2, p3);
