/**
 * @05ES6_Transform_ES5.js
 * @description
 * @author zhangjun
 * @update (zhangjun 2022/1/18)
 **/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    eating() {
        console.log(this.name + ' eating');
    }
}


// babel
"use strict";

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
}


//  /*#__PURE__*/ 纯函数
// webpack 压缩 tree-shaking；无副作用

var Person = /*#__PURE__*/ (function () {
    // 构造函数
    function Person(name, age) {
        _classCallCheck(this, Person);
        
        this.name = name;
        this.age = age;
    }
    
    _createClass(Person, [
        {
            key: "eating",
            value: function eating() {
                console.log(this.name + " eating");
            }
        }
    ]);
    
    return Person;
})();

