# this 四个绑定规则

## 为什么需要 this

- 从某些角度来说，开发中没有`this`，很多的问题也有解决方案
- 但是没有`this`，会让编写代码变得非常不方便

## 一、this 在全局作用域指向

在大多数情况下，`this`都是出现在函数中，在全局作用域下

- 浏览器： `window(globalObject)`
- `Node`环境：`{}`

### 1.1 this 指向什么

`this`在全局作用域下指向浏览器中指向`window`，`Node`环境中指向`{}`

但是在开发中很少直接在全局作用域下使用`this`，通常是在函数中使用

- 所以的函数在被调用时，都会创建一个执行上下文
- 这个上下文记录着函数的调用栈、AO 对象等
- this 也是其中的一条记录

### 1.2 this 到底指向什么

```js
function foo() {
  console.log(this)
}
// 1. 直接调用这个函数
foo()

// 2. 创建一个对象，对象中的函数执行 foo
var obj = {
  name: '1',
  foo: foo,
}

obj.foo()

// 3. apply 调用
foo.apply('abc')
```

- 函数在调用时，`JavaScript`会默认给`this`绑定一个值
- `this`的绑定和定义的位置(编写的位置)没有关系
- `this`的绑定和调用方式以及调用的位置有关系
- `this`是在运行时被绑定的

## 二、 this 绑定规则

- 默认绑定
- 隐式绑定
- 显示绑定: apply、call、bind
- new 绑定

### 2.1 默认绑定

独立函数调用，默认绑定

```js
function foo() {
  console.log(this) // window 对象
}
foo()
```

```js
function foo1() {
  console.log(this) // window 对象
}
function foo2() {
  console.log(this) // window 对象
  foo1()
}
function foo3() {
  console.log(this) // window 对象
  foo2()
}
foo3()
```

```js
var obj = {
  name: 'why',
  foo: function () {
    console.log(this)
  },
}
var bar = obj.foo
bar() // window 对象
```

```js
function foo() {
  console.log(this) // window 对象
}
var obj = {
  name: 'why',
  foo: foo,
}
var bar = obj.foo
bar()
```

### 2.2 隐式绑定

另外一种比较常见的调用方式是通过某个对象进行调用的

- 即它的调用位置中，是通过某个对象发起的函数调用

```js
var obj = {
  name: 'why',
  foo: foo,
}
obj.foo() // obj 对象
```

```js
var obj = {
  name: 'why',
  eating: function () {
    console.log(this.name + '在吃东西')
  },
  running: function () {
    console.log(obj.name + '在跑步')
  },
}
var fn = obj.eating
fn() // 取 window 对象里的 name 属性
```

```js
var obj1 = {
  name: 'obj1',
  foo: function () {
    console.log(this)
  },
}
var obj2 = {
  name: 'obj2',
  bar: obj1.foo,
}
obj2.bar() // 通过 obj2 绑定调用，此时打印 obj2 对象
```

### 2.3 显示绑定

隐式绑定有一个前提：

- 必须在调用的对象内部有一个对函数的引用(比如一个属性`foo`)
- 如果没有这样的引用，在进行调用时，会报找不到该函数的错误
- 正是通过这个引用，间接的将`this`绑定到这个对象上

如果不希望在对象内部包含这个函数的引用，同时又希望在这个对象上进行强制调用，该怎么做呢

- `JavaScript`所有的函数都可以使用`call`和`apply`方法(和`Prototype`有关)
  - 区别：第一个参数是相同的，后面的参数`apply`为数组，`call`为参数列表

```js
function sum(num1, num2) {
  console.log(num1 + num2, this)
}
sum(20, 30) // 绑定的是 window 对象
sum.call('call', 20, 30) // 绑定 call
sum.apply('apply', [20, 30]) // 绑定 apply
```

- 这两个函数的第一个参数都要求是一个对象，为`this`准备的
- 调用这个函数时，会将`this`绑定到这个传入的对象上

`call`和`apply`在执行函数时，是可以明确的绑定`this`，这个绑定规则称之为显示绑定

`bind`：将绑定的对象返回成一个可以调用的函数

- 默认绑定和显示绑定`bind`冲突与：优先级(显示绑定)

```js
// 显式绑定 第三种方法  bind
function foo() {
  console.log(this)
}
var newFoo = foo.bind('aaa')
// 默认绑定和显式绑定 bind 冲突：优先级(显式绑定)
newFoo()
newFoo()
newFoo()
```

### 2.4 new 绑定

`JavaScript`中的函数可以当作一个类的构造函数来使用，即 使用`new`关键字

使用 new 关键字来调用函数，会执行如下操作

- 创建一个全新的的对象
- 这个新对象会被执行`prototype`连接
- 这个新对象会绑定到函数调用的`this`上，(`this`绑定在这个步骤完成)
- 如果函数没有返回其他对象，表达式会返回这个新对象

```js
function Person(name, age) {
  this.name = name
  this.age = age
}
var p1 = new Person('why', 17)
console.log(p1.name, p1.age)
var p2 = new Person('kobe', 19)
```

## 三、内置函数的 this 绑定

有些时候会调用 JavaScript 的内置函数，或者一些第三方库中的内置函数

- 这些函数会要求我们传入另外一个函数
- 并不会显示的调用这些函数，且 JavaScript 内部或者第三方库内部会帮助我们执行
- 这些函数中的 this 又是如何绑定的呢

### 常见的内置函数调用

- setTimeout

```js
function hySetTimeout(fn, duration) {
  fn.call('abc')
}
hySetTimeout(function () {
  console.log(this) // window 对象
}, 3000)
setTimeout(function () {
  console.log(this) // window 对象
}, 2000)
```

- 点击事件

```js
const boxDiv = document.querySelector('.box')
boxDiv.onclick = function () {
  console.log(this) // .box 盒子对象
}
boxDiv.addEventListener('click', function () {
  console.log(this) // .box 盒子对象
})
boxDiv.addEventListener('click', function () {
  console.log(this) // .box 盒子对象
})
boxDiv.addEventListener('click', function () {
  console.log(this) // .box 盒子对象
})
```

- 数组操作方法：

```js: forEach、map、filter、find
var names = ['abc', 'cba', 'nba']
names.forEach(function (item) {
  console.log(item, this)
}, 'abc')
names.map(function (item) {
  console.log(item, this)
}, 'cba')
```

## 四、规则优先级

学习了四条规则，接下来开发中只需要去查找函数的调用应用了哪条规则即可，但如果一个函数调用位置应用了多条规则，如何判断其优先级

- **默认绑定的优先级最低**
- **显示绑定的优先级高于隐式绑定**

```js
var obj = {
  name: 'obj',
  foo: function () {
    console.log(this)
  },
}
obj.foo()
obj.foo.call('abc')
obj.foo.apply('abc')

// bind绑定优先级高于隐式绑定
function foo() {
  console.log(this)
}
var obj = {
  name: 'obj',
  foo: foo.bind('aaa'),
}
obj.foo()
```

- **new 绑定优先级高于隐式绑定，显示绑定**

```js
// new绑定高于隐式绑定
var obj = {
  name: 'obj',
  foo: function () {
    console.log(this)
  },
}
var f = new obj.foo()

// new绑定高于显示绑定
// new 关键字不能和 apply/call 一起使用
function foo() {
  console.log(this)
}
var bar = foo.bind('aaa')
var obj = new bar()
```

new 绑定 > 显示绑定(apply/call/bind) > 隐式绑定(obj.foo()) > 默认绑定(独立函数调用)

## 五、this 规则之外

### 5.1 忽略显示绑定

apply/call/bind：当传入 null/undefined 时,自动将 this 绑定成全局对象

```js
function foo() {
  console.log(this)
}
foo.apply({})
foo.apply(null)
foo.apply(undefined)
var bar = foo.bind(null)
bar()
```

### 5.2 间接函数引用

另一种情况，创建一个函数的间接引用，这种情况使用默认绑定规则

- 赋值(obj2.foo = obj1.foo)的结果是 foo 函数
- foo 函数被直接调用，那么是默认绑定

```js
obj2.bar = obj1.foo
obj2.bar() // 返回 obj2 对象
;(obj2.bar = obj1.foo)() // 独立函数调用 返回 window 对象
```

### 5.3 箭头函数

- 测试箭头函数中的 this 指向

```js
var name = 'why'
function foo() {
  console.log(name)
}
var foo = () => {
  console.log(this)
}
foo()
var obj = {foo: foo}
obj.foo() // window
foo.call('abc') // window
```

- 应用场景

```js
var obj = {
  data: [],
  getData: function () {
    // 发送网络请求，将结果放到上面 data 属性中
    // 在箭头函数之前的解决方案
    // var _this = this
    // setTimeout(function () {
    //   var result = ["abc", "cba", "nba"];
    //   _this.data = result
    // }, 2000)

    // 箭头函数之后, 不绑定 this 直接找上层作用域中的属性值
    setTimeout(() => {
      var result = ['abc', 'cba', 'nba']
      this.data = result
    }, 2000)
  },
}
```

## 六、箭头函数

箭头函数是 ES6 之后增加的一种编写函数的方法，并且它比函数表达式要更加简洁

- 箭头函数不会绑定`this`、`arguments` 属性
- 箭头函数不能作为构造函数来使用(不能和`new`一起来使用，会抛出错误)

### 6.1 箭头函数的使用

- 编写箭头函数
  - () 参数
  - => 箭头
  - {} 函数的执行体

```js
var foo = (num1, num2, num3) => {
  console.log(num1, num2, num3)
  var result = num1 + num2 + num3
  console.log(result)
}
```

- 简写一：如果参数只有一个，() 可以省略

```js
numbers.forEach((item) => {
  console.log(item)
})
```

- 简写二：如果函数执行体只有一行代码，那么 {} 也可以省略
  - **强调：并且它会默认将这行代码的执行结果作为返回值**

```js
numbers.forEach((item) => console.log(item))
numbers.filter((item) => item % 2 === 0)
```

- 简写三：如果一个箭头函数，只有一行代码，并且返回一个对象，此时如何简写

```js
var bar = () => ({name: 'why', age: 16})
```

## 七、this 面试题

```js
var person = {
  name: 'person',
  sayName: function () {
    console.log(this.name)
  },
}
function sayName() {
  var sss = person.sayName
  sss() // window：独立函数调用
  person.sayName() // person：隐式调用
  person.sayName() // person：间接函数引用，还是隐式调用
  ;(b = person.sayName)() // window：多了赋值表达式，变为独立函数调用
}
sayName()
```

```js
var name = 'window'
var person1 = {
  name: 'person1',
  foo1: function () {
    console.log(this.name)
  },
  foo2: () => console.log(this.name),
  foo3: function () {
    return function () {
      console.log(this.name)
    }
  },
  foo4: function () {
    return () => {
      console.log(this.name)
    }
  },
}
var person2 = {name: 'person2'}

person1.foo1() // person1：隐式绑定
person1.foo1.call(person2) // person2：显示绑定优先级大于隐式绑定

person1.foo2() // window 箭头函数未绑定 this; 找上层作用域全局window， Object obj 无作用域
person1.foo2.call(person2) // window 箭头函数未绑定 this

person1.foo3()() // window 独立函数调用
person1.foo3.call(person2)() // window 独立函数调用
person1.foo3().call(person2) // person2 显示绑定

person1.foo4()() // person1 箭头函数不绑定 this 上层作用域是 person1
person1.foo4.call(person2)() // person2 上层作用被显示的绑定到 person2
person1.foo4().call(person2) // person1 上层作用域是 person1
```

```js
var name = 'window'
function Person(name) {
  this.name = name
  this.foo1 = function () {
    // 上层作用域为 全局 window
    console.log(this.name)
  }
  this.foo2 = () => console.log(this.name)
  this.foo3 = function () {
    return function () {
      console.log(this.name)
    }
  }
  this.foo4 = function () {
    return () => {
      console.log(this.name)
    }
  }
}
var person1 = new Person('person1')
var person2 = new Person('person2')

person1.foo1() // person1
person1.foo1.call(person2) // person2 (显示绑定高于隐式)

person1.foo2() // person1 (上层作用域中的 this 是 person1 )
person1.foo2.call(person2) // person1(上层作用域 this 是 person1)

person1.foo3()() // window (独立函数调用)
person1.foo3.call(person2)() // window (独立函数调用)
person1.foo3().call(person2) // person2

person1.foo4()() // person1 上层作用域 this 是 person1
person1.foo4.call(person2)() // person2 显示绑定，上层作用域是 person2
person1.foo4().call(person2) // person1 箭头函数不进行绑定，上层作用仍是 person1
```

```js
var name = 'window'
function Person(name) {
  this.name = name
  this.obj = {
    name: 'obj',
    foo1: function () {
      return function () {
        console.log(this.name)
      }
    },
    foo2: function () {
      return () => {
        console.log(this.name)
      }
    },
  }
}

var person1 = new Person('person1')
var person2 = new Person('person2')

person1.obj.foo1()() // window 独立函数调用
person1.obj.foo1.call(person2)() // window 独立函数调用
person1.obj.foo1().call(person2) // person2

person1.obj.foo2()() // obj：foo2 调用时绑定的是 obj, 即在上层作用域 obj 中调用
person1.obj.foo2.call(person2)() // person2：foo2 return 中的箭头 绑定了 person2 之后调用
person1.obj.foo2().call(person2) // obj：foo2 调用时绑定的是 obj
```
