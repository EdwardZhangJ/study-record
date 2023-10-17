
const express = require('express')

// 1. 创建express服务器
const app = express()

// 客户端访问URL： /login 和 /home
app.post('/login', (req, res) => {
  // 处理login请求
  res.end('login success')
})

app.get('/home', (req, res) => {
  res.end('home page data')
})

// 2. 启动服务器，并且监听端口
app.listen(9000, () => {
  console.log('服务器启动成功，请访问：http://localhost:9000')
})
