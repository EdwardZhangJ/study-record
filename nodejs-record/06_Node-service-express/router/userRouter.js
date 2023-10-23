const express = require('express')

// 1. 创建app对象
const userRouter = express.Router()

// 2. 定义路由对象中的映射接口
userRouter.get('/', (req, res, next) => {
  res.json('get users list success')
})
userRouter.get('/:id', (req, res, next) => {
  res.json(`get user ${req.params.id} success`)
})
userRouter.post('/', (req, res, next) => {
  res.json('create user success')
})
userRouter.delete('/:id', (req, res, next) => {
  res.json(`delete user ${req.params.id} success`)
})
userRouter.patch('/:id', (req, res, next) => {
  res.json(`update user ${req.params.id} success`)
})

// 3. 导出路由
module.exports = userRouter
