import React from 'react'
import Showpage from './Components/Showpage'
import { Route, Routes } from 'react-router'

const App = () => {
  return (
    <Routes>
      <Route path='/showpage' element={<Showpage/>}>
        <Showpage/>
      </Route>

    </Routes>
  )
}

export default App