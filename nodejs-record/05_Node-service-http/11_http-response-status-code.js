const http = require('http');

// 1. 创建一个server服务器
const server = http.createServer((request, response) => {
  // 响应状态码
  // 方式一：statusCode
  // response.statusCode = 201

  // 方式二： setHead 响应头
  response.writeHead(403, {
    'Content-Type': 'text/html;charset=utf-8'
  })
  response.end('hello server');
})

// 开启对应的服务器，并且告知需要监听的端口
server.listen(8000, () => {
  console.log('服务器开启成功~');
})
