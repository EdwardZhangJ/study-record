const express = require('express')
const multer = require('multer')

// 创建app对象
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// 编写中间件
const formadata = multer()
app.use(formadata.any())

app.post('/login', (req, res, next) => {
  console.log(req.body);
  res.end('login success')
})

// 启动服务器
app.listen(9000, () => {
  console.log('服务器开启成功~');
})
