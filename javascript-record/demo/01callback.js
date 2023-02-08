
// 1. 简单的 回调函数
function doSomething(msg, callback) {
  console.log(msg);
  if(typeof callback == "function"){
    callback();
  }
}

doSomething("回调函数", function () {
  console.log("匿名函数实现回调！");
})



// demo 2 this 指向
let clientData = {
  id: '096545',
  fullName: "Not Set",
  //setUsrName是一个在clientData对象中的方法
  setUserName: function (firstName, lastName){
    this.fullName = firstName + " " + lastName;
  }
}

function getUserInput(firstName, lastName, callback, callbackObj){
  //code .....
  //调用回调函数存储
  // callback(firstName, lastName);
  callback.apply(callbackObj, [firstName, lastName])
}


getUserInput("Barack","Obama",clientData.setUserName);

console.log(clientData.fullName);  //Not Set

console.log(clientData.fullName);  //Barack Obama