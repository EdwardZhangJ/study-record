const Koa = require('koa')
const KoaRouter = require('@koa/router')
const bodyParser = require('koa-bodyparser')
const multer = require('@koa/multer')


// 创建app对象
const app = new Koa()

// 使用第三方中间件解析body数据
app.use(bodyParser())
const formParser = multer()

// 注册路由对象
const userRouter = new KoaRouter({ prefix: '/users' })

/**
 * 1. get: params 方式 例子： /:id
 * 2. get: query 方式 例子 ?name=why&age=18
 * 3. post: json 方式 例子： {"name": "why", "age": 18" }
 * 4. post x-www-form-urlencoded 方式
 * 5. post form-data 方式
 */

// 1. get/params
userRouter.get('/:id',(ctx, next) => {
  const id = ctx.params.id
  ctx.body = `获取某个用户${id}`
})

// 2. get/query
userRouter.get('/', (ctx, next) => {
  const query = ctx.query
  ctx.body = `用户query数据${JSON.stringify(query)}`
})

// 3. post/json
userRouter.post('/json', (ctx, next) => {
  // 注意事项：不能从ctx.body中获取数据
  console.log(ctx.request.body);
  const body = ctx.request.body
  // ctx.body 用于向客户端返回数据
  ctx.body = `用户json数据${JSON.stringify(body)}`
})

// 4. post/urlencoded
// koa-bodyparser 也会解析urlencoded数据，然后放到ctx.request.body中
userRouter.post('/urlencoded', (ctx, next) => {
  ctx.body = `用户urlencoded数据${JSON.stringify(ctx.request.body)}`
})

// 5. post/form-data
userRouter.post('/formdata', formParser.any() ,(ctx, next) => {
  console.log('ctx.request.body', ctx.request.body);
  ctx.body = `用户formdata数据${JSON.stringify(ctx.request.body)}`
})

app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

// 启动服务器
app.listen(6000, () => {
  console.log('服务器开启成功~');
})
