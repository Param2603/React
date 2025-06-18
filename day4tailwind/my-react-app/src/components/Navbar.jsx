import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between cursor-pointer h-[70px]  items-center px-15 '>
        <p className='text-[#232323] text-[2rem] font-bold font-sans'>CryptoM5</p>
        <ul className='flex gap-5'>
            <li className='text-[#232323] text-[1rem] font-sans '>Home</li>
            <li className='text-[#232323] text-[1rem] font-sans '>About</li>
            <li className='text-[#232323] text-[1rem] font-sans '>Features</li>
            <li className='text-[#232323] text-[1rem]  font-sans'>Contacts</li>
             <button className='bg-[#8364e2] text-[#ffffff] cursor-pointer text-[1rem] rounded-[2rem] font-sans' >Get Started</button>
        </ul>
       
    </nav>
  )
}

export default Navbar

