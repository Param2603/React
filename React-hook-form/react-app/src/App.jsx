import React from 'react'
import { useForm } from 'react-hook-form'

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  function onSubmit(data) {
    console.log("Submitting the Form", data)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Sign Up</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">User Name:</label>
          <input 
            type="text" 
            {...register('username', { required: true, maxLength: 20 })}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">Username is required and must be under 20 characters.</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email:</label>
          <input 
            type="email" 
            {...register('email', { required: true })}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">Email is required.</p>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Password:</label>
          <input 
            type="password" 
            {...register('password', { required: true })}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">Password is required.</p>
          )}
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-500  cursor-pointer text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default App
