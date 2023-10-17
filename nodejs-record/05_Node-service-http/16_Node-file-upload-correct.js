const http = require('http');
const fs = require('fs');

// 1. 创建一个server服务器
const server = http.createServer((request, response) => {
  request.setEncoding('binary');

  const boundary = request.headers['content-type'].split('; ')[1].replace('boundary=', '')

  // 客户端传递的数据是表单数据（请求体） 
  let formData = ''
  request.on('data', (data) => {
    formData += data 
  })

  request.on('end', () => {
    // 1. 截取从 image/png 位置开始后面所有的数据
    const imageType = 'image/png'
    const imageTypePosition = formData.indexOf(imageType) + imageType.length
    let imageData = formData.substring(imageTypePosition)

    // 2. imageData 开始位置有两个空格
    imageData = imageData.replace(/^\s\s*/, '')

    // 3. 替换最后的boundary
    imageData = imageData.substring(0, imageData.indexOf(`--${boundary}--`))

    // 4. 将imageData 数据存储到文件中
    fs.writeFile('./bar.png', imageData, 'binary', (err) => {
      console.log('存储成功');
      response.end('文件上传完成');
    })
  })
})

// 开启对应的服务器，并且告知需要监听的端口
server.listen(8000, () => {
  console.log('服务器开启成功~');
})
