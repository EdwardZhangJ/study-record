const express = require('express')
const multer = require('multer')

// 创建app对象
const app = express()

// 应用express提供的第三方中间件 multer
const upload = multer({ 
  // dest: './uploads' 
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads')
    },
    filename: (req, file, cb) => { // 保持文件的原始名称
      cb(null, file.originalname)
    }
  })
})

// 编写中间件
// 上传单文件：single方法
app.post('/avatar', upload.single('avatar'), (req, res, next) => {
  console.log('upload file info', req.file);
  res.end('upload file success')
})

// 多文件上传：array
app.post('/photos', upload.array('photos'), (req, res, next) => {
  console.log('upload file info', req.files);
  res.end('upload multiple files success')
})

// 启动服务器
app.listen(9000, () => {
  console.log('服务器启动成功~')
})
