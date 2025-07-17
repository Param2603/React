import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todo: [],
}

export const counterSlice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
    addTodo: (state,action) => {
        state.todo=[...state.todo,action.payload]
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTodo } = counterSlice.actions

export default counterSlice.reducer