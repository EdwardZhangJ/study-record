import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const fetchHomeDataAction = createAsyncThunk('fetchdata', () => {
  // 1626- day90  8:18/18:08
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: []
  },
  reducers: {
    changeGoodPriceInfoAction(state, {payload}) {
      state.goodPriceInfo = payload
    }
  }
})

export const { changeGoodPriceInfoAction } = homeSlice.actions

export default homeSlice.reducer
