const fs = require('fs');

const readStream = fs.createReadStream('./aaa.txt', {
  start: 8,
  end: 20,
  highWaterMark: 3 // 每次读取的字节数
})

readStream.on('data', (data) => {
  console.log(data.toString());
})

// 3. 补充其他的事件监听
readStream.on('open', (fd) => {
  console.log('通过流将文件打开', fd);
})

readStream.on('end', () => {
  console.log('读取结束');
})

readStream.on('close', () => {
  console.log('文件读取结束，并关闭');
})
