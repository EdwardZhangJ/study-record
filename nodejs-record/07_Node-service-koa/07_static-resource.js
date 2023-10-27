const Koa = require('koa')
const static = require('koa-static')

const app = new Koa()
app.use(static('./uploads'))

// app.use((ctx, next) => {
//   ctx.body = 'hello koa'
// })

app.listen(7100, () => {
  console.log('服务器开启成功~');
})
