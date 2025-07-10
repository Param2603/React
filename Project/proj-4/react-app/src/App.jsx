import React from 'react'
import { Route, Routes } from 'react-router'
import Cart from './Components/Cart'
import Productpage from './Components/Productpage'
import Home from './Components/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/productpage' element={<Productpage/>}></Route>
      </Routes>
    </div>
  )
}

export default App