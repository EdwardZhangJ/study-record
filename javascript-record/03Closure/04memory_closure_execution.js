function  foo() {
  var name = 'foo'
  var age = 18
  function bar() {
    console.log(name)
    console.log(age)
  }
  return bar
}
var fn = foo()
fn()

// 解决这类内存泄露，将 fn 置为 null
fn = null
