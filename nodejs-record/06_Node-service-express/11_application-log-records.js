const express = require('express')
const morgan = require('morgan')
const fs = require('fs')

// 创建app对象
const app = express()

// 应用第三方中间件
const writeSteam = fs.createWriteStream('./log/access.log')
app.use(morgan('combined', { stream: writeSteam }))

// 编写中间件
app.post('/login', (req, res, next) => {
  res.end('login success' )
})

// 启动服务器
app.listen(9000, () => {
  console.log('服务器启动成功~')
})
