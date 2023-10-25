const Koa = require('koa')

// 创建app对象
const app = new Koa()

// 注册中间件
app.use((ctx, next) => {
  console.log(ctx.path);
  if(ctx.path === '/users') {
    if(ctx.method === 'GET') {
      ctx.body = 'user data list'
    } else if(ctx.method === 'POST') {
      ctx.body = 'create user data'
    }

  } else if(ctx.path === '/home') {
    ctx.body = 'home page'
  } else if(ctx.path === '/login') {
    ctx.body = 'login page'
  }
})

app.listen(6000, () => {
  console.log('服务器开启成功~');
})
