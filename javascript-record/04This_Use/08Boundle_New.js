// 通过关键字 new 调用一个函数时(构造器),这个时候 this 是在调用这个构造器时创建出来的对象
// this = 创建出来的对象
// 这个绑定过程就是  new 绑定
/*
function Person(name, age) {
  this.name = name
  this.age = age
}

var p1 = new Person( "why", 17)
console.log(p1.name, p1.age)
var p2 = new Person("kobe", 19)
*/

// 获取加班时间数据
function getOvertime() {
  let date = new Date()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let week = date.getDay()
  let Hours = date.getHours()
  let Minutes = date.getMinutes()
  let Seconds = date.getSeconds()
  let endTimeStr = date.getFullYear() + '-' + month + '-' + day + ' ' + Hours + ':' + Minutes + ':' + Seconds
  // let endTimeStr = date.getFullYear() + "-" + month + "-" + day + " " + "19:02:00";
  let startWorkdayStr = date.getFullYear() + '-' + month + '-' + day + ' ' + '17:00:00'
  let startWeekdayStr = date.getFullYear() + '-' + month + '-' + day + ' ' + '09:00:00'
  let startWorkday = new Date(startWorkdayStr)
  let startWeekday = new Date(startWeekdayStr)
  let endTime = new Date(endTimeStr)
  if (week !== 0 || week !== 6) {
    let timeDiff = endTime.getTime() - startWorkday.getTime()
    timeDiff = timeDiff / 1000
    let hour = Math.floor(timeDiff / 3600)
    let minute = Math.floor((timeDiff % 3600) / 60)
    if (hour < 2) {
      return '打卡时间：' + endTimeStr + ' 加班时长：' + (hour + minute / 60).toFixed(2) + '时'
    } else {
      return '打卡时间：' + endTimeStr + ' 加班时长：' + (hour + minute / 60).toFixed(2) + '时'
    }
  } else {
    let timeDiff = endTime.getTime() - startWeekday.getTime()
    timeDiff = timeDiff / 1000
    let hour = Math.floor(timeDiff / 3600)
    let minute = Math.floor((timeDiff % 3600) / 60)
    return '打卡时间：' + endTimeStr + ' 加班时长：' + (hour + minute / 60).toFixed(2) + '时'
  }
}
let overtime = getOvertime()
console.log(overtime)
