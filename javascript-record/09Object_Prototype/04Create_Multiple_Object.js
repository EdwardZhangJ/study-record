/**
 * @04Create_Multiple_Object.js
 * @description 通过字面量形式创建
 * @author zhangjun
 * @update (zhangjun 2021/12/29)
 **/

var p1 = {
    name: '张三',
    age: 16,
    height: 1.66,
    address: "广州市",
    eating: function () {
        console.log(this.name + '在吃饭~');
    },
    running: function () {
        console.log(this.name + '在跑步~');
    }
};

var p2 = {
    name: '李四',
    age: 20,
    height: 1.86,
    address: "北京市",
    eating: function () {
        console.log(this.name + '在吃饭~');
    },
    running: function () {
        console.log(this.name + '在跑步~');
    }
};

var p3 = {
    name: '王五',
    age: 30,
    height: 1.76,
    address: "上海市",
    eating: function () {
        console.log(this.name + '在吃饭~');
    },
    running: function () {
        console.log(this.name + '在跑步~');
    }
};

console.log(p1, p2, p3);