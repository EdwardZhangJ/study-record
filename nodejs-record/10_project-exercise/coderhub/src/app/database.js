const mysql = require('mysql2')

// 1. 创建连接池
const connectionPool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'coderhub',
  user: 'root',
  password: 'Edward123456@',
  connectionLimit: 5
})

// 2. 获取连接是否成功
connectionPool.getConnection((err, connection) => {
  // 2.1 判断是否有错误信息
  if (err) {
    console.log('连接失败', err)
    return
  }
  // 2.2 获取connection，尝试和数据库建立连接
  connection.connect((err) => {
    if (err) {
      console.log('连接失败', err)
    } else {
      console.log('连接成功')
    }
  })
})

// 3. 获取连接池中连接对象
const connection = connectionPool.promise()
module.exports = connection
