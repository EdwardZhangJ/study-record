/**
 * @05Realiza_Currying.js
 * @description 实现函数的柯里化
 * @author zhangjun
 * @update (zhangjun 2021/11/29)
 **/
function add(x, y, z) {
    return x + y + z;
}

function makeAdder(count) {
    return function(num) {
        return count + num
    }
}

function log(date, type, message) {
    console.log(`[${date.getHours()}:${date.getMinutes()}][$${type}]:[${message}]`)
}


// 柯里化函数的实现 hyCurrying
function hyCurrying(fn) {
    function carried(...args) {
        // 判断当前已接收到的参数的个数，和函数本身需要接收的参数是否已经一致了
        // 当前已接收到的参数个数 args.length
        // 函数本身需要接收的参数个数 fn.length
        if(args.length >= fn.length) {
            return fn.apply(this, args)
        } else {
            // 没有达到个数时, 需要返回一个新的函数, 继续来接收 参数
            function carriedInter(...argsInter) {
                return carried.apply(this, args.concat(argsInter))
            }
            return carriedInter
        }
    }
    return carried()
}

var curryAdd = hyCurrying(add)
console.log(add(10, 20, 30))
console.log(curryAdd(10)(20)(30))
console.log(curryAdd(10, 20)(30))
console.log(curryAdd(10, 20, 30))
