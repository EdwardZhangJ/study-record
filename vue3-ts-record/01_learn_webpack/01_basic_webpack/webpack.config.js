const  path = require('path')
// 引入 path 通过 resolve 方法获取路径并进行拼接
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './build') 
  }
}
