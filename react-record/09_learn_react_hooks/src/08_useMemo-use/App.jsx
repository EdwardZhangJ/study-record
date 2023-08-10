import React, { memo } from 'react'
import { useMemo, useState } from 'react'

function calcNumTotal(num) {
  console.log('calcNumTotal执行了')

  let total = 0
  for (let i = 0; i <= num; i++) {
    total += i
  }
  return total
}

const App = memo(() => {

  const [count, setCount] = useState(0)
  
  let result = useMemo(() => {
    return calcNumTotal(50)
  }, [])

  return (
    <div>
      <h2>计算结果：{result}</h2>
      <h2>计数器：{count}</h2>
      <button onClick={ e => setCount(count + 1)}>+1</button>
    </div>
    
  )
})

export default App
