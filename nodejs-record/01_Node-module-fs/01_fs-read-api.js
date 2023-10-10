// commonjs
const fs = require('fs');

// 1. 同步读取
// const res1 = fs.readFileSync('./abc.txt', {
//   encoding: 'utf-8'
// })
// console.log(res1);

// console.log('后续的代码');

// 2. 异步读取： 回调函数
// fs.readFile('./abc.txt', {
//   encoding: 'utf-8'
// }, (err, data) => {
//   if(err) {return }
//   console.log(data);
// })

// console.log('后续的代码');

// 3. 异步读取： Promise
fs.promises.readFile('./abc.txt', {
  encoding: 'utf-8'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
console.log('后续的代码');
