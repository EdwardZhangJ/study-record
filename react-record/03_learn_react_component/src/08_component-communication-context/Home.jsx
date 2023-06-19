import React, { Component } from 'react'
import HomeBanner from './HomeBanner'
import HomeInfo from './HomeInfo'
import UserContext from './context/user-context'
export class Home extends Component {
  render() {
    const {name, age} = this.props
    return (
      <div>
        <h2>Home: {name + age}</h2>
        <HomeInfo />
        <HomeBanner />
        <h2>Home Context: {this.context.name}</h2>
      </div>
    )
  }
}
// 3. 第三部操作：设置组件的contextType为某一个Context
Home.contextType = UserContext
export default Home
