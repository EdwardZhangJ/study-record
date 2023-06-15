import React, { Component } from 'react'
import TabControl from './TabControl/index'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      titleList: ['流行', '新款', '精选'],
      tabIndex: 0
    }
  }
  tabClick(tabIndex) {
    this.setState({
      tabIndex
    })
  }
  render() {
    const {titleList,tabIndex} = this.state
    return (
      <div className='app'>
        <TabControl tabClick={i => this.tabClick(i)} titleList={titleList}/>
        <h1>{titleList[tabIndex]}</h1>
      </div>
    )
  }
}

export default App
