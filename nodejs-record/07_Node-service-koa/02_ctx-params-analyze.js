const Koa = require('koa')

// 创建app对象
const app = new Koa()

// 注册中间件
app.use((ctx, next) => {
  console.log('中间件1执行了~');

  // 1. 请求对象
  console.log('ctx.request', ctx.request); // 请求对象：Koa封装的请求对象
  console.log('ctx.req', ctx.req); // 请求对象：Node原生的请求对象

  // 2. 响应对象
  console.log(ctx.response); // 响应对象：Koa封装的响应对象
  console.log(ctx.res); // 响应对象：Node原生的响应对象

  // 3. 其他属性
  console.log(ctx.query);
  // console.log(ctx.params);

})

app.use(() => {
  console.log('中间件2执行了~');
})

app.listen(6000, () => {
  console.log('服务器开启成功~');
})
