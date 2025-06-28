import React, { useState } from 'react'

const App = () => {
  const [data, setData] = useState({ name: "", email: "", password: "", confirmpassword: "" })
  const [submitData, setSubmitData] = useState(null)
  const [error, setError] = useState({})

  function handleSubmit(e) {
    e.preventDefault()
    if (validation()) {
      setSubmitData(data)
      setData({ name: "", email: "", password: "", confirmpassword: "" })

    }
  }

  function validation() {
    let obj = {}
    let val = true

    if (!data.name.trim()) {
      val = false
      obj.name = "name is Reqired"
    }
    if (!data.email.trim()) {
      val = false
      obj.email = "email is Reqired"
    }
    if (!data.password.trim()) {
      val = false
      obj.password = "password is Reqired"
    }

    setError(obj)
    return val
  }

  return (
    <form className='bg-[#f5f5f5] text-black border-2 border- px-2 py-4' onSubmit={handleSubmit} action="">
      <div className='mb-5'>
        <label htmlFor="">Name:</label>
        <input className='border-1 rounded-[8px] ml-2' onChange={(e) => setData({
          ...data, name: e.target.value
        })} value={data.name} type="text" />
        {error.name && <p>{error.name}</p>}
      </div>
      <div className='mb-5'>
        <label htmlFor="">Email:</label>
        <input className='border-1 rounded-[8px] ml-2' onChange={(e) => setData({
          ...data, email: e.target.value
        })} value={data.email} type="text" />
        {error.email && <p>{error.email}</p>}
      </div>
      <div className='mb-5'>
        <label htmlFor="">Password:</label>
        <input className='border-1 rounded-[8px] ml-2' onChange={(e) => setData({
          ...data, password: e.target.value
        })} value={data.password} type="password" />
        {error.password && <p>{error.password}</p>}
      </div>

      <button className='cursor-pointer bg-amber-300 hover:bg-amber-200 hover:text-blue-400 px-2 py-2 rounded-[15px] text-red-500'>Submit</button>
    </form>
  )
}

export default App