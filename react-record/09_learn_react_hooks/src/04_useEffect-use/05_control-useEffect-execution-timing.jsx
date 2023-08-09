
import React, { memo, useEffect, useState } from 'react'

const App = memo(() => {
  const [counter, setCounter] = useState(200)

  useEffect(() => {
    console.log("修改标题")
  })
  useEffect(() => {
    console.log('监听redux中数据');
    return () => {
    }
  }, [])

  useEffect(() => {
    console.log('监听eventBus中的why事件');

    return () => {
    }
  }, [])

  useEffect(() => {
    console.log("发送网络请求，从服务器获取数据")
    return () => {
    }
  }, [])

  return (
    <div>
      <h2>counter: {counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
    </div>
  )
})

export default App
