import React, { memo, useRef } from 'react'

const App = memo(() => {
  const titleRef = useRef()
  
  function showTitleDom() {
    console.log(titleRef.current);
  }

  return (
    <div>
      <h2 ref={titleRef}>Hello World</h2>
      <button onClick={showTitleDom}>查看title的dom</button>
    </div>
  )
})

export default App
