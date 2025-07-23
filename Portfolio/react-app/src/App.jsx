import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import { Route, Routes } from 'react-router'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      {/* <Routes>
      <Route path='/' element={<Hero/>}/>
      </Routes> */}
    </div>
  )
}

export default App