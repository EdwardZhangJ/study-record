/**
 * @08Get_Set_Descriptor.js
 * @description
 * @author zhangjun
 * @update (zhangjun 2021/12/29)
 **/

var obj = {
    name: 'why',
    age: 18,
    _address: '北京市'
}

// 存取属性描述符
// 1. 隐藏某个私有属性；希望直接被外界使用和赋值
// 2. 如果希望获取截获某个属性它方位和设置值的过程时，也会使用存取属性描述符（vue2 的响应式原理）
Object.defineProperty(obj, "address", {
    enumerable: true,
    configurable: true,
    // value: "北京市",
    // writable: true,
    // 与 value 和 writable 属性互斥
    get: function () {
        return this._address;
    },
    set: function (value) {
        this._address = value
    }
})

console.log(obj.address);
obj.address = '上海市';
console.log(obj.address);