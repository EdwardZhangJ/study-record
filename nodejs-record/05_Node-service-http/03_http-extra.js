
const http = require('http');



const server = http.createServer((request, response) => {
  console.log('服务器被访问~');
  // 两次访问，会打印两次
  // 浏览器特性：会多请求一次数据 favicon.ico
  response.end('hello server');
})

server.listen(8000, () => {
  console.log('f服务器开启成功~');
})
