import React, { Component } from 'react'
import './style.css'
export class TabControl extends Component {
  constructor() {
    super()
    this.state = {
      currentIndex: 0
    }
  }
  itemClick(index) {
    this.setState({ currentIndex: index })
    this.props.tabClick(index)
  }
  render() {
    const {titleList} = this.props
    const {currentIndex} = this.state
    return (
      <div className='tab-control'>
        {
          titleList.map((item, index) => {
            return (
              <div 
                key={item} 
                className={`tab-item ${index === currentIndex ? 'active': "" }`}
                onClick={e=> this.itemClick(index)}>
                <span className='text'>{item}</span>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default TabControl
