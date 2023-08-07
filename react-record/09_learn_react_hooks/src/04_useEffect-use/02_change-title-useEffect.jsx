import React, { memo, useEffect, useState } from 'react'

const App = memo(() => {
  const [counter, setCounter] = useState(200)

  useEffect(() => {
    // 当前传入的回调函数会在组件被渲染完成后，自动执行
    // 网络请求/DOM操作（修改标题）/事件监听
    document.title = counter
  })
  return (
    <div>
      <h2>当前计数：{counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
    </div>
  )
})

export default App
