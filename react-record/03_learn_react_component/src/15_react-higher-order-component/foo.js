function foo() {
  console.log('foo func');


}

function foo2(fn) {
  console.log('foo2 function');
  setTimeout(() => {
    fn()
  }, 2000);
}

foo2(foo)
// 高阶函数

function  foo3() {
  function bar() {
    console.log('bar function');
  }

  return bar
}

const bar = foo3()
bar()
