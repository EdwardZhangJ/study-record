/**
 * @Extends_Parasitic.js
 * @description 寄生式继承
 * @author zhangjun
 * @update (zhangjun 2022/1/12)
 **/

var pObj = {
    running: function() {
        console.log("running");
    }
}

function createStudent(name) {
    var stu = Object.create(pObj);
    stu.name = name;
    stu.studying = function() {
        console.log("studying~")
    }
    return stu
}


 var stuObj = createStudent("why")
console.log(stuObj)