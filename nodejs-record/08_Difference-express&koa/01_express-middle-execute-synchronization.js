const express = require('express')

// 创建app对象
const app = express()

// 编写中间件
app.use((req, res, next) => {
  console.log('express middleware 1');
  req.msg = 'aaa'
  next()

  // 返回值结果
  res.json(req.msg)
})

app.use((req, res, next) => {
  console.log('express middleware 2');
  req.msg += 'bbb'

  next()
})

app.use((req, res, next) => {
  console.log('express middleware 3');
  req.msg += 'ccc'
  // res.json('express result')
})

// 启动服务器
app.listen(9000, () => {
  console.log('服务器开启成功~');
})
