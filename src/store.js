import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './cards/counterSlice'

export const store = configureStore({
  reducer: { 
    counter: counterReducer,
  }
})