const fs = require('fs');

// 1. 
// fs.writeFile('./bbb.txt', 'hello world', {
//   encoding: 'utf-8',
//   flag: 'a+'
// }, (err) => {
//   console.log('写入文件操作', err);
// })

// 2. 创建一个写入流
const writeStream = fs.createWriteStream('./ccc.txt', {
  flags: 'a+',
  encoding: 'utf-8',
})

writeStream.on('open', (fd) => {
  console.log('文件打开', fd);
})

writeStream.write('hello world')
writeStream.write('aaaa')
writeStream.write('bbbb', (err) => {
  console.log('写入完成', err);
})

// 3. 写入完成时，需要手动去调用close方法
// writeStream.close()

// 4. end方法：
// 4.1. 将最后的内容写入到文件中，并且关闭文件
writeStream.end('end')
