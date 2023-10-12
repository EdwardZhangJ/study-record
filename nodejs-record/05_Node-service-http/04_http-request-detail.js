const http = require('http');

// 1. 创建一个server服务器
const server = http.createServer((request, response) => {
  console.log('服务器被访问~');
  // request对象中包含信息

  // 1. url信息
  console.log('url信息', request.url);
  // 2. method信息（请求方法）
  console.log('method信息', request.method);
  // 3. headers信息（请求头）
  console.log('headers信息', request.headers);

  response.end('hello server');
})

// 开启对应的服务器，并且告知需要监听的端口
server.listen(8000, () => {
  console.log('服务器开启成功~');
})
