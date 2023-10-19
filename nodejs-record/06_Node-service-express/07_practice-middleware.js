const express  =  require('express')

const app = express()

// 1. 注册两个普通的中间件
app.use((req, res, next) => {
  console.log('normal middleware 01');
  next()
})

app.use((req, res, next) => {
  console.log('normal middleware 02');
  next()

})

// 2. 注册路径path/method的中间件
app.get('/home', (req, res, next) => {
  console.log('match /home + get method middleware 01');
  next()
}, (req, res, next) => {
  console.log('match /home + get method middleware 02');
})

app.post('/login', (req, res, next) => {
  console.log('match /login + post method middleware 01');
})

// 3. 注册普通的中间件
app.use((req, res, next) => {
  console.log('normal middleware 03');
  next()

})

app.use((req, res, next) => {
  console.log('normal middleware 04');
  next()

})

app.listen(9000, () => {
  console.log('express服务器启动成功~')
})
