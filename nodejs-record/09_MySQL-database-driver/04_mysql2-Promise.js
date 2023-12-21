
const mysql = require('mysql2')

// 1. 创建一个链接
const connectionPool = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  database: 'music_db',
  user: 'root',
  password: 'Edward1879220',
  connectionLimit: 5,
})

// 2. 执行一个SQL语句：预处理语句
const statement = 'SELECT * FROM students WHERE age > ?'
connectionPool.promise().execute(statement, [18]).then(([values, fields]) => {
  console.log(values);
}).catch(err => {
  console.log('err', err);
})

