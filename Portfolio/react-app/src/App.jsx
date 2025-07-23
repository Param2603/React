import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import { Route, Routes } from 'react-router'
import Education from './components/Education'
import Portfolio from './components/Portfolio'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Education/>
      <Portfolio/>
      {/* <Routes>
      <Route path='/' element={<Hero/>}/>
      </Routes> */}
    </div>
  )
}

export default App