// 文件描述符的使用

const fs = require('fs');

// 1. 打开文件
fs.open('./bbb.txt', (err, fd) => {
  if(err) return

  // 获取文件操作符
  console.log(fd);

  // 读取文件信息
  fs.fstat(fd, (err, stats) => {
    if(err) return
    console.log(stats);
  })
})
