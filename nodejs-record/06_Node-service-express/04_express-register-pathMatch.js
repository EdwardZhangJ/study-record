const express = require('express')

const app = express()

// 注册普通中间件
// app.use((req, res, next) => {
//   console.log('match normal middleware');
//   res.end('match normal middleware')
// })

// 注册路径匹配的中间件
app.use('/home', (req, res, next) => {
  console.log('match /home middleware');
  res.end('home Data')
})

app.listen(9000, () => {
  console.log('express服务器启动成功~')
})
