/**
 * @06ES6_Transform_ES5_Extends.js
 * @description  ES6 转 ES5 继承
 * @author zhangjun
 * @update (zhangjun 2022/1/18)
 **/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    eating() {
        console.log(this.name + ' eating~');
    }
}

class Student extends Person {
    constructor (name, age, sno) {
        super(name, age);
        this.sno = sno;
    }
    
    studying() {
        console.log(this.name + " studying~");
    }
}



// babel 转换之后的代码
"use strict";

function _typeof(obj) {
    "@babel/helpers - typeof";
    return (
        (_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (obj) {
                    return typeof obj;
                }
                : function (obj) {
                    return obj &&
                    "function" == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                        ? "symbol"
                        : typeof obj;
                }),
            _typeof(obj)
    );
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: { value: subClass, writable: true, configurable: true }
    });
    Object.defineProperty(subClass, "prototype", { writable: false });
    if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
    _setPrototypeOf =
        Object.setPrototypeOf ||
        function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
        };
    return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived),
            result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}

function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    } else if (call !== void 0) {
        throw new TypeError(
            "Derived constructors may only return object or undefined"
        );
    }
    return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    }
    return self;
}

function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
        );
        return true;
    } catch (e) {
        return false;
    }
}

function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
        };
    return _getPrototypeOf(o);
}

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

var Person = /*#__PURE__*/ (function () {
    function Person(name, age) {
        _classCallCheck(this, Person);
        
        this.name = name;
        this.age = age;
    }
    
    _createClass(Person, [
        {
            key: "eating",
            value: function eating() {
                console.log(this.name + " eating~");
            }
        }
    ]);
    
    return Person;
})();

var Student = /*#__PURE__*/ (function (_Person) {
    _inherits(Student, _Person);
    
    var _super = _createSuper(Student);
    
    function Student(name, age, sno) {
        var _this;
        
        _classCallCheck(this, Student);
        
        _this = _super.call(this, name, age);
        _this.sno = sno;
        return _this;
    }
    
    _createClass(Student, [
        {
            key: "studying",
            value: function studying() {
                console.log(this.name + " studying~");
            }
        }
    ]);
    
    return Student;
})(Person);

var stu = new Student()

// Super: Person
// argument: ["why", 19]
// NewTarget: Student
// 会通过Super 创建出来一个实例，但是这个实例的原型 constructor 指向的是 NewTarget
// 会通过 Person 创建出一个实例，但是这个实例的原型 constructor 指向的是 Person
// Reflect.construct(Super, argument, NewTarget);