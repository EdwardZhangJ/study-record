import React, { PureComponent } from 'react'
import homeStyle from './Home.module.css'
export class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={homeStyle.title}>我是 Home 组件标题</h2>
        <p className={homeStyle.content}>我是 Home 组件内容</p>
      </div>
    )
  }
}

export default Home
