const Koa = require('koa')
const KoaRouter = require('@koa/router')
const multer = require('@koa/multer')


// 创建app对象
const app = new Koa()

// 使用第三方中间件解析body数据
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, './uploads')
    },
    filename(req, file, cb) {
      cb(null, file.originalname)
    }
  })
})

// 注册路由对象
const uploadRouter = new KoaRouter({ prefix: '/upload' })

uploadRouter.post('/avatar', upload.single('avatar'), (ctx, next) => {
  console.log(ctx.request.file);
  ctx.body = 'files upload success~'
})

uploadRouter.post('/photos', upload.array('photos'),(ctx,next) => {
  console.log(ctx.request.files);
  ctx.body = 'files upload success'
})

app.use(uploadRouter.routes())
app.use(uploadRouter.allowedMethods())

// 启动服务器
app.listen(6000, () => {
  console.log('服务器开启成功~');
})
