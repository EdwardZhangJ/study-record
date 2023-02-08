# 函数式编程

## 一、理解 JavaScript 纯函数

函数式编程有一个非常重要的概念叫**纯函数**，JavaScript 符号**函数式编程的范式**，所以也有纯函数的概念

- 在`react`开发中**纯函数是被多次提及**的
- 比如 **`react`中组件就被要求是一个纯函数**，**redux 中有一个`reducer`的概念**，也是要求必须是一个纯函数
- **掌握纯函数对于理解很多框架设计**有帮助

**纯函数的维基百科定义：**

- 在程序设计中，若一个函数符合以下条件，那么这个函数被称为纯函数
- 此函数**在相同的输入值时**，需**产生相同的输出**
- 函数的**输出和输入以外的其他隐藏信息或状态无关**，也和**由 I/O 设备产生的外部输出**无关
- 该函数**不能有语义上可观察的函数副作用**，诸如 **"触发事件"，使输出设备输出，或更改输出值以外物件的内容**等

即：

- **确定的输入，一定会产生确定的输出**
- **函数在执行过程中，不能产生副作用**

### 1.1 副作用的理解

副作用(side effect)表示**在执行一个函数**时，除了**返回函数值**之外，还**对调用函数产生了附加的影响**，比如**修改了全局变量，修改参数或者改变外部的存储**

- **纯函数在执行的过程中就是不能产生这样的副作用**

### 1.2 副作用案例

- slice/splice
- slice 只要给它传入一个 start/end, 那么对于同一个数组来说, 它会给我们返回确定的值
- splice 在执行时, 会修改掉原来调用的数组对象本身, 该修改操作就是产生的副作用

```js
var names = ['abc', 'cba', 'nba', 'dna']
var newNames = names.slice(0, 3)

var newNames2 = names.splice(2)
console.log(newNames2)
```

### 1.3 纯函数的优势

- 可以**安心的编写**和**安心的使用**
- 写的时候保证了函数的纯度，只是**单纯实现自己的业务逻辑**，**不需要关系传入的内容**是如何获得的或者**依赖其他的外部变量**是否已经发生了修改
- 用的时候，确定你**的输入内容不会被任意篡改**，并且**自己确定的输入**，一定会**有确定的输出**

## 二、JavaScript 柯里化

柯里化也是属于函数式编程里面一个非常重要的概念

- 是把接收多个参数的函数，变成接收一个单一参数的函数，并且返回接收余下的参数，而且返回结果的新函数的技术
- 柯里化声称 "如果你固定某些参数，你将得到接收余下参数的一个函数"

即：

- 只传递给函数一部分参数来调用它，让它返回一个函数去处理剩余的参数
- 这个过程称之为柯里化

```js
// 将 add 函数转换为 sum 函数的过程称之为 柯里化
function add(x, y, z) {
  return x + y + z
}
var result = add(10, 20, 30)
function sum(x) {
  return function (y) {
    return function (z) {
      return x + y + z
    }
  }
}
var result1 = sum(10)(20)(30)
// 简写形式
var sum2 = (x) => (y) => (z) => {
  return x + y + z
}
var sum3 = (x) => (y) => (z) => x + y + z // redux thunk 中
```

### 2.1 柯里化的作用

为什么需要有柯里化？其主要作用是：**函数单一化职责、代码逻辑复用**

- 在函数式编程中，往往希望**一个函数处理的问题尽可能的单一**，而**不是将一大堆的处理过程交过一个函数来处理**
- 那么**是否可以将每次传入的参数在单一的函数中进行处理**，处理完成后在**下一个函数中再使用处理后的结果**

```js
function add(x, y, z) {
  x = x + 2
  y = y * 2
  z = z * z
  return x + y + z
}
function sum(x) {
  x = x + 2
  return function (y) {
    y = y * 2
    return function (z) {
      z = z * z
      return x + y + z
    }
  }
}
```

```js
function makeAdder(count) {
  // 逻辑复用 代码
  return function (num) {
    return count + num
  }
}
var result = makeAdder(5)(10)
var adder5 = makeAdder(5) // 对 makeAdder(count) 中的逻辑进行复用
```

```js
function log(date, type, message) {
  console.log(`[${date.getHours()}:${date.getMinutes()}][$${type}]:[${message}]`)
}

log(new Date(), 'DEBUG', '查找到 轮播图 bug')
log(new Date(), 'DEBUG', '查找到 菜单 bug')
log(new Date(), 'DEBUG', '查找到 数据 bug')

// 柯里化优化
var log1 = (date) => (type) => (message) => {
  console.log(`[${date.getHours()}:${date.getMinutes()}][$${type}]:[${message}]`)
}

// 进行定制化函数
// 如果现在打印的都是当前时间
var nowLog = log1(new Date())
nowLog('DEBUG')('查找到轮播图的 bug')
nowLog('FEATURE')('新增了添加用户的功能')

console.log('-----------')

var nowAndDebugLog = log1(new Date())('DEBUG')
nowAndDebugLog('查找到轮播图bug')
nowAndDebugLog('查找到轮播图bug')
nowAndDebugLog('查找到轮播图bug')
nowAndDebugLog('查找到轮播图bug')

console.log('-----------')

var nowAndFeatureLog = log1(new Date())('FEATURE')
nowAndFeatureLog('添加新功能--')
nowAndFeatureLog('添加新功能--')
nowAndFeatureLog('添加新功能--')
```

### 2.2 柯里化函数的实现

```js
function hyCurrying(fn) {
  function carried(...args) {
    // 判断当前已接收到的参数的个数，和函数本身需要接收的参数是否已经一致了
    // 当前已接收到的参数个数 args.length
    // 函数本身需要接收的参数个数 fn.length
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      // 没有达到个数时, 需要返回一个新的函数, 继续来接收 参数
      function carriedInter(...argsInter) {
        // 接收到参数后，需要递归调用 curried 来检查函数的参数个数是否达到
        return carried.apply(this, args.concat(argsInter))
      }
      return carriedInter
    }
  }
  return carried()
}
```

## 三、组合函数

```js
function double(num) {
  return num * 2
}
function square(num) {
  return num ** 2
}
var count = 10
var result = square(double(count))

function composeFn(m, n) {
  return function (count) {
    return n(m(count))
  }
}
var newFn = composeFn(double, square)
console.log(newFn(10))
```

- 组合函数的通用使用，可以传入多个函数进行调用

```js
function hyCompose(...fns) {
  var length = fns.length
  for (var i = 0; i < length; i++) {
    if (typeof fns[i] !== 'function') {
      throw new TypeError('Expect arguments are Function') // 抛出异常
    }
  }
  function compose(...args) {
    var index = 0
    var result = length ? fns[index].apply(this, args) : args
    while (++index < length) {
      result = fns[index].call(this, result)
    }
    return result
  }
  return compose
}
```
