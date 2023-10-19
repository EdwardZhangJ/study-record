const express = require('express')

const app = express()

// 给express创建的app传入一个回调函数
// 传入的这个回调函数就称之为 中间件（middleware）

app.post('/login', (req, res, next) => {
  // 1. 中间件可以执行任意代码： 打印 查询数据 逻辑判断
  console.log('first middleware execute');
  // 2. 在中间件中修改 req/res 对象
  req.name = '张三'

  // 3. 可以在中间件中结束请求
  // res.json({ message: '登录成功，欢迎回来~', code: 0 })

  // 4. 执行下一个中间件
  next()
})

app.use((req, res, next) => {
  console.log('second middleware execute');
  res.end('请求结束')
})

app.listen(9000, () => {
  console.log('express服务器启动成功~');
})
