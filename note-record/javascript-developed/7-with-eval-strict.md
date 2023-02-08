# JavaScript 补充知识

## with 语句

可以形成自己的作用域

- 不推荐使用，可能是混淆错误和兼容性问题的根源

```js
var message = 'Hello World'
var obj = {name: 'why', age: '18', message: 'obj message'}
function foo() {
  function bar() {
    with (obj) {
      console.log(message)
      console.log('------')
    }
  }
  bar()
}
foo() // obj message
```

## eval 函数

```js
var jsString = 'var message = "Hello World";console.log(message);';
eval(jsString);
```

- 不建议在开发中使用 eval
  - eval 代码可读性非常的差
  - eval 是一个字符串，有可能在执行的过程中被刻意篡改，可能造成被攻击的风险
  - eval 的执行必须经过JS解释器，不能被JS引擎优化

## strict 严格模式

- 是一种具有限制性的JavaScript模式，从而使代码脱离了 "懒散(sloppy)模式"
- 支持严格模式的浏览器在检测到代码中有严格模式时，会以更加严格的方式对代码进行检测和执行

严格模式对正常的JavaScript语义进行了一些限制：

- 严格模式通过**抛出错误**来消除一些原有的**静默`(silent)`** 错误
- 严格模式让**JS引擎在执行代码时可以进行更多的优化**(不需要对一些特殊的语法进行处理)
- 严格模式禁用了**在`ECMAScript`未来版本中可能会定义的一些语法**

### 开启严格模式

严格模式支持粒度化的迁移

- 可以支持在js文件中开启严格模式
- 也支持对某一个函数开启严格模式

### 严格模式限制

- 禁止意外创建全局变量
- 不允许函数由相同的参数名称
- 静默错误
- 不允许使用原先的八进制格式 0123
- with语句不允许使用
- eval函数不会向上引用变量
- 严格模式下的this：
  - 自执行函数会指向 undefined
  - setTimeout 中的this 指向 window
  - 通过 fn.apply(this => window)
