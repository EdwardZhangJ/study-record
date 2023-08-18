import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 66,
    message: 'hello world'
  },
  reducers: {
    addNumberAction(state, {payload}) {
      state.count = state.count + payload
    },
    subNumberAction(state, {payload}) { 
      state.count = state.count - payload
    },
    changeMessageAction(state, {payload}) {
      state.message = payload
    }
  }
})

export const { addNumberAction, subNumberAction, changeMessageAction } = counterSlice.actions
export default counterSlice.reducer
