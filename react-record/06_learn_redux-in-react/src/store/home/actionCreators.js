import * as actionTypes from './constants'
import axios from 'axios'

export const changeBannerAction = (banners) => ({
  type: actionTypes.CHANGE_BANNERS,
  banners,
})

export const changeRecommendAction = (recommends) => ({
  type: actionTypes.CHANGE_RECOMMENDS,
  recommends,
})

export const fetchHomeMultiDataAction = () => {
  return function (dispatch) {
    axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
      const banners = res.data.data.banner.list
      const recommends = res.data.data.recommend.list
      dispatch(changeBannerAction(banners))
      dispatch(changeRecommendAction(recommends))
    })
  }
}