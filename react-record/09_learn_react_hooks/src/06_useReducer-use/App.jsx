import React, { memo, useState, useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {...state, count: state.count + 1}
    case 'decrement':
      return {...state, count: state.count - 1}
    case 'add_number':
      return {...state, count: state.count + action.num}
    case 'sub_number': 
      return {...state, count: state.count - action.num}
  }
}

const App = memo(() => {
  // const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer, {count: 0, friend: [], user: {}})
  return (
    <div>
      {/* <h2>当前计数：{count}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
      <button onClick={e => setCount(count - 1)}>-1</button>
      <button onClick={e => setCount(count + 5)}>+5</button>
      <button onClick={e => setCount(count - 5)}>-5</button> */}
      <h2>当前计数：{state.count}</h2>
      <button onClick={e => dispatch({type: 'increment'})}>+1</button>
      <button onClick={e => dispatch({type: 'decrement'})}>-1</button>
      <button onClick={e => dispatch({type: 'add_number', num: 5})}>+5</button>
      <button onClick={e => dispatch({type: 'sub_number', num: 5})}>-5</button>
    </div>
  )
})

export default App
