import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './todo/todoslice'

export const store = configureStore({
  reducer: {
    todostore:counterSlice
  },
})