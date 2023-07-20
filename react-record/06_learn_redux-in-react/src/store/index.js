// combineReducers
import {createStore, applyMiddleware, compose, } from 'redux'
// import thunk from "redux-thunk"
import counterReducer from './counter'
import homeReducer from './home'
import userReducer from './user'

// 奖两个reducer函数合并
// const reducer = combineReducers({
//   counter: counterReducer,
//   home: homeReducer,
// })

function reducer(state = {}, action) {
  // 返回一个对象， store 的 state
  return {
    counter: counterReducer(state.counter, action),
    home: homeReducer(state.homeReducer, action),
    user: userReducer(state.user, action),
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer)
// const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

// 对每次派发的action进行拦截，打印日志
function log(store) {
  const next = store.dispatch
  function logAndDispatch(action) {
    console.log('当前派发的action: ', action);
    // 真正的派发代码：使用之前的dispatch进行派发
    next(action)

    console.log('派发之后的结果：',store.getState())
  }
  // monkey patch 猴补丁 => 篡改现有的代码，对整体的执行逻辑进行修改
  store.dispatch = logAndDispatch

}
log(store)

function thunk(store) {
  const next = store.dispatch
  function thunkAndDispatch(action) {
    if (typeof action === 'function') {
      action(store.dispatch, store.getState)
    } else {
      next(action)
    }
  }
  store.dispatch = thunkAndDispatch
}
thunk(store)

export default store
