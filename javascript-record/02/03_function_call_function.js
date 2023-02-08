var message = 'Hello World'

function foo() {
  console.log(message)
}

function bar() {
  var message = "Hello Bar"
  foo()
}

bar()

/**
 * 函数调用函数
 * 函数的作用域和他定义的位置有关，与调用位置无关
 * 1. 函数调用栈 ECStack
 * 编译阶段创建 GlobalObject
 * 0xa000: foo 函数对象; 包含 [[parent scope]]:GO; 函数体：代码块
 * 0xb000: bar 函数对象; 包含 [[parent scope]]:GO; 函数体：代码块
 * 
 * 函数执行阶段： 
 * foo() 的作用域是 GO  所以打印  'Hello World'
 */

// 编译阶段
var GlobalObject = {
  message: undefined,
  foo: 0xa000,
  bar: 0xb000,
}

// 执行阶段
var GlobalObject = {
  message: 'Hello World',
  foo: 0xa000,
  bar: 0xb000,
}

