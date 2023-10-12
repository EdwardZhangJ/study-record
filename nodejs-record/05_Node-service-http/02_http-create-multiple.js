
const http = require('http');

// 创建一个http对应的服务器
const server1 = http.createServer((request, response) => {
  response.end('2000端口服务器返回的结果~')
})

server1.listen(2000, () => {
  console.log('2000端口对应的服务器启动成功~');
})

// 创建一个http对应的服务器
const server2 = http.createServer((request, response) => {
  response.end('4000端口服务器返回的结果~')
})

server2.listen(4000, () => {
  console.log('4000端口对应的服务器启动成功~');
})
