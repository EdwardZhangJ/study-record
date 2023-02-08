// 隐式绑定： object.fn()

/*function foo() {
  console.log(this)
}*/

// 案例一
/*
var obj = {
  name: 'why',
  foo: foo
}

obj.foo() // obj 对象
*/

// 案例二
/*
var obj = {
  name: 'why',
  eating: function() {
    console.log(this.name + '在吃东西')
  },
  running: function() {
    console.log(obj.name + '在跑步')
  }
}
var fn = obj.eating
fn()  // 取 window 对象里的 name 属性
*/

// 案例三
var obj1 = {
  name: 'obj1',
  foo: function() {
    console.log(this)
  }
}

var obj2 = {
  name: 'obj2',
  bar: obj1.foo
}

obj2.bar() // 通过 obj2 绑定调用，此时打印 obj2 对象