import React, { memo } from 'react'
import CounterClass from './CounterClass'
import CounterHook from './CounterHook'

const App = memo(() => {
  return (
    <div>
      <h2>Counter 计数器demo: Class - Hook 对比</h2>
      <CounterClass />
      <CounterHook />
    </div>
  )
})

export default App
