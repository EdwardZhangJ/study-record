import React, { Component } from 'react'
import NavBar from './nav-bar'

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar>
          <button>按钮</button>
          <h2>标题</h2>
          <i>斜体文字</i>
        </NavBar>
      </div>
    )
  }
}

export default App
