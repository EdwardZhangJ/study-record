import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class MainBanner extends Component {
  // static defaultProps = {
  //   banners: [],
  //   title: '默认标题'
  // }
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { banners, title } = this.props
    return (
      <div className='banner'>
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

MainBanner.propTypes = {
  banners: PropTypes.array,
  title: PropTypes.string
}

MainBanner.defaultProps = {
  banners: [],
  title: '默认标题'
}

export default MainBanner
