import React, { PureComponent } from 'react'
import Cart from './pages/Cart'
export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      isLogin: false
    } 
  }
  loginClick() {
    localStorage.setItem('token', 'EdwardWest')
    // this.forceUpdate()  // 强制执行render
  }
  render() {
    return (
      <div>
        App: 
        <button onClick={e=> this.loginClick()}>登陆</button>
        <Cart />
      </div>
    )
  }
}

export default App
