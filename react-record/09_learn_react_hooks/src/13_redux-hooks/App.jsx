import React, { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addNumberAction, subNumberAction, changeMessageAction } from './store/modules/counter'

// memo 高阶组件包裹起来的组件有对应的特点： 只有props发生改变时，才会重新渲染
const Home = memo((props) => {
  const { message } = useSelector((state) => ({
    message: state.counter.message
  }))
  const dispatch = useDispatch()
  function changeMessageHandle() {
    dispatch(changeMessageAction('hello world111'))
  }
  console.log('Home组件重新渲染了');
  return (
    <div>
      <h2>Home: {message}</h2>
      <button onClick={changeMessageHandle}>修改message</button>
    </div>
  )
} )

const App = memo((props) => {
  // 1. 使用useSelector将redux中的store的数据映射到组件内
  const { count } = useSelector((state) => ({count: state.counter.count}))

  console.log('App组件重新渲染了')
  const dispatch = useDispatch()
  function addNumberHandle(num, isAdd=true) {
    if(isAdd) { 
      dispatch(addNumberAction(num))
    } else {
      dispatch(subNumberAction(num))
    }
  }

  return (
    <div>
      <h2>当前计数：{count}</h2>
      <button onClick={e => addNumberHandle(1)}>+1</button>
      <button onClick={e => addNumberHandle(6)}>+6</button>
      <button onClick={e => addNumberHandle(6, false)}>-6</button>

      <Home />
    </div>
  )
})


export default App
