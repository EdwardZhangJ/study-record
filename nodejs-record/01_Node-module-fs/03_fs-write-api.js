const fs = require('fs');

// 1. 有一段内容（客户端传递）
const content = 'hello world, my name is ZhangSan';

// 2. 文件的写入操作
fs.writeFile('./ccc.txt', content, (err) => {
  if (err) {
    console.log('写入文件失败');
    return;
  }
  console.log('写入文件成功');
})
