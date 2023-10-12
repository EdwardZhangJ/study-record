const http = require('http');
const url = require('url');
const qs = require('querystring');


// 1. 创建一个server服务器

const server = http.createServer((request, response) => {
  // 获取参数：body参数
  request.setEncoding('utf-8');
  let isLogin = false
  // request对象是一个可读流 readable
  request.on('data', (data) => {
    console.log(data);
    const dataString = data
    const loginInfo = JSON.parse(dataString)
    if(loginInfo.name === 'coderwht' && loginInfo.password === '123456') {
      isLogin = true
    } else {
      isLogin = false
    }
  })

  request.on('end', () => {
    if(isLogin) {
      response.end('登陆成功~')
    } else {
      response.end('登陆失败~')
    }
  })
})

// 开启对应的服务器，并且告知需要监听的端口
server.listen(8000, () => {
  console.log('服务器开启成功~');
})
