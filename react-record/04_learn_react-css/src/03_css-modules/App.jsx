import React, { PureComponent } from 'react'
import appStyle from './App.module.css'
import Home from './component/home/Home'
export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={appStyle.title}>我是标题</h2>
        <p className={appStyle.content}>我是内容</p>
        <Home/>
      </div>
    )
  }
}

export default App
