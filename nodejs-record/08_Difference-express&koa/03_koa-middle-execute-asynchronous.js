const Koa = require('koa')

const axios = require('axios')

// 创建app对象
const app = new Koa()

app.use(async (ctx, next) => {
  console.log('koa middleware 01');
  ctx.msg = 'aaa'
  await next()

  // 返回结果 
  ctx.body = ctx.msg
})

app.use(async (ctx, next) => {
  console.log('koa middleware 02');
  ctx.msg += 'bbb'

  // 如果执行的下一个中间件是一个异步函数，那么next默认不会等到中间件的结果，就会执行下一步操作
  // 如果希望等待下一个异步函数的执行结果，那么需要再next函数前面加上await
  await next()
})

app.use(async (ctx, next) => {
  console.log('koa middleware 03');

  // 网络请求
  const res = await axios.get('http://123.207.32.32:8000/home/multidata')

  ctx.msg +=  res.data.data?.banner?.list[0].title

})
// 启动服务器
app.listen(6000, () => {
  console.log('服务器开启成功~');
})
