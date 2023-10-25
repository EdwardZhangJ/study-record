const Koa = require('koa')

// 创建app对象
const app = new Koa()

// 注册中间件 middleware
// koa 中间件有两个参数：ctx、next
app.use((ctx, next) => {
  console.log('中间件执行了~');
  ctx.body = 'Hello Koa'
  
})

// 启动服务器
app.listen(6000, () => {
  console.log('服务器开启成功~');
})
