/**
 * @05Boundle_Arrow_Function.js
 * @description
 * @author zhangjun
 * @update (zhangjun 2021/11/24)
 **/
// 1. 测试箭头函数中的 this 指向
// var name = "why"
// function foo() {
//     console.log(name)
// }
// var foo = () => {
//     console.log(this)
// }
// foo()
// var obj = {foo: foo}
// obj.foo()
// foo.call("abc")

// 2. 应用场景
var obj = {
    data: [],
    getData: function () {
        // 发送网络请求，将结果放到上面 data 属性中
        // 在箭头函数之前的解决方案
        // var _this = this
        // setTimeout(function () {
        //     var result = ["abc", "cba", "nba"];
        //     _this.data = result
        // }, 2000)
        
        // 箭头函数之后, 不绑定 this 直接找上层作用域中的属性值
        setTimeout(() => {
            var result = ["abc", "cba", "nba"];
            this.data = result
        }, 2000)
    }
}

obj.getData()

console.log(obj.data)