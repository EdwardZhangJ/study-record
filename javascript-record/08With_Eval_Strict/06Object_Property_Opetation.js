/**
 * @Object_Property_Opetation.js
 * @description
 * @author zhangjun
 * @update (zhangjun 2021/12/29)
 **/

var obj = {
    name: 'why',
    age: 18
};

/*
// 获取属性
console.log(obj.name);

// 属性赋值
obj.name = "kobe"
console.log(obj.name);

// 删除属性
delete obj.name;
console.log(obj)
*/


// 需求： 对属性进行操作时，进行一些限制
// 限制：不允许某一个属性被赋值 / 不允许某个属性被删除 / 不允许某些属性在遍历时被遍历出来

// 属性描述符是一个对象
Object.defineProperty(obj, "height", {
    value: 1.88,
    
})

console.log(obj)