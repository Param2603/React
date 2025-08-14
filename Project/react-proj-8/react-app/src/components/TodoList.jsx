import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, editTask, searchTask, toggleComplete } from '../redux/todo/todoSlice';
import { nanoid } from 'nanoid';

const TodoList = () => {
    const [data,setData] = useState("")
    const dispatch = useDispatch()
    const {todo, filter} = useSelector((state) => state.todo)
    // console.log(todo)
    const [editText,setEditText] = useState("")
    const [editId,setEditId] = useState(null)


    function handleSubmit(e){
        e.preventDefault();
        if(data.trim() === '') return
        dispatch(addTask({
            id: nanoid(),
            text: data.trim(),
            completed: false,
        }))
        alert('Task Added Successfully')
        setData("")
    }

    function handleEdit (id,text){
        setEditId(id)
        setEditText(text)
    }

    function handleUpdate (id){
        if(editText.trim()){
            dispatch(editTask({id,nextText: editText.trim()}))
            setEditId(null)
            setData("")
            setEditText("")
            alert('Task Updated Successfully')
        }
    }

    const todoData = todo.filter(data => {
        if(filter.status === 'completed') return data.completed;
        if(filter.status === 'pending') return !data.completed;
        return true;
    }).filter(data => data.text.toLowerCase().includes(filter.search.toLowerCase()))

  return (
    <div className='max-w-xl mx-auto p-4'>
        <p className='text-[25px] font-bold mb-4 pt-15'>Todo List</p>

        <form onSubmit={handleSubmit} className='flex items-center gap-2 mb-4'>

            <input type="text" 
            value={data}
            onChange={(e) => setData(e.target.value)}
            placeholder='Enter New Task'  
            className='p-2 border rounded-[5px] flex-1' />

            <button type='submit' className='bg-blue-500 text-white px-6 py-2 rounded-[5px] hover:bg-blue-600 cursor-pointer'>Add Task</button>
        </form>

        <div>
          <input type="text" value={filter.search}
          onChange={(e) => dispatch(searchTask(e.target.value))}
          className='w-full p-2 border rounded mb-4'
          placeholder='Search...'/>  
        </div>

        <div>
            <ul className='space-y-2'>
                {todoData.length === 0 && <p>No Tasks Found</p>}
                {todoData.map(data => (<li key={data.id} className='flex items-center justify-between p-3 border rounded'>
                    <div className='flex items-center gap-2 '>
                        <input type="checkbox" checked={data.completed} onChange={(e) => dispatch(toggleComplete(data.id))} 
                        className='border rounded px-2'/>
                        {
                           editId === data.id ? (
                            <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)}
                            className='border rounded px-2 ' />
                           ) : (
                            <span className={data.completed ? 'line-through text-gray-500':''}>{data.text}</span>
                           )
                        }
                    </div>

                    <div>
                        {
                            editId === data.id ? (
                                <button 
                                onClick={() => handleUpdate(data.id )}
                                className='text-gray-600 hover:underline cursor-pointer'>Update</button>
                            ) : (
                                <button 
                                onClick={() => handleEdit(data.id,data.text)} className='text-blue-600 hover:underline cursor-pointer'>Edit</button>                  
                            )
                        }

                        <button onClick={() => dispatch(deleteTask(data.id))} className='text-red-500 hover:underline cursor-pointer pl-2'>Delete</button>

                    </div>
                </li>))}
            </ul>
        </div>
    </div>
  )
}

export default TodoList