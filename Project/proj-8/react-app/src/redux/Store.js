import { configureStore } from '@reduxjs/toolkit'

import taskReducer from "./todolist/todoslice"

export const store = configureStore({
  reducer: {
    tasks: taskReducer
  },
})



