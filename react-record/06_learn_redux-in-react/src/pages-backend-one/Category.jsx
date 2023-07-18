import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { changeBannerAction, changeRecommendAction } from '../store/actionCreators';

export class Category extends PureComponent {
  componentDidMount() {
    axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
      const banners = res.data.data.banner.list
      const recommends =res.data.data.recommend.list
      this.props.changeBanners(banners)
      this.props.changeRecommends(recommends)
    })
  }
  render() {
    return (
      <div>
        <h2>Category Page</h2>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeBanners(banners) {
    dispatch(changeBannerAction(banners))
  },
  changeRecommends(recommends) {
    dispatch(changeRecommendAction(recommends))
  }
})

export default connect(null, mapDispatchToProps)(Category)
