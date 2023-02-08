var name = "why"


var num1 = 20
var num2 = 30

var result = num1 + num2

console.log(result)

/**
 * 1. 代码被解析， v8引擎内部会帮助我们创建一个对象 GlobalObject（GO）
 * 2. 执行代码
 *  2.1 v8 为了执行代码, v8 引擎内部会有一个执行上下文栈（Execution Context Stack， ECStack）（函数调用栈）
 *  2.2 因为执行的是全局代码，为了全局代码能够正常的执行，需要创建全局执行上下文（Global Execution Context）（全局代码需要被执行才会被创建）
 */

var globalObject = {
  String: '类',
  Date: '类',
  Function: '函数',
  window: globalObject,
  name: undefined,
  num1: undefined,
  num2: undefined,
  result: undefined
}
