const express = require('express')

// 创建app对象
const app = express()

// 编写中间件
// 解析 queryString
app.get('/home/list', (req, res, next) => {
  // offset/size
  const queryInfo = req.query
  console.log('queryINfo', queryInfo);

  res.end('data list 数据')
})

// 2. 解析 parmas 参数
app.get('/users/:id', (req, res, next) => {
  const id = req.params.id
  res.end(`获取到用户的${id}`, )
})

// 启动服务器
app.listen(9000, () => {
  console.log('服务器开启成功~');
})
