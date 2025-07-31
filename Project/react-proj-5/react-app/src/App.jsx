import React, { useEffect, useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';

const App = () => {
  const [data, setData] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem('TaskList')) || []
  );

  const handleAdd = () => {
    if (!data.trim()) {
      alert('Please enter a task before adding.');
      return;
    }
    setTaskList([...taskList, data]);
    alert("Task Added Successfully")
    setData("");
  };

  const handleDelete = (index) => {
    const filtered = taskList.filter((_, i) => i !== index);
    setTaskList(filtered);
    alert("Task Deleted Successfully")
  };

  const handleEdit = (item, index) => {
    setData(item);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleUpdate = () => {
    const updated = taskList.map((item, i) =>
      i === editIndex ? data : item
    );
    setTaskList(updated);
    setData("");
    setIsEditing(false);
    alert('Task updated successfully');
  };

  useEffect(() => {
    localStorage.setItem('TaskList', JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className=" align-middle items-center flex h-[100vh] justify-center">
      <div className=" w-auto bg-white rounded-[16px] p-6 shadow-2xl">
        <h1 className="text-[30px] font-bold mb-6 text-center text-gray-800">Todo List</h1>

        <div className="flex gap-2 mb-4">
          <input type="text" value={data} onChange={(e) => setData(e.target.value)}  placeholder="Enter your task"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-[5px] focus:outline-none"
          />
          {isEditing ? ( <button onClick={handleUpdate} className="bg-yellow-500 text-white px-4 cursor-pointer py-2 rounded-[5px]" >
              Update </button>) : (<button onClick={handleAdd} className="bg-blue-600 text-white cursor-pointer px-4 py-2 rounded-[5px]" >
              Add Task </button>)}
        </div>

        {taskList.length === 0 ? ( <p className="text-center text-gray-500">No tasks yet.</p>) : ( <ul className="space-y-3">
          {taskList.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-3 bg-gray-100 rounded-[5px]"
              >
                <span className="flex-1">{item}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(item, index)}
                    className="flex items-center gap-1 bg-yellow-400 px-2 py-1 rounded hover:bg-yellow-500"
                  >
                    <CiEdit /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="flex items-center gap-1 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    <MdDelete /> Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
