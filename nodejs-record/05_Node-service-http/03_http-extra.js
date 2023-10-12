const http = require('http');

// 1. 创建一个server服务器
const server = http.createServer((request, response) => {
  console.log('服务器被访问~');
  // 两次访问，会打印两次
  // 浏览器特性：会多请求一次数据 favicon.ico
  response.end('hello server');
})

// 开启对应的服务器，并且告知需要监听的端口
server.listen(8000, () => {
  console.log('f服务器开启成功~');
})
