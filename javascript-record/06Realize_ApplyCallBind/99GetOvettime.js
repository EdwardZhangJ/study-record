/**
 * @getOvettime.js
 * @description
 * @author zhangjun
 * @update (zhangjun 2021/11/25)
 **/

function getOvertime () {
    let date = new Date(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        week = date.getDay(),
        Hours = date.getHours(),
        Minutes = date.getMinutes(),
        Seconds = date.getSeconds();
    
    let endTimeStr = date.getFullYear() + "-" + month + "-" + day + " " + Hours + ":" + Minutes + ":" + Seconds,
        startWorkdayStr = date.getFullYear() + "-" + month + "-" + day + " " + "17:00:00",
        startWeekdayStr = date.getFullYear() + "-" + month + "-" + day + " " + "09:00:00";
    
    let startWorkday = new Date(startWorkdayStr),
        startWeekday = new Date(startWeekdayStr),
        endTime = new Date(endTimeStr);
    
    const weekday = new Map([
        [0,'星期日'],
        [1,'星期一'],
        [2,'星期二'],
        [3,'星期三'],
        [4,'星期四'],
        [5,'星期五'],
        [6,'星期六'],
    ])
    const getIcon = (key) =>{
        return " " + weekday.get(key) + ";"
    }
    if (week !== 0 || week !== 6) {
        let timeDiff = endTime.getTime() - startWorkday.getTime();
        timeDiff = timeDiff / 1000;
        let hour = Math.floor(timeDiff / 3600);
        let minute = Math.floor( (timeDiff % 3600) / 60);
        if (hour < 2) {
            return "打卡时间：" + endTimeStr + getIcon(week) + " 加班时长：" + (hour  + minute / 60).toFixed(2) + "时";
        }
        else {
            return  "打卡时间：" + endTimeStr + getIcon(week) + " 加班时长：" + (hour + minute / 60).toFixed(2) + "时";
        }
    }
    else {
        let timeDiff = endTime.getTime() - startWeekday.getTime();
        timeDiff = timeDiff / 1000;
        let hour = Math.floor(timeDiff / 3600);
        let minute = Math.floor( (timeDiff % 3600) / 60);
        return "打卡时间：" + endTimeStr + getIcon(weekDay) + " 加班时长：" + (hour + minute/60).toFixed(2) + "时";
    }
}


let overtime = getOvertime();
console.log(overtime)