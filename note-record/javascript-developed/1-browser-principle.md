
# 浏览器原理

主要内容

- v8引擎
- js执行原理

## 一、前置内容介绍

**1. 浏览器的工作原理：**

![浏览器工作原理](https://gitee.com/edward_west/image-store/raw/master/study-frontend/javascript-developed/browser-principle/browser-request-progress.png)

- 静态资源(服务器)：下载`css/javascript`文件
- 输入浏览器地址: 通过`dns`服务器解析

**2. 浏览器内核：**

浏览器内核指的是浏览器的排版引擎，也称为浏览器引擎、页面渲染引擎或样板引擎。可分为：

- `Gecko`: 早期被*Netscape*和*Mozilla Firefox*浏览器使用
- `Trident`：微软开发，被*IE4~IE11*浏览器使用，但*Edge*浏览器转向Blink
- `Webkit`：苹果基于`KHTML`开发、开源的
- `Blink`：Webkit的一个分支，Google开发的，应用于Google Chrome、Edge、Opera等

**3. 浏览器渲染过程：**

![渲染过程](https://gitee.com/edward_west/image-store/raw/master/study-frontend/javascript-developed/browser-principle/browser-render-progress.png)
执行过程中，`HTML`解析遇到了`JavaScript`标签，会怎么做？

- 会停止解析`HTML`，去加载和执行`JavaScript`代码

那么，`JavaScript`代码由谁来执行呢

- **JavaScript引擎**

## 二、认识JavaScript引擎

常见的JavaScript引擎有哪些：

- SpiderMonkey：第一款JavaScript引擎，
- Chakra：微软开发，用于IT浏览器
- JavaScriptCore：Webkit中的JavaScript引擎，Apple公司开发
- V8: Google开发的强大的JavaScript引擎

### 2.1 浏览器内核和JS引擎的关系

![关系图](https://gitee.com/edward_west/image-store/raw/master/study-frontend/javascript-developed/browser-principle/browser-render-progress.png)

以WebKit为例，WebKit事实上由两部分组成

- WebCore：负责HTML解析、布局、渲染等相关工作
- JavaScriptCore：解析、执行JavaScript代码

### 2.2 V8引擎原理

V8 引擎定义：

- V8是用C++编写的Google开源高性能JavaScript和WebAssembly引擎，用于Google和Node.js等
- V8可以独立运行，也可以嵌入到任何C++应用程序中

![原理图](https://gitee.com/edward_west/image-store/raw/master/study-frontend/javascript-developed/browser-principle/v8-engine-priciple.png)

V8引擎的架构：

- Parse模块：会将JavaScript代码转换成AST(抽象语法树)，因为解释器并不直接认识 JavaScript代码
  - 词法分析、语法分析
  - AST抽象语法树： [推荐网址](https://astexplorer.net/)
  - [Parse的V8官方文档](https://v8.dev/blog/scanner)
- Ignition模块：是一个解释器，将AST转换成ByteCode(字节码)
  - 同时会收集 TurboFan 优化所需要的信息(比如函数参数的类型信息)
  - 如果函数只调用一次，Ignition 会执行解释后的ByteCode
  - [Ignition的V8官方文档](https://v8.dev/blog/ignition-interpreter)
- TurboFan模块：是一个编译器，可以将字节码编译为CPU可以直接执行的机器码
  - 如果函数被多次调用，那么就会标记为*热点函数*，那么就会经过**TurboFan转换成优化的机器码，提高代码的执行性能。**
  - **机器码也会被还原为ByteCode**，因为如果后续执行函数的过程中，**类型发生了变化**(比如sum函数原来执行的是number类型，后来执行变成了string类型)，之前优化的机器码不能正确的处理运算，就会逆向的转换成字节码
  - [TurboFan的V8官方文档](https://v8.dev/blog/turbofan-jit)

## 三、JavaScript的执行过程

1. 代码被解析
  v8引擎内部会帮助我们创建一个对象(GlobalObject -> GO)

2. 运行代码
  2.1 v8为了执行代码，v8引擎内部会有一个执行上下文栈(Execution Context Stack，ECStack)(函数调用栈)
  2.2 因为执行的是全局代码，为了全局代码能够正常的执行，需要创建全局执行上下文(Global Execution Context)(全局代码需要被执行才会被创建)
