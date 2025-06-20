import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex bg-black opacity-85 text-white p-5 justify-between items-center '>
      <div className='font-bold'>
        <p className='cursor-pointer text-[30px] hover:underline font-black transition duration-300'>Tours<span className='text-[#00ff00]'>&</span><span className='text-[#00ff00]'>Travels</span></p>
      </div>

      <div className='flex gap-4 font-semibold'>
        <a className=' text-[20px] hover:text-[#00ff00] transition-all duration-300' href="#">Home</a>
        <a className=' text-[20px] hover:text-[#00ff00] transition-all duration-300' href="#">Destinations</a>
        <a className=' text-[20px] hover:text-[#00ff00] transition-all duration-300' href="#">Tours</a>
        <a className=' text-[20px] hover:text-[#00ff00] transition-all duration-300' href="#">About</a>
        <a className=' text-[20px] hover:text-[#00ff00] transition-all duration-300' href="#">Contact</a> 
      </div>

      <div className='flex gap-3'>
        <button className='border-[2px] border-white text-[20px] cursor-pointer rounded-[15px] hover:bg-[#E88C0E] duration-300 w-20'>Log In</button>
        <button className='border-[2px] border-white text-[20px] cursor-pointer rounded-[15px] hover:bg-[#E88C0E] duration-300 w-20'>Sign Up</button>
      </div>
    </nav>
  )
}

export default Navbar