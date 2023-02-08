function foo() {
  console.log('函数被调用了')
}

// foo 直接调用 和 call/apply调用的不同在于 this 绑定的不同
// foo 直接调用指向的是全局对象 (window)

/*
var obj = {
  name: 'obj'
}

// call/apply 可以指定 this 的绑定对象
foo.call(obj)
foo.apply(obj)
foo.apply('aaa')
*/

// call 和 apply 有什么区别？
/*
function sum(num1, num2) {
  console.log(num1 + num2, this)
}
sum(20, 30) // 绑定的是 window 对象
sum.call('call', 20, 30) // 绑定 call
sum.apply('apply', [20, 30]) // 绑定apply
*/

// 3. call 和 apply 在执行函数时，是可以明确的绑定this，这个规则称之为 显式绑定
