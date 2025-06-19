import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between cursor-pointer h-[70px]  items-center px-15 '>
        <p className='text-[#232323] text-[2rem]  font-sans  font-bold'>CryptoM5</p>
        <ul className='flex gap-10'>
            <li className='text-[#232323] text-[1rem] font-sans  font-medium'>Home</li>
            <li className='text-[#232323] text-[1rem] font-sans  font-medium'>About</li>
            <li className='text-[#232323] text-[1rem] font-sans  font-medium'>Features</li>
            <li className='text-[#232323] text-[1rem]  font-sans font-medium'>Contacts</li>
            <button className='bg-[#8364e2] text-[#ffffff]  cursor-pointer rounded-[2rem] w-auto' >Get Started</button>
        </ul>
       
    </nav>
  )
}

export default Navbar

