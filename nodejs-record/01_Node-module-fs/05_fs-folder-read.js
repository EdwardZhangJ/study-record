// 读取文件夹的相关操作

const fs = require('fs');

// 读取文件
// 1. 读取文件夹，读取到文件中文件的字符串
// fs.readdir('./why', (err, files) => {
//   if(err) return
//   console.log(files);
// })

// 2. 读取文件夹，读取到文件中文件的信息
// fs.readdir('./why', { withFileTypes: true }, (err, files) => {
//   if(err) return 
//   console.log(files);
//   files.forEach(item => {
//     if(item.isDirectory()) {
//       console.log(`${item.name} 是文件夹`);
//       fs.readdir(`./why/${item.name}`, { withFileTypes: true }, (err, secondFiles) => {
//         console.log(secondFiles);
//       })

//     }
//     else {
//       console.log(`${item.name} 是文件`);
//     }
//   })
// })

// 3. 递归的读取文件夹中的所有文件
function readDirectory(path) {
  fs.readdir(path, { withFileTypes: true }, (err, files) => {
    files.forEach(item => {
      if(item.isDirectory()) {
        readDirectory(`${path}/${item.name}`)
      }
      else {
        console.log(`${item.name} 是文件`);
      }
    })
  })
}
readDirectory('./why')
