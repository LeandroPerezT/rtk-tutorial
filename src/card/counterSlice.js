import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 1,
  total: 1
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    setTotal: (state, action) => {
      state.total = action.payload
    }
  },
})

// Action creators are generated for each case reducer function

export const { increment, decrement, setTotal } = counterSlice.actions
export const selectValue = (state) => state.counter.value
export const selectTotal = (state) => state.counter.total

export default counterSlice.reducer