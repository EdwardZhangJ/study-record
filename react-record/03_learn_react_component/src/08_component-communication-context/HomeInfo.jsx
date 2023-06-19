import React, { Component } from 'react'
import ThemeContext from './context/theme-context'

export class HomeInfo extends Component {
  render() {
    // 4. 第四步操作：获取数据，并且使用数据
    console.log(this.context)
    return (
      <div>
        Home Info: {this.context.color} 
      </div>
    )
  }
}

// 3. 第三部操作：设置组件的contextType为某一个Context
HomeInfo.contextType = ThemeContext

export default HomeInfo
