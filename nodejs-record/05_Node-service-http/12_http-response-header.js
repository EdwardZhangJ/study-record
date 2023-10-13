const http = require('http');

// 1. 创建一个server服务器
const server = http.createServer((request, response) => {

  // 设置header信息：数据的类型以及数据的编码格式
  // 1. 单独设置某一个header
  // response.setHeader('Content-Type', 'application/json;charset=utf-8');

  // 2. 和 http status code 一起设置
  response.writeHead(200, {
    'Content-Type': 'application/json;charset=utf-8'
  })

  const list = [
    {name: 'why', age: 18},
    {name: 'kobe', age: 30},
  ]
  response.end(JSON.stringify(list));
})

// 开启对应的服务器，并且告知需要监听的端口
server.listen(8000, () => {
  console.log('服务器开启成功~');
})
