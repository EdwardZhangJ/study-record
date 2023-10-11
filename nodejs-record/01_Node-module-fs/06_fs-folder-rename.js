// 文件夹的重命名
const fs = require('fs');
// 1. 对文件夹进行重命名
fs.rename('./why', './kobe', (err) => {
  if (err) {
    return
  }
  console.log('重命名成功');
})
