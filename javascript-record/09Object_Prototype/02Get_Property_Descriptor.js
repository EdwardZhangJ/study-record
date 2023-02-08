/**
 * @02Get_Property_Descriptor.js
 * @description
 * @author zhangjun
 * @update (zhangjun 2021/12/29)
 **/

/**
 * @01Define_Multiple_Properties.js
 * @description
 * @author zhangjun
 * @update (zhangjun 2021/12/29)
 **/
var obj = {
    // 私有属性（js 里面是没有严格意义的私有属性）
    _age: 18,
    _eating: function () {
    
    }
    
    // 另一种写法
    // set age(value) {
    //     this._age = value;
    // }
    // get age() {
    //     return this._age;
    // }
};

Object.defineProperties(obj, {
    name: {
        configurable: true,
        enumerable: true,
        writable: true,
        value: "why"
    },
    age: {
        configurable: false,
        enumerable: false,
        get: function () {
            return this._age;
        },
        set: function (val) {
            this._age = val;
        }
    }
})

// console.log(obj);
// console.log(obj.age)

console.log(Object.getOwnPropertyDescriptor(obj, "name"));
console.log(Object.getOwnPropertyDescriptors(obj));