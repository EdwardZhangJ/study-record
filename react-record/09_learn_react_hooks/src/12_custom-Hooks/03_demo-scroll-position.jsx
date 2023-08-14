import React, { memo, useEffect } from 'react'
import { useScrollPosition } from './hooks'
import './style.css'

const Home = memo(() => {
  

  return <h1>Home Page</h1>
})

const About = memo(() => {
  return <h1>About Page</h1>
})

const App = memo(() => {

  const [scrollX, scrollY] = useScrollPosition( )

  return (
    <div className="app">
      <h1>App Root Component</h1>
      <h3>scrollX: {scrollX}</h3>
      <h3>scrollY: {scrollY}</h3>
      <Home /> 
      <About />
    </div>
  )
})

export default App
