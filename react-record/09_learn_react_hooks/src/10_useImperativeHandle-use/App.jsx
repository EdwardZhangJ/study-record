import React, { memo, useRef, forwardRef, useImperativeHandle } from 'react'

const HelloWorld = memo(forwardRef((props, ref) => {
  const inputRef = useRef()

  // 子组件对父组件传入的ref进行处理
  useImperativeHandle(ref, () => {
    return {
      focus: () => {
        console.log('focus');
        inputRef.current.focus()
      },
      setValue: (value) => {
        inputRef.current.value = value
      }
    }
  })
  return <input type="text" ref={inputRef}/>
}))

const App = memo(() => {
  const titleRef = useRef()
  const inputRef = useRef()

  function handleDom () {
    // console.log(titleRef.current);
    inputRef.current.focus()
    inputRef.current.setValue('hello world')
  }
  return (
    <div>
      <h2 ref={titleRef}>哈哈哈</h2>
      <HelloWorld ref={inputRef}/>
      <button onClick={handleDom}>获取dom</button>
    </div>
  )
})

export default App
