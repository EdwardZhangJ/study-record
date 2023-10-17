
const express = require('express')

// 1. 创建express服务器
const app = express()

// 2. 启动服务器，并且监听端口
app.listen(8000, () => {
  console.log('服务器启动成功，请访问：http://localhost:8000')
})
