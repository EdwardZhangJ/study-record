/* var n = 100;
function foo() {
  n = 200
}

foo()
console.log(n); */


/* function  bar() {
  console.log(m)
  var m = 200
  console.log(m);
}
var m = 100
bar() */


/* var n = 100

function foo2() {
  console.log(n);
}

function foo1() {
  var n = 200
  console.log(n);
  foo2()
}

foo1()
console.log(n); */

// 编译阶段 不管函数体中是否有 return
/* var a = 100
function foo() {
  console.log(a)
  return 
  var a = 100
}
foo() */


/* function foo() {
  // var a = b = 100
  // 转换成下面两行代码
  var a = 100
  b = 100
}

foo()
console.log(a); // not defined
console.log(b); // 100 */

