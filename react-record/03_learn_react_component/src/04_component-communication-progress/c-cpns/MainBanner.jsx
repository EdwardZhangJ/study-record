import React, { Component } from 'react'

export class MainBanner extends Component {
  constructor(props) {
    console.log('MainBanner', props);
    super(props)
    this.state = {
      title: '我是MainBanner组件'
    }
  }
  render() {
    const { banners } = this.props
    const { title } = this.state
    return (
      <div>
        <h2>轮播图: {title}</h2>
        <ul>
          {
            banners.map((item) => {
              return <li key={item.acm}>{item.title}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default MainBanner
