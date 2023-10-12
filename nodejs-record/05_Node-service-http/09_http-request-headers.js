const http = require('http');

// 1. 创建一个server服务器
const server = http.createServer((request, response) => {

  console.log(request.headers);
  console.log(request.headers['content-type']);
  const token = request.headers['authorization'];
  console.log(token);
  
  response.end('查看headers信息');
})

// 开启对应的服务器，并且告知需要监听的端口
server.listen(8000, () => {
  console.log('服务器开启成功~');
})
