const userService = require('../service/user.service')
class UserController {
  create(ctx, next) {
    // 1. 获取用户传递过来信息
    const user = ctx.request.body

    // 2. 将用户信息保存到数据库
    userService(user)

    // 3. 查看查询结果，告知用户注册成功
    ctx.body = `用户注册成功`
  }
}

module.exports = new UserController();
