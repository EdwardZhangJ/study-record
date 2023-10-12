const http = require('http');

// 1. 创建一个server服务器
const server = http.createServer((request, response) => {
  // response 对象 => writable

  // 1. 响应数据方式一： write
  response.write('hello');
  response.write(' nodejs'); 

  // 2. 响应数据方式二： end
  // response.end('本次写入结束');
})

// 开启对应的服务器，并且告知需要监听的端口
server.listen(8000, () => {
  console.log('服务器开启成功~');
})
