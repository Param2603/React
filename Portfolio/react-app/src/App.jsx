import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Education/>
      <Portfolio/>
      <Footer/>
      {/* <Routes>
      <Route path='/' element={<Hero/>}/>
      </Routes> */}
    </div>
  )
}

export default App