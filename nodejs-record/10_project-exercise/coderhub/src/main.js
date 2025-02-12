// 1. 导入app
const app = require('./app')
const { SERVER_PORT } = require('./config/server')

// 2. 启动服务
app.listen(SERVER_PORT, () => {
  console.log('corderhub 服务器启动成~')
})
