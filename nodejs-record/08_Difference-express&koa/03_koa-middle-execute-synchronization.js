const Koa = require('koa')

// 创建app对象
const app = new Koa()

app.use((ctx, next) => {
  console.log('koa middleware 01');
  ctx.msg = 'aaa'
  next()

  // 返回结果 
  ctx.body = ctx.msg
})

app.use((ctx, next) => {
  console.log('koa middleware 02');
  ctx.msg += 'bbb'
  next()
})

app.use((ctx, next) => {
  console.log('koa middleware 03');
  ctx.msg += 'ccc'

})
// 启动服务器
app.listen(6000, () => {
  console.log('服务器开启成功~');
})
