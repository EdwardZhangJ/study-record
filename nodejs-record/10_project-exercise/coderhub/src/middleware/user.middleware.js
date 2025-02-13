const { NAME_OR_PASSWORD_IS_REQUIRED, NAME_IS_ALREADY_EXISTS } = require('../config/error')
const userService = require('../service/user.service')


const verifyUser = async (ctx, next) => {

  // 1. 获取用户传递过来信息
  const user = ctx.request.body

  // 2. 验证客户端传递过来的user是否可以保存到数据库中
  // 2.1 验证 用户名和密码是否为空

  const { name, password } = user
  if (!name || !password) {
    return ctx.app.emit('error', NAME_OR_PASSWORD_IS_REQUIRED, ctx)
  }

  // 2.2 判断name是否在数据库中已经存在
  const users = await userService.findUserByName(name)
  if (users.length) {
    return ctx.app.emit('error', NAME_IS_ALREADY_EXISTS, ctx)
  }

  // 3. 执行下一个中间件
  await next()
}

module.exports = verifyUser
