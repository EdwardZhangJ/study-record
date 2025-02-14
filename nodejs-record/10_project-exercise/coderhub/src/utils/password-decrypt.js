const crypto = require('crypto')

// 使用md5进行加密 返回16进制数据hex
function passwordDecrypt(password) {
  const md5 = crypto.createHash('md5')
  return md5.update(password).digest('hex')
}

module.exports = passwordDecrypt
