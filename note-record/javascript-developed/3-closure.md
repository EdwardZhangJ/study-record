# 闭包

## 一、JS 中函数是一等公民

在 JavaScript 中，函数是非常重要的，并且是一等公民

- 意味着函数的使用是非常灵活的

```js
function foo(aaa) {
  aaa()
}
function bar() {
  console.log('bar')
}
foo(bar)
```

```js
function clac(num1, num2, calcFun) {
  console.log(calcFun(num1, num2))
}

function add(num1, num2) {
  return num1 + num2
}
function sub(num1, num2) {
  return num1 - num2
}
function mul(num1, num2) {
  return num1 * num2
}

clac(1, 2, add)
```

js 语法允许函数内部在定义函数

- 函数可以作为另一个函数的参数，也可以作为另外一个函数的返回值来使用

```js
function foo() {
  function bar() {
    console.log('bar')
  }
  return bar
}
var fn = foo()
fn()
```

```js
function makeAdder(count) {
  function add(num) {
    return count + num
  }
  return add
}
var add5 = makeAdder(5)
add5(6)
var add10 = makeAdder(10)
var add100 = makeAdder(100)
```

编写高阶函数

- 把一个函数如果接收另外的函数作为参数，或者将函数作为返回值返回的函数称为高阶函数

![高阶函数的执行过程](https://gitee.com/edward_west/image-store/raw/master/study-frontend/javascript-developed/03-closure/higher-order-functions-execution.png)

使用内置的高阶函数

### 1.1 数组中的高阶函数

- filter: 过滤

```js
var numbs = [10, 5, 15, 100, 155]
var newNumbs = numbs.filter((item, index, arr) => {
  return item % 2 === 0
})
console.log(newNumbs)
```

- forEach：迭代

```js
numbs.forEach(function (item) {
  console.log(item)
})
```

- find/findIndex：查找

```js
var friends = [
  {name: 'why', age: 18},
  {name: 'kobe', age: 48},
  {name: 'james', age: 28},
  {name: 'curry', age: 30},
]
var result = friends.find(function (item) {
  return item.name === 'james'
})
console.log(result)

var friendIndex = numbs.findIndex(function (item) {
  return item.name === 'james'
})
console.log(friendIndex)
```

- reduce: 累加

```js
var total = 0
for(var i = 0; i < numbs.length; i++) {
  total += numbs[i]
}
val total = numbs.reduce(function(preValue, item) {
  return preValue + item
}, 0)
```

## 二、闭包

### 2.1 JS中闭包的定义

计算机科学中：(维基百科)

- 又称为 词法闭包或函数闭包
- 是在支持**头等函数**的编程语言中，实现词法绑定的一种技术
- 闭包在实现上是一个结构体，存储了一个函数和一个关联的环境
- 闭包跟函数最大的区别在于，当捕捉闭包的时候，它的自由变量会在捕捉时被确定，这样即使脱离了捕捉时的上下文，也能照常运行

JavaScript中：

- 一个函数和对其周围状态(**词法环境**)的引用捆绑在一起，这样的组合就是闭包
- 即，闭包让你可以在一个内层函数中访问器外层函数的作用域
- 在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来

总结：

- 一个普通的函数 function，如果它可以访问外层作用域的自由变量，那么这个函数就是一个闭包
- 从广义的角度来说：JavaScript 中的函数都是闭包
- 从狭义的角度来说：JavaScript 中一个函数，如果访问了外层作用域的变量，那么它是一个闭包

```js
function foo() {
  var name = 'foo'
  function bar() {
    console.log('bar', name)
  }
  return bar 
}
var fn = foo()
fn()
```

### 2.2 闭包的内存泄露

![函数执行过程中内存变化](https://gitee.com/edward_west/image-store/raw/master/study-frontend/javascript-developed/03-closure/memory-closure-execution.png)

### 2.3 闭包内存泄露案例

- 浏览器中查看闭包的内存变化：*闭包的内存泄露测试*
- **V8引擎对晓得数字类型进行操作，将其转换为Smi类型数据，其占用空间大小由 原来 8byte -> 4byte。**

```js
function createArrayFn() {
  // 占用多的内存空间
  // int占用4个字节
  // 共占用 4byte * 1024 * 1024 = 4M
  var arr = new Array(1024 * 1024).fill(1)
  return function (params) {
    console.log(arr.length)
  }
}

var arrayFns = []
for (var i = 0; i < 100; i++) {
  setTimeout(() => {
    arrayFns.push(createArrayFn())
  }, i * 100);
}

setTimeout(() => {
  for (var i = 0; i < 50; i++) {
    setTimeout(() => {
      arrayFns.pop()
    }, i * 100);
  }
}, 11000);
```

- 闭包引起的自由变量销毁

```js
function foo() {
  var name = 'why'
  var age = 18
  function bar() {
    console.log(name)
  }
  return bar
}

var fn = foo()
fn()
```
