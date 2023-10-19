const express = require('express')
const app = express()

// 
app.use((req, res, next) => {
  console.log('object', req.headers['content-type']);
  if (req.headers['content-type'] === 'application/json') {
    req.on('data', (data) => {
      const dataString = JSON.parse(data.toString()) 
      req.body = dataString
    })
    req.on('end', () => {
      next()
    })
  } else {
    next()
  }
})

// 注册两个实际请求的中间件
// 案例一：用户登录的请求处理 /login post => username password
app.post('/login', (req, res, next) => {
  console.log('login request', req.body);
})

// 案例二：注册用户的请求处理 /register post => username password
app.post('/register', (req, res, next) => {
  console.log('register request', req.body);
})

app.listen(9000, () => {
  console.log('express服务器启动成功~')
})
