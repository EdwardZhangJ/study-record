import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchHomeMultiDataAction = createAsyncThunk(
  'fetch/homeMultiData', 
  async (extraInfo, {dispatch, getState}) => {
  // 1. 发送网络请求，获取数据
  const res = await axios.get('http://123.207.32.32:8000/home/multidata')
  // 2. 取出数据，在此处直接dispatch(可以不用监听)
  dispatch(changeBanners(res.data.data.banner.list))
  dispatch(changeRecommends(res.data.data.recommend.list))
  
  // 3. 返回结果，action状态会变成fulfilled
  return res.data
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    banners: [],
    recommends: [],
  },
  reducers: {
    changeBanners(state, action) {
      state.banners = action.payload
    },
    changeRecommends(state, action) {
      state.recommends = action.payload
    },
  },
  // 1. 基础对象写法
  // extraReducers: {
  //   // [fetchHomeMultiDataAction.pending]: (state, action) => {
  //   //   console.log('action', action);
  //   // },
  //   [fetchHomeMultiDataAction.fulfilled]: (state, action) => {
  //     state.banners = action.payload.data.banner.list
  //     state.recommends = action.payload.data.recommend.list
  //   },
  //   // [fetchHomeMultiDataAction.rejected]: (state, action) => {
  //   //   console.log('action', action);
  //   // }
  // }
  // 2. 链式调用写法
  // extraReducers: (builder) => {
  //   builder.addCase(fetchHomeMultiDataAction.fulfilled, (state, action) => {
  //     state.banners = action.payload.data.banner.list
  //     state.recommends = action.payload.data.recommend.list
  //   })
  // }
})


export const { changeBanners, changeRecommends } = homeSlice.actions

export default homeSlice.reducer
