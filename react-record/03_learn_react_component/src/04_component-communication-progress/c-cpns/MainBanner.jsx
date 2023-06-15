import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class MainBanner extends Component {
  constructor(props) {
    console.log('MainBanner', props);
    super(props)
  }
  render() {
    const { banners, title } = this.props
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

MainBanner.propTypes = {
  banners: PropTypes.array.isRequired,
  title: PropTypes.string
}

export default MainBanner
