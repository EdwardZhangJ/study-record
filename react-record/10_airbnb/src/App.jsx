import React, { memo } from 'react'
import HelloWorld from 'components/hello-world'

const App = memo(() => {
  return (
    <div>
      <h1>App</h1>
      <HelloWorld />
    </div>
  )
})

export default App
