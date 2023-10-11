
const fs = require('fs');

const writeStream = fs.createWriteStream('./ddd.txt', {
  // mac 上面没有问题，但是 windows  系统需要使用 r+ 模式
  flags: 'a+',
  start: 5
});

writeStream.write('My name is Ed');
writeStream.close()
