import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const Signup = () => {
    const [data , setData] = useState({name:"",email:"",password:""})
    const navigate = useNavigate()
  return (
    <div>
        <form>
            <div>
                <label htmlFor="">Name:</label>
                <input value={data.name} onChange={(e) => setData({...data, name: e.target.value})} type="text" />
            </div>

            <div>
                <label htmlFor="">Email:</label>
                <input value={data.email} onChange={(e) => setData({...data, email: e.target.value})} type="text" />
            </div>

            <div>
                <label htmlFor="">Password:</label>
                <input value={data.password} onChange={(e) => setData({...data, password: e.target.value})} type="password" />
            </div>

            <button onClick={() => navigate("/login")}>Signup</button>
        </form>
    </div>
  )
}

export default Signup