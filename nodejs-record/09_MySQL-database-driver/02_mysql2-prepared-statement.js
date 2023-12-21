
const mysql = require('mysql2')

// 1. 创建一个链接（连接上数据库）
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  database: 'music_db',
  user: 'root',
  password: 'Edward1879220',
})

// 2. 执行一个SQL语句：预处理语句
const statement = 'SELECT * FROM students WHERE age > ?'
connection.execute(statement, [18], (err, results, fields) => {
  if (err) throw err
  
  console.log(results)
})
