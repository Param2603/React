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
        
    }

})