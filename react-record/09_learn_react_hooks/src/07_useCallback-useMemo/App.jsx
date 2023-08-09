import React, { memo, useCallback, useRef, useState } from 'react'

// useCallback性能优化的点
// 1. 当需要将一个函数传递给子组件时，最好使用useCallback进行优化，将优化之后的函数传递给子组件

// props中的属性发生改变时，组件本身就会被重新渲染
const EDHome = memo((props) => {
  const { increment } = props

  console.log('EDHome重新渲染了===');

  return (
    <div>
      <button onClick={increment}>increment + 1</button>
    </div>
  )
})


const App = memo(() => {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('Hello World')
  // 闭包陷阱
  // const increment = useCallback(function foo() {
  //   console.log('执行了increment函数')
  //   setCount(count + 1)
  // }, [count])

  // 进一步优化：当count发生改变时，也是用同一个函数(了解)
  // 做法一：将count依赖移除掉，缺点：闭包陷阱
  // 做法二：useRef，在组件多长渲染，返回的是同一个值
  const countRef = useRef()
  countRef.current = count
  const increment = useCallback(function foo() {
    console.log('执行了increment函数')
    setCount(countRef.current + 1)
  }, [])

  // const increment = () => setCount(count + 1)

  return (
    <div>
      <h2>计数： {count}</h2>

      <EDHome increment={increment}></EDHome>
      <button onClick={increment}>+1</button>

      <h2>Message: {message + Math.random()}</h2>
      <button onClick={e => setMessage('你好啊')}>修改message</button>
    </div>
  )
})

export default App
