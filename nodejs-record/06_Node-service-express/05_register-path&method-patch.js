const express = require('express')

const app = express()

// 注册中间件： 对path/method都有限制
// app.method(path, middleware)
app.get('/home', (req, res, next) => {
  console.log('match /home + get method middleware ');
  res.end('get Home Data')
})


app.post('/users', (req, res, next) => {
  console.log('match /use + post method middleware ');
  res.end('post User Data')
})

app.listen(9000, () => {
  console.log('express服务器启动成功~')
})
