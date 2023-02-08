# 函数执行-函数作用域链

## 一、函数执行

![函数的执行过程阶段](https://gitee.com/edward_west/image-store/raw/master/study-frontend/javascript-developed/02-function-prototype/function-execution-progress.png)

js引擎会在编译阶段：

- 给函数创建存储空间

js引擎执行阶段：

- 在 ECStack 调用栈中，创建函数执行上下文(Function Execution Context，FEC)，创建 AO(Activation Object)对象，用于存放函数的全局变量
- AO 中变量存在于 作用域链 AO + GO

js引擎执行完成

- 将 FEC 移出 ECStack

嵌套函数的调用与上述单独调用函数类似

![嵌套调用过程图](https://gitee.com/edward_west/image-store/raw/master/study-frontend/javascript-developed/02-function-prototype/function-nest-call.png)

```js
var message = 'Hello World'
function foo() {
  console.log(message)
}
function bar() {
  var message = "Hello Bar"
  foo()
}
bar() // 'Hello World'
```

## 二、 函数执行代码块

```js
var n = 100;
function foo() {
  n = 200
}
foo()
console.log(n); // 200
```

```js
function  bar() {
  console.log(m)
  var m = 200
  console.log(m);
}
var m = 100
bar() // undefined /n 200
```

```js
var n = 100
function foo2() {
  console.log(n);
}
function foo1() {
  var n = 200
  console.log(n);
  foo2()
}
foo1() // 200 \n 100 \n 100
console.log(n);
```

- 编译阶段不管函数体中是否有 return

```js
var a = 100
function foo() {
  console.log(a)
  return 
  var a = 100
}
foo() // undefined
```

- js引擎会默认将 b=100 挂载到全局变量中

```js
function foo() {
  // var a = b = 100
  // 等价转换成下面两行代码
  var a = 100
  b = 100
}
foo()
console.log(a); // not defined
console.log(b); // 100
```

## 四、内存管理

不管什么样的编程语言，在**代码的执行过程中都是需要给它分配内存的**，不同的是**某些编程语言需要手动管理内存**，**某些编程语言可以自动管理内存**

* 不管以什么样的方式来管理内存，内存的管理都会有如下的生命周期
  * 第一步：分配申请需要的内存(申请)
  * 第二步：使用分配的内存(存储)
  * 第三部：不需要使用时，对其进行释放(释放)

* **不同的编程语言对于第一步和第三步会有不同的实现**：
  * 手动：`C、C++`，需要手动管理内存的申请和释放(`malloc`和`free`函数)
  * 自动：比如`Java、JavaScript、Python、Swift、Dart`等，自动帮助我们管理内存

### 4.1 JS 的内存管理

JavaScript 会在定义变量时自动分配内存，但是分配方式不一样：

* JS 对于基本数据类型内存的分配会在执行时，直接在栈空间进行分配
* JS 对于复杂数据类型的内存分配会在堆内存中开辟一块空间，并且将这块空间的指针返回值变量引用

### 4.2 JS的内存管理

因为**内存的大小是有限**的，所以当内存不在需要的时候，需要**对其进行释放**，以便腾出更多的内存空间

在手动管理内存的语言中，需要通过一些方式来释放不再需要的内存，比如 **`free`函数**

* 但是这种管理方式非常的低效，影响编写逻辑的代码的效率
* 对开发者的要求很高，一不小心就会产生内存泄露

所以大部分**现代的编程语言都有自己的垃圾回收机制：**

* 垃圾回收英文：Garbage Collection，简称 GC
* 对于那些**不再使用的对象**，都称之为**垃圾**，需要被**回收**，以释放更多的内存空间
* 语言运行环境，比如 Java 的运行环境 JVM，JavaScript 的运行环境 js 引擎都有内存 **垃圾回收器**
* 垃圾回收器 简称为 GC

GC如何知道哪些对象是不再使用的

* GC算法

### 4.3 常见的GC算法

#### 引用计数法

当一个对象有一个引用指向它时，那么这个对象的引用就 + 1，当一个对象的引用为 0 时，这个对象就可以被销毁掉。

```js
var obj = {name: 'why'}
var info = {name: 'kobe', friend: obj}
var p = {name: 'james', friend: obj}
 
/* retain counter:
    p: 1
    info: 1
    obj: 3
*/
```

引用计数的弊端：循环引用。

```js
var obj1 = {friend: obj2}
var obj2 = {friend: obj1}
```

#### 标记清除

设置一个跟对象(root object)，垃圾回收器会定期从这个根开始，找所有从根开始有引用到的对象，对于那些没由引用到的对象，就认为是不可用的对象

可以解决 循环引用 的问题

![标记清除示意图](https://gitee.com/edward_west/image-store/raw/master/study-frontend/javascript-developed/02-function-prototype/label-clear.png)
