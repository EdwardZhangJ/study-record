const userService = require('../service/user.service')
class UserController {
  async create(ctx, next) {
    // 1. 获取用户传递过来信息
    const user = ctx.request.body

    // 2. 将用户信息保存到数据库
    const result = await userService.create(user)

    // 3. 查看查询结果，告知用户注册成功
    ctx.body = {
      message: '创建用户成功~',
      data: result
    }
  }
}

module.exports = new UserController();
