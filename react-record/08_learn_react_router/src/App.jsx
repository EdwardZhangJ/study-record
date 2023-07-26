import React, { PureComponent } from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'

export class App extends PureComponent {
  render() {
    return (
      <div className="App">
      <div className="header">
        <span>header</span>
        <div className="nav">
          <Link to='/home'>首页</Link>
          <Link to='/about'>关于</Link>
        </div>
        <hr />
      </div>
      <div className="content">
        {/* 映射关系： path => Component  */}
        <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </div>

      <div className="footer">
        <hr />
        Footer
      </div>
    </div>
    )
  }
}
