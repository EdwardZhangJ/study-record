
const fs = require('fs');

// 1. 一次性读取
// 缺点一：没有办法精准控制从哪里读取，读取到什么位置
// 缺点二：读取到某一个位置时，暂停读取，恢复读取
// 缺点三：文件非常大的时候，多次读取
// fs.readFile('./aaa.txt', (err, data) => {
//   console.log(data);
// })

// 2. 通过流读取文件
// 2.1 创建一个可读流: 包含start和end
// start: 从什么位置开始读取
// end: 读取到什么位置结束
// hightWaterMark: 每次读取的字节数，默认是64kb
const readStream = fs.createReadStream('./aaa.txt', {
  start: 8,
  end: 20,
  highWaterMark: 3 // 每次读取的字节数
})

// 2. 监听读取到的数据
readStream.on('data', (data) => {
  console.log(data.toString());

  readStream.pause(); // 暂停读取

  setTimeout(() => {
    readStream.resume(); // 恢复读取
  }, 2000)
})
