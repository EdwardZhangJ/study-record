// this 指向什么，跟函数所处的位置是没有关系的
// 跟函数被调用的方式有关
function foo() {
  console.log(this);
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
