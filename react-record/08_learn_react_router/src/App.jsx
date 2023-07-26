import React, { PureComponent } from 'react'
import {Link, NavLink, Route, Routes} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import './index.css'
export class App extends PureComponent {
  render() {
    return (
      <div className="App">
      <div className="header">
        <span>header</span>
        <div className="nav">
          {/* <Link to='/home'>首页</Link>
          <Link to='/about'>关于</Link> */}
          
          {/* <NavLink NavLink to='/home'>首页</NavLink>
          <NavLink to='/about'>关于</NavLink> */}

          <NavLink to='/home' style={({isActive})=>({color: isActive ? 'red' : ''})}>首页</NavLink>
          <NavLink to='/about' style={({isActive})=>({color: isActive ? 'red' : ''})}>关于</NavLink>
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
