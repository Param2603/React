import React, { useEffect, useState } from 'react'

const App = () => {
  const [count, setCount] = useState(JSON.parse(localStorage.getItem("local")) || 0);

  useEffect(() => {
    localStorage.setItem("local", JSON.stringify(count))
  }, [count])

  return (
    <div className='flex justify-center bg-gray-100 px-4 h-60'>
      <div className='bg-white shadow-lg rounded-[15px] p-8 w-full text-center'>

        <p className='font-bold text-[30px] text-blue-400 mb-6'>Counter Application</p>
        <p className='text-[20px] text-black font-semibold mb-4'>Count: <span className='text-gray-600'>{count}</span></p>

        <div className='flex justify-center gap-4'>
          <button className='bg-green-600 hover:bg-green-700 cursor-pointer text-white font-medium py-2 px-4 rounded-[8px]'onClick={() => setCount(count + 1)}>Increment</button>

          <button className='bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-[8px] cursor-pointer'onClick={() => setCount(count - 1)}disabled={count == 0}>Decrement</button>

          <button className='bg-gray-500 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-[8px] cursor-pointer'onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </div>
  )
}
export default App