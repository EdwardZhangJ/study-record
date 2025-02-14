const app = require('../app')
const { NAME_OR_PASSWORD_IS_REQUIRED, NAME_IS_ALREADY_EXISTS } = require('../config/error')

const errorHandle = (err, ctx) => {
  let code = 0, message = ''
  switch (err) {
    case NAME_OR_PASSWORD_IS_REQUIRED:
      code = -1001
      message = '用户名或密码不能为空~'
      break;

    case NAME_IS_ALREADY_EXISTS:
      code = -1002
      message = '用户名已经存在~'
    default:

      break;
  }

  ctx.body = { code, message }
}

app.on('error', errorHandle)
