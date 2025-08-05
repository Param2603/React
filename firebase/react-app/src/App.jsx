import React from 'react'
import { Route, Routes } from 'react-router'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App