var name = "why"

foo(123)
function foo(num) {
  console.log(m);
  var m = 10;
  var n = 20;
  console.log("foo");
}


var GlobalObject = {
  String: '类',
  window: GlobalObject,
  name: undefined,
  foo: 0xa000,
}


/**
 * js 引擎会在编译阶段，给函数创建存储空间：0xa000
 * 1. [[scope]]: parent scope
 * 2. 函数的执行体（代码块）
 * 
 * js 引擎执行阶段：
 * 在 ECStack 调用栈中，创建函数执行上下文（Function Execution Context，FEC）
 * 创建 AO对象（Action Object），用于存放函数的全局变量
 * AO 中 变量存在于 作用域链 AO + GO
 * 
 * 执行完成后，将 FEC 移出 ECStack
 */


