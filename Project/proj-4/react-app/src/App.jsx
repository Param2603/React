import React from 'react'
import { Route, Routes } from 'react-router'
import Cart from './Components/Cart'
import Productpage from './Components/Productpage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Cart/>}/>
        <Route path='/productpage' element={<Productpage/>}/>
      </Routes>
    </div>
  )
}

export default App