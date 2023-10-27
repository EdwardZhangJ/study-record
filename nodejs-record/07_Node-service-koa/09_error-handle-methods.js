const Koa = require('koa')
const KoaRouter = require('@koa/router')

// 创建app对象
const app = new Koa()

// 注册路由对象
const userRouter = new KoaRouter({ prefix: '/users' })

userRouter.get('/',(ctx, next) => {
  const isAuth = false
  if(isAuth) {
    ctx.body = 'user data list'
  } else {
    // ctx.body = {
    //   code: -1003,
    //   message: '未授权的token，请检查你的token'
    // }
    ctx.app.emit('error', -1002, ctx)
  }
})


app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

// 独立的文件： error-handle.js
app.on('error', (code, ctx) => {
  const errCode = code
  let message = ''
  switch (code) {
    case -1001:
      message = '参数错误'
      break;
  
    case -1002: 
      message = '服务器内部错误'
      break;
    case -1003:
      message = '未授权的token，请检查你的token'
      break;
    default:
      break;
  }

  const  body = {
    code: errCode,
    message
  }
  ctx.body = body
})

// 启动服务器
app.listen(6000, () => {
  console.log('服务器开启成功~');
})
