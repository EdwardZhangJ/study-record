// a() 返回的是一个匿名函数，作用在 a() 的内部。可以获取到 a()作用域下变量 name 的值。
// 将这个值赋值给 全局作用下的 变量 b，实现了 全局变量下获取局部变量中 变量的值
function a(){
  let name = 'Edward';
  return function(){
    return name;
  }
}

let b = a();
console.log(b());


var name = "The Window";

var object = {
  name : "My Object",

  getNameFunc : function(){
    return function(){
      return this.name;
    };

  }

};

console.log(object.getNameFunc()());