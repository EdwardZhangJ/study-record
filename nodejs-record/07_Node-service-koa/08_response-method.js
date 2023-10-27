const fs = require('fs')
const Koa = require('koa')
const KoaRouter = require('@koa/router')

// 创建app对象
const app = new Koa()

// 注册路由对象
const userRouter = new KoaRouter({ prefix: '/users' })

userRouter.get('/',(ctx, next) => {
  // 1. body的类型是string s
  // ctx.body = 'user data list'

  // 2. body的类型是Buffer
  // ctx.body = Buffer.from('你好啊， 李银河~')

  // 3. body的类型是Stream
  // const readStream = fs.createReadStream('./uploads/test.png')
  // ctx.type = 'image/jpeg'
  // ctx.body = readStream

  // 4.body的类型是数据（array/object）
  ctx.status = 201
  ctx.body = {
    code: 0,
    data: [
      { name: 'tom', age: 20 },
      { name: 'jerry', age: 18 }
    ]
  }

  // 5. body的值是null，自动设置http status code 为204
  // ctx.body = null

})


app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

// 启动服务器
app.listen(6000, () => {
  console.log('服务器开启成功~');
})
