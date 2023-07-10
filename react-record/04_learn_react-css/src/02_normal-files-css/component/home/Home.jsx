import React, { PureComponent } from 'react'
import './Home.css'
export class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2 className="title">我是 Home 组件标题</h2>
        <p className="content">我是 Home 组件内容</p>
      </div>
    )
  }
}

export default Home
