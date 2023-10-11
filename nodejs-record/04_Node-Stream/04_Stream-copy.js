const fs = require('fs');

// 1. 方式一：一次性读取和写入文件
// fs.readFile('./foo.txt', (err, data) => {
//   console.log(data);
//   fs.writeFile('./foo-copy01.text', data, (err) => {
//       console.log(err);
//   })
// })
 
// 2. 方式二：使用流读取和写入文件
// const readStream = fs.createReadStream('./foo.txt');
// const writeStream = fs.createWriteStream('./foo-copy02.txt');

// readStream.on('data', (data) => {
//   writeStream.write(data);
// })

// readStream.on('end', () => {
//   writeStream.close()
// })

// 3. 在可读流和可写流直接建立一个管道
const readStream = fs.createReadStream('./foo.txt');
const writeStream = fs.createWriteStream('./foo-copy03.txt');
readStream.pipe(writeStream);
