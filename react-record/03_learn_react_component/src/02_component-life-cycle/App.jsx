import React, { Component } from 'react'
import HelloWorld from './HelloWorld'
export class App extends Component {
  constructor() {
    super()
    this.state = {
      isShow: true
    }
  }
  switchShow() {
    this.setState({
      isShow: !this.state.isShow
    })
  }
  render() {
    const { isShow } = this.state
    return (
      <div>

        <h1>App</h1>
        <button onClick={() => this.switchShow()}>切换</button>
        {isShow ? <HelloWorld /> : null} 
      </div>
    )
  }
}

export default App
