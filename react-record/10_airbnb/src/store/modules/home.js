import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

import { getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData, getHomeHotRecommendData } from '@/services'

export const fetchHomeDataAction = createAsyncThunk('fetchData', async (payload, {dispatch}) => {
  // const res = await getHomeGoodPriceData()
  // return res
  getHomeGoodPriceData().then((res) => {
    dispatch(changeGoodPriceInfoAction(res))
  })

  getHomeHighScoreData().then((res) => {
    dispatch(changeHighScoreDataInfoAction(res))
  })

  getHomeDiscountData().then((res) => {
    dispatch(changeDiscountInfoAction(res))
  })

  getHomeHotRecommendData().then((res) => {
    dispatch(changeRecommendInfoAction(res))
  })
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, {payload}) {
      state.goodPriceInfo = payload
    },
    changeHighScoreDataInfoAction(state, {payload}) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, {payload}) {
      state.discountInfo = payload
    },
    changeRecommendInfoAction(state, {payload}) {
      state.recommendInfo = payload
    },
  },
  extraReducers: {
    // [fetchHomeDataAction.fulfilled]: (state, {payload}) => {
    //   console.log('payload', payload)
    //   state.goodPriceInfo = payload
    // },
  },
})

export const { changeGoodPriceInfoAction, changeHighScoreDataInfoAction, changeDiscountInfoAction, changeRecommendInfoAction } = homeSlice.actions

export default homeSlice.reducer
