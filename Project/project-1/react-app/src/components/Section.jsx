import React from 'react'

const Section = () => {
  return (
     <section className='bg-amber-100 p-5 mt-2 border-2  flex'>
        <div className='max-w-xl'>
          <p className='text-5xl font-bold leading-tight mb-10'> Discover the World's Most Beautiful Places</p>
          <p className='text-xl mb-10 text-gray-500'>Explore destinations, experience unique cultures and create memories that last a lifetime.</p>
          <div className='flex gap-4'>
             <button className='bg-green-500 hover:bg-green-700 cursor-pointer text-white text-center font-semibold py-3 px-6 rounded-[10px] '>Explore New Destinations</button>
             <button className='bg-[#ff0000] hover:bg-white hover:text-gray-800 text-white font-bold text-center py-3 px-6 border-3 border-white rounded-[10px] cursor-pointer transition duration-300'>Watch videos</button>
          </div>
        </div>

        <div className='h-auto w-auto '>
          <img src="https://softwareag.scene7.com/is/image/softwareagprod/carnival-hero-4?wid=1050&dpr=off" alt="" />
        </div>
     </section>   
  )
}

export default Section