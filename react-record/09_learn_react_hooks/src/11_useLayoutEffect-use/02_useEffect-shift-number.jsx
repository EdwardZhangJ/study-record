import React, { memo, useEffect, useLayoutEffect, useState } from 'react'

const App = memo(() => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('useEffect');
    if(count === 0) {
      setCount(Math.random() + 99)
    }
  })

  useLayoutEffect(() => {
    console.log('useLayoutEffect');
  })

  console.log('App render');

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
    </div>
  )
})

export default App
