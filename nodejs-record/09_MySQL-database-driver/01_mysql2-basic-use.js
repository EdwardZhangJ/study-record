
const mysql = require('mysql2')

// 1. 创建一个链接（连接上数据库）
const connect = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  database: 'music_db',
  user: 'root',
  password: 'Edward1879220',
})

// 2. 执行操作语句，操作数据库
const statement = 'SELECT * FROM `students`'; 
connect.query(statement, (err, results, fields) => {
  if (err) throw err
  //  查看结果
  console.log(results)
  // console.log(fields)
})
