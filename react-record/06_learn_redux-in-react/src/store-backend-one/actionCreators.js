import * as actionTypes from './constants'
import axios from 'axios'

export const addNumberAction = (num) => ({
  type: actionTypes.ADD_NUMBER,
  num,
})
export const subNumberAction = (num) => ({
  type: actionTypes.SUB_NUMBER,
  num,
})

export const changeBannerAction = (banners) => ({
  type: actionTypes.CHANGE_BANNERS,
  banners,
})

export const changeRecommendAction = (recommends) => ({
  type: actionTypes.CHANGE_RECOMMENDS,
  recommends,
})

export const fetchHomeMultiDataAction = (dispatch, state) => {
  // 如果是一个普通的action，那么就可以直接返回一个对象
  // 问题：对象中是不能直接拿到从服务器请求的异步数据的
  // return {}
  function foo(dispatch, getState) {
    // 异步操作：网络请求
    console.log('foo function execution--------', getState().counter);
    axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
      const banners = res.data.data.banner.list
      const recommends = res.data.data.recommend.list
      // dispatch({type: actionTypes.CHANGE_BANNERS, banners})
      // dispatch({type: actionTypes.CHANGE_RECOMMENDS, recommends})
      dispatch(changeBannerAction(banners))
      dispatch(changeRecommendAction(recommends))
    })
  }
  // 如果返回的是一个函数，那么redux是不支持的
  return foo
}
