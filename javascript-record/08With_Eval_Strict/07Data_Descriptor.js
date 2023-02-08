/**
 * @06Data_Descriptor.js
 * @description
 * @author zhangjun
 * @update (zhangjun 2021/12/29)
 **/

/**
 * name和 age 虽然没有属性描述符来定义，但是它们也是具备对应的特性
 * value： 赋值的 value
 * configurable： true
 * enumerable：true
 * writable：true
 * @type {{name: string, age: number}}
 */
var obj = {
    name: 'why',
    age: 18
}

// 数据属性描述符： 除了value 的特性默认为 false， value 默认值为 undefined

Object.defineProperty(obj, "address", {
    value: '北京市',
    // 该属性不可删除/也不可重新定义属性描述符
    configurable: false,
    // 该属性是配置对应的属性（address）是否可以枚举
    enumerable: true,
    // 该属性是配置是否可以赋值（写入值）
    writable: false,
})
/*
// 测试是否可 配置（删除）
delete obj.name;
console.log(obj.name);

delete obj.address;
console.log(obj.address);

Object.defineProperty(obj, "address", {
    value: '广州市',
    configurable: true
})

console.log(obj.address);
*/

// 测试是否可枚举
console.log(obj);
for (const objKey in obj) {
    console.log(objKey);
}
console.log(Object.keys(obj));