import React, { useState } from 'react'

const App = () => {
  const [data,setData] = useState({name:"" , email:"" ,password:""})

  function handleSubmit (e){
    e.preventDefault()
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit} action="">
      <div>
        <label htmlFor="">Name:</label>
        <input onChange={(e)=>setData({... data,name:e.target.value
        })} value={data.name} type="text" />
      </div>
      <div>
        <label htmlFor="">Email:</label>
        <input onChange={(e)=>setData({... data,email:e.target.value
        })} value={data.email} type="text" />
      </div>
      <div>
        <label htmlFor="">Password:</label>
        <input onChange={(e)=>setData({... data,password:e.target.value
        })} value={data.password} type="number" />
      </div>
      <button>Submit</button>
    </form>
  )
}

export default App