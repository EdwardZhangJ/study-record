const express = require('express')

// 创建app对象
const app = express()

// 编写中间件
app.post('/login', (req, res, next) => {
  // 1. res.end方法 (比较少)
  // res.end('login success')

  // 2. res.json方法 (常用)
  // res.json({
  //   code: 0,
  //   message: 'login success',
  //   list: [
  //     {name: 'iPhone', price: 8888},
  //     {name: 'iPad', price: 5888},
  //     {name: 'MacBook Pro', price: 18888},
  //     {name: 'iMac', price: 28888}
  //   ]
  // })

  // 3. res.status方法: 设置响应状态码
  res.status(200).end('login success')

})

// 启动服务器
app.listen(9000, () => {
  console.log('服务器开启成功~');
})
