const http = require('http');
const url = require('url');
const qs = require('querystring');

// 1. 创建一个server服务器
const server = http.createServer((request, response) => {
  // 1. 参数一： query类型参数
  // /products/list?offset=100&size=20
  const urlString = request.url
  const urlInfo = url.parse(urlString)

  // 1.2 解析query： offset=100&size=20
  const queryString = urlInfo.query
  const queryInfo = qs.parse(queryString)

  // 1.3 qs解析 { offset: '100', size: '20' }
  console.log(queryInfo.offset, queryInfo.size);

  response.end('hello server bbb');
})

// 开启对应的服务器，并且告知需要监听的端口
server.listen(8000, () => {
  console.log('服务器开启成功~');
})
