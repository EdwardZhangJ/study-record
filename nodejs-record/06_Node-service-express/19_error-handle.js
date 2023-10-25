const express = require('express')

// 创建app对象
const app = express()

// 编写中间件
// 服务器给客户端返回错误信息的方案：
// 方案一：返回http错误码
// 方案二：http状态码200 信息中会包含错误code/message

app.use(express.json())

app.post('/login', (req, res, next) => {
  // 1. 获取登录传入的用户名和密码
  const { username, password } = req.body
  // 2. 判断用户名和密码是否正确
  if(!username || !password) {
    next(-1001)
  } else if(username !== 'coderwhy' || password !== '123456') {
    next(-1002)
  } else {
    next(200)
  }
})

// 错误处理中间件
app.use((err, req, res, next) => {
  console.log(err);
  const code = err
  switch (code) {
    case -1001:
      res.json({
        code: -1001,
        message: '用户名或密码不能为空'
      })
      break;
    case -1002:
      res.json({
        code: -1002,
        message: '用户名或密码错误'
      })
      break;
    case 200:
      res.json({
        code: 200,
        message: '登录成功'
      })
      break;
  }
})

// 启动服务器
app.listen(9000, () => {
  console.log('服务器开启成功~');
})
