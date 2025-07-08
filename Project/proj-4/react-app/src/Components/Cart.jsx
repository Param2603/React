import React, { useState } from 'react'
import axios from 'axios'

const Cart = () => {
  const [data, setData] = useState({name:"",title:"",category:""})

  async function handleSubmit(){
    let res = await axios.post("http://localhost:3000/Products")
    setData(res.data)
  }


  function handleSubmit (){
    e.preventDefault()
    console.log(data)
  }
  return (
    <div>   
      <form onSubmit={handleSubmit} action="">
        <input value={data.name} onChange={(e) => setData({...data, name: e.target.value})} type="text" placeholder='Name' /> 
      <input value={data.title} onChange={(e) => setData({...data, title: e.target.value})} type="text" placeholder='Title' /> 
      <input value={data.category} onChange={(e) => setData({...data, category: e.target.value})} type="text" placeholder='Category' />

      <div>
        <button >Add Cart</button>
      </div>

      <div>

      </div>
        </form> 
      
    </div>

  
  )
}

export default Cart