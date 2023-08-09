import React, { memo, useEffect, useState } from 'react'

const App = memo(() => {
  const [counter, setCounter] = useState(200)

  // 负责告知react,在执行完当前组件渲染之后要执行的副作用代码
  useEffect(() => {
    // 1. 监听事件
    // const unsubscribe = store.subscribe(() => {})
    console.log('监听redux中数据变化，监听eventBus中的why事件');
    // 返回值: 回调函数 => 组件被重新渲染或者组件卸载时执行
    return () => {
      // 2. 执行一些清除操作
      //  unsubscribe()
      console.log('取消监听redux中数据变化，取消监听eventBus中的why事件');
    }
  })

  // 一个函数式组件中，可以存在多个useEffect
  useEffect(() => {
    // 2. 对redux中数据变化监听
    return () => {
      // 取消redux中数据变化监听
    }
  })

  useEffect(() => {
    // 3. 监听eventBus中的why事件
    return () => {
      // 取消监听eventBus中的why事件
    }
  })

  return (
    <div>
      <h2>counter: {counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
    </div>
  )
})

export default App
