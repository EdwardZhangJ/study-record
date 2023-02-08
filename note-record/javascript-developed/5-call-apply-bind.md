# JS 函数式编程

## 一、实现 apply、call、bind

主要实现是练习函数、this、调用关系，不会过度考虑一些边界情况

### 1.1 call 函数实现

```js
Function.prototype.hycall = function (thisArg, ...args) {
  // 1. 获取需要被执行的函数
  var fn = this
  // 2. 对thisArg转成对象类型(放置它传入的是非对象类型数据)
  thisArg = thisArg ? Object(thisArg) : window
  // 3. 调用需要执行的函数
  thisArg.fn = fn
  var result = thisArg.fn(...args)
  delete thisArg.fn
  // 4. 将最终结果返回出去
  return result
}
```

### 1.2 apply 函数实现

```js
Function.prototype.hyApply = function (thisArg, argArray) {
  // 1. 获取到需要执行的函数
  var fn = this
  // 2. 处理绑定的 thisArg
  thisArg = thisArg ? Object(thisArg) : window
  // 3. 执行函数
  thisArg.fn = fn
  var result
  // if (!argArray) { // argArray 没有值 第一种方法
  //     result = thisArg.fn()
  // }
  // else {
  //     result = thisArg.fn(...argArray);
  // }
  // argArray = argArray ? argArray : [] // 第二种方法
  argArray = argArray || []
  result = thisArg.fn(...argArray)
  delete thisArg.fn
  // 4. 将最终结果返回出去
  return result
}
```

### 1.3 bind 函数实现

```js
Function.prototype.hyBind = function (thisArg, ...argArray) {
  // 1， 获取到真实需要调用的函数
  var fn = this
  // 此处 this 指代 调用的函数 function foo() { }

  // 2， 绑定 this
  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window

  function proxyFn(...args) {
    // 3. 将函数放到  thisArg 中进行调用
    thisArg.fn = fn
    // 特殊：对两个传入的参数进行合并
    var finalArgs = [...argArray, ...args]
    var result = thisArg.fn(...finalArgs)
    delete thisArg.fn
    // 4. 返回结果
    return result
  }
  return proxyFn
}
```

## 二、认识 arguments

**arguments**是一个对应于 **传递给函数的参数** 的**类数组对象**

### 2.1 arguments 基本使用
