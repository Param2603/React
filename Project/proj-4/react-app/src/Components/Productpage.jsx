import React, { useState } from 'react'

const Productpage = () => {
    const [data, setData] = useState({name:"",title:"",category:""})


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
{/* 
      <div>
        <Link to={"/productpage"}>
          <button>Add Cart</button>
        </Link>

      </div> */}
        </form> 

        {setData && <div>
          <p>{setData.name}</p>
          <p>{setData.title}</p>
          <p>{setData.category}</p>
          </div>}    
    </div>

  )
}

export default Productpage