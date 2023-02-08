/**
 * @04Currying_Useful.js
 * @description 函数柯里化的作用， 函数单一化职责
 * @author zhangjun
 * @update (zhangjun 2021/11/29)
 **/

// 1. 函数 单一化职责
/*function add(x, y, z) {
    x = x + 2;
    y = y * 2;
    z = z * z;
    return x + y + z;
}

console.log(add(10, 20, 30))

function sum(x) {
    x = x + 2
    
    return function(y) {
        y = y * 2
        
        return function(z) {
            z = z * z
            
            return x + y + z
        }
    }
}

console.log(sum(10)(20)(30))*/

// 2.1 逻辑复用 例1

/*function makeAdder(count) {
    // 逻辑复用 代码
    
    return function(num) {
        return count + num
    }
}

var result = makeAdder(5)(10)

var adder5 = makeAdder(5) // 对 makeAdder(count) 中的逻辑进行复用
console.log(adder5(10))
console.log(adder5(14))
console.log(adder5(1100))
console.log(adder5(555))*/

// 2.2 逻辑复用 例2
function log(date, type, message) {
    console.log(`[${date.getHours()}:${date.getMinutes()}][$${type}]:[${message}]`)
}

log(new Date(), "DEBUG", "查找到 轮播图 bug")
log(new Date(), "DEBUG", "查找到 菜单 bug")
log(new Date(), "DEBUG", "查找到 数据 bug")

console.log("-----------")


// 柯里化优化

var log1 = date => type => message => {
    console.log(`[${date.getHours()}:${date.getMinutes()}][$${type}]:[${message}]`)
}

// 进行定制化函数
// 如果现在打印的都是当前时间
var nowLog = log1(new Date())
nowLog("DEBUG")("查找到轮播图的 bug")
nowLog("FETURE")("新增了添加用户的功能")

console.log("-----------")

var nowAndDebugLog = log1(new Date())("DEBUG")
nowAndDebugLog("查找到轮播图bug")
nowAndDebugLog("查找到轮播图bug")
nowAndDebugLog("查找到轮播图bug")
nowAndDebugLog("查找到轮播图bug")

console.log("-----------")

var nowAndFetureLog = log1(new Date())("FETURE")
nowAndFetureLog("添加新功能--")
nowAndFetureLog("添加新功能--")
nowAndFetureLog("添加新功能--")