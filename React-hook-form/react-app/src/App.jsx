import React from 'react'
import { useForm } from 'react-hook-form'

const App = () => {
   const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  function onSubmit(data){
    console.log("Submitting the Form", data)
  }

  return (
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">User Name:</label>
          <input type="text" {...register('username',  { required: true, maxLength: 20 })} />
        </div>

        <div>
          <label htmlFor="">Email:</label>
          <input type="text" {...register('email', { required: true})} />
        </div>

        <div>
          <label htmlFor="">Password:</label>
          <input type="password" {...register('password', { required: true})}/>
        </div>

        <button>Submit</button>
      </form>
    
  )
}

export default App