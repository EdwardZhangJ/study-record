const Koa = require('koa')
const KoaRouter = require('@koa/router')

// 创建app对象
const app = new Koa()

// 1. 创建路由对象
const userRouter = new KoaRouter({ prefix: '/users' })

// 2. 在路由中注册中间件 path/method
userRouter.get('/', (ctx, next) => {
  ctx.body = 'user data list'
})
userRouter.get('/:id', (ctx, next) => {
  ctx.body = `获取某个用户${ctx.params.id}`
})

userRouter.post('/', (ctx, next) => {
  ctx.body = 'create user data'
 })
userRouter.delete('/:id', (ctx, next) => {
  ctx.body = `删除某个用户${ctx.params.id}`
 })
userRouter.patch('/:id', (ctx, next) => {
  ctx.body = `修改某个用户${ctx.params.id}`
 })

// 3. 让路由中的中间件生效
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

app.listen(6000, () => {
  console.log('服务器开启成功~');
})
