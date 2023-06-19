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
  getTabItem(item) {
    if(item === '流行') {
      return <span>{item}</span>
    }
    else if (item === '新款') {
      return <button>{item}</button>
    }else {
      return <i>{item}</i>
    }
  }
  render() {
    const {titleList,tabIndex} = this.state
    return (
      <div className='app'>
        <TabControl 
          tabClick={i => this.tabClick(i)} 
          titleList={titleList}
          itemType={item => this.getTabItem(item)}
          />
        <h1>{titleList[tabIndex]}</h1>
      </div>
    )
  }
}

export default App
