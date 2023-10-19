const express = require('express')

// 创建app对象
const app = express()

// 应用一些中间件
app.use(express.json()) // 解析客户端传递过来的json数据
// 解析传递过来的urlencoded时，默认使用nodejs内置的queryString模块
// {extended: true} => 不在使用内置的queryString模块，而是使用第三方qs库
app.use(express.urlencoded({extended: true})) // 解析客户端传递过来的urlencoded数据


// 编写中间件
app.post('/login', (req, res, next) => {
  console.log('req.body',req.body);
  res.end('login request 登录成功' )
})

// 启动服务器
app.listen(9000, () => {
  console.log('express服务器启动成功~')
})
