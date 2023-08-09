import React, { memo, useContext } from 'react'
import { UserContext, ThemeContext } from './context'
const App = memo(() => {
  // 使用 Context
  const user = useContext(UserContext)
  const theme = useContext(ThemeContext)
  
  return (
    <div>
      <h2>App</h2>
      <h3>user: {user.name}</h3>
      <h3>theme: {theme.color}</h3>
    </div>
  )
})


export default App
