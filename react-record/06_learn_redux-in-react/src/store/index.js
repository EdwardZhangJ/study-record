// combineReducers
import {createStore, applyMiddleware, compose, } from 'redux'
import thunk from "redux-thunk"
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
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store
