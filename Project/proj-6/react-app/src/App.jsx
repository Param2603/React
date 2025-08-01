import React from 'react'
import { Route, Routes } from 'react-router'
import Header from './components/Header'
import Home from './pages/Home'
import Collection from './pages/Collection'
import CategoryCollection from './pages/CategoryCollection'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/category-collection' element={<CategoryCollection/>}/>
      </Routes>
    </div>
  )
}

export default App