import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Categories from '../components/Categories'
import PopularProduct from '../components/PopularProduct'
import Blog from '../components/Blog'
 

const Home = () => {
  return (
    <div>
      <Hero/>
      <Features/>
      <Categories/>
      <PopularProduct/>
      <Blog/>    
    </div>
  )
}

export default Home