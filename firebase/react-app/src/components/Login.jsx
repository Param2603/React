import React, { useState } from 'react'

const Login = () => {
    const [data,setData] = useState()
  return (
    <div>
        <form>
             <div>
                <label htmlFor="">Email:</label>
                <input type="text" />
            </div>

            <div>
                <label htmlFor="">Password:</label>
                <input type="password" />
            </div>

            <button>Login</button>
        </form>
    </div>
  )
}

export default Login