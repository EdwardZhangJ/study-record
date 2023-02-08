/**
 * @03Object_Function.js
 * @description
 * @author zhangjun
 * @update (zhangjun 2021/12/29)
 **/


var obj = {
    name: 'why',
    age: 18,
}

obj.height = 1.88;
obj.address = '广州市';
console.log(obj)

// 禁止对象继续添加新的属性
Object.preventExtensions(obj);
obj.sex = 'male';
console.log(obj)

// 禁止对象配置/删除里面的属性
// for (const objKey in obj) {
//     Object.defineProperty(obj, objKey, {
//         configurable: false,
//     })
// }

Object.seal(obj);

delete obj.name;
console.log(obj.name);

// 让属性不可以修改（writable：false）
Object.freeze(obj);

obj.name = "kobe";
console.log(obj.name);
