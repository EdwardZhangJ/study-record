import React, { memo, useEffect } from 'react'
import './style.css'

const Home = memo(() => {
  useEffect(() => {
    function handleScroll() {
      console.log(window.scrollX, window.scrollY);
    }

    window.addEventListener("scroll", handleScroll)
  
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  

  return <h1>Home Page</h1>
})

const About = memo(() => {
  return <h1>About Page</h1>
})

const App = memo(() => {


  return (
    <div className="app">
      <h1>App Root Component</h1>
      <Home /> 
      <About />
    </div>
  )
})

export default App
