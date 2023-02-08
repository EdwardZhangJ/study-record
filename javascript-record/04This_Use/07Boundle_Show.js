// 显式绑定 第三种方法  bind
function foo() {
  console.log(this)
}

var newFoo = foo.bind('aaa')
// 默认绑定和显式绑定 bind 冲突：优先级(显式绑定)
newFoo()
newFoo()
newFoo()
