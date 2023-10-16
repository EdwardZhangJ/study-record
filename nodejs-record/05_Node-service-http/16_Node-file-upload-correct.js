const http = require('http');

// 1. 创建一个server服务器
const server = http.createServer((request, response) => {
  request.setEncoding('binary');

  // 客户端传递的数据是表单数据
  request.on('data', (data) => {
    console.log(data);
  })

  request.on('end', () => {
    console.log('数据传输完成');
    response.end('文件上传完成');
  })
})

// 开启对应的服务器，并且告知需要监听的端口
server.listen(8000, () => {
  console.log('服务器开启成功~');
})
