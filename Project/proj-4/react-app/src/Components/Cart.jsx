import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Cart = () => {
  const [data, setData] = useState([])
  const [inputData , setInputData] = useState({name:"",title:"",category:""})

  async function handleSubmit(e){
    e.preventDefault()
    let res = await axios.post("http://localhost:3000/Products" , inputData)
    setData([res.data])
    console.log([res.data])
  }


  async function handleDelete(){
    await axios.delete("http://localhost:3000/Products", )
    getData()
  }

    async function getData(id){
    let res = await axios.get("http://localhost:3000/Products",+id)
    setData(res.data)
  }

  useEffect(() => {
    getData()
  },[])
  return (
    <div>   
      <form onSubmit={handleSubmit} action="">
        <input value={inputData.name} onChange={(e) => setInputData({...inputData, name: e.target.value})} type="text" placeholder='Name' /> 
      <input value={inputData.title} onChange={(e) => setInputData({...inputData, title: e.target.value})} type="text" placeholder='Title' /> 
      <input value={inputData.category} onChange={(e) => setInputData({...inputData, category: e.target.value})} type="text" placeholder='Category' />

      <div>
          <button>Add Cart</button> 
      </div>

        </form> 

        {data && data.map((item)=>{
              return(
                <div key={item.id}>
                  <p>title :- {item.title}</p>
                  <p>Name :- {item.name}</p>

                  <button onClick={() => {handleDelete(item.id)}}>Delete</button>
                  <button>Edit</button>

                  {/* <button onClick={() => {handleDelete()}}>Delete</button> */}
                </div>             
              )
        })
        }       
    </div>

  
  )
}

export default Cart