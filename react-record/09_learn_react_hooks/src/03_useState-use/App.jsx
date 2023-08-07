import React, { memo, useState } from 'react'

const App = memo(() => {
  const [message, setMessage] = useState('hello world')
  return (
    <div>
      <h2>App: {message}</h2>
      <button onClick={e => setMessage('你好啊，李银河')}>修改文本</button>
    </div>
  )
})

export default App
