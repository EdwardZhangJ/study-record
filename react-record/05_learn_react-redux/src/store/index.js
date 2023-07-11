const {createStore} = require('redux')

// 初始化数据
const initialState = {
  name: 'why',
  counter: 100
}

// 定义reducer函数：纯函数
// 两个参数
// 参数一：store中当前保存的值
// 参数二：本次需要更新的action
function reducer(state, action) {
  console.log(state, action);
  return initialState
}
debugger
const store = createStore(reducer)

module.exports = store
