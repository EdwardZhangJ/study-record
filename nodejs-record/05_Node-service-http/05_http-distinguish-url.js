const http = require('http');

// 1. 创建一个server服务器
const server = http.createServer((request, response) => {
  const url = request.url;

  if(url === '/login') {
    response.end('登陆成功~')
  }else if(url === '/products') {
    response.end('商品列表')
  } else if(url === '/home') {
    response.end('首页数据')
  }
})

// 开启对应的服务器，并且告知需要监听的端口
server.listen(8000, () => {
  console.log('服务器开启成功~');
})
