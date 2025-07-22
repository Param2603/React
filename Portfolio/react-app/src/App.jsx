import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Route, Routes } from 'react-router'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='./' element={<Navbar/>}/>
        <Route path='./hero' element={<Hero/>}/>
      </Routes >
    </div>
  )
}

export default App