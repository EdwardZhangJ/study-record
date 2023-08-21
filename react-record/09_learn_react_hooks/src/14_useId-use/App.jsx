import React, { memo, useState } from 'react'
import { useId } from 'react'

const App = memo(() => {
  const id = useId()
  console.log(id)

  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
    </div>
  )
})

export default App
