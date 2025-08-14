import { createSlice } from '@reduxjs/toolkit'

const loadDataFromLocalStorage = () => {
    try {
        const data = localStorage.getItem('todoData')
        return data ? JSON.parse(data) : []
    } catch (error) {
        return []
    }
}

const saveDataToLocalStorage = (todo) => {
    localStorage.setItem("todoData", JSON.stringify(todo))
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todo: loadDataFromLocalStorage(),
        filter: {
            status: "all",
            search: ""
        }
    },
    reducers: {
        addTask: (state, action) => {
            state.todo.push(action.payload);
            saveDataToLocalStorage(state.todo)
        },

        deleteTask: (state, action) => {
            state.todo = state.todo.filter(todo => todo.id !== action.payload);
            saveDataToLocalStorage(state.todo)
        },

        toggleComplete: (state,action) => {
            const todoData = state.todo.find(t => t.id === action.payload);
            if(todoData) todoData.completed = !todoData.completed;
            saveDataToLocalStorage(state.todo)
        },

        editTask: (state,action) => {
            const {id, nextText} = action.payload;
            const todoData = state.todo.find(t => t.id === id);
            if(todoData) todoData.text = nextText;
            saveDataToLocalStorage(state.todo)
        },

        searchTask: (state,action) => {
            state.filter.search = action.payload
        }
    }
})

export const { addTask,deleteTask,editTask,searchTask,toggleComplete } = todoSlice.actions

export default todoSlice.reducer