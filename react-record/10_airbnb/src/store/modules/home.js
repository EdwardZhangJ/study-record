import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

import {getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData} from '@/services'

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
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
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
  },
  extraReducers: {
    // [fetchHomeDataAction.fulfilled]: (state, {payload}) => {
    //   console.log('payload', payload)
    //   state.goodPriceInfo = payload
    // },
  },
})

export const {changeGoodPriceInfoAction, changeHighScoreDataInfoAction, changeDiscountInfoAction} = homeSlice.actions

export default homeSlice.reducer
