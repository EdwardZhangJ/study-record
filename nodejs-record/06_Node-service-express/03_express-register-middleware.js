const express = require('express')

const app = express()
// 总结：当express接收到客户端发送的网络请求时，在所有中间件中开始进行匹配
// 1. 如果匹配到第一个符合要求的中间件，那么就会执行这个中间件
// 2. 后续的中间件是否执行 取决于上一个中间件是否调用了next方法


// 通过use方法注册的中间件是最普通/简单的中间件
// 通过use注册的中间件，会在任意请求进来的时候都会匹配上

app.use((req, res, next) => {
  console.log('app use register middleware 01')
  // res.end('middleware 01请求结束, Did not call next()')
  next()
})

app.use((req, res, next) => {
  console.log('app use register middleware 02')
  res.end('middleware 02请求结束~')

})

app.listen(9000, () => {
  console.log('express服务器启动成功~')
})
