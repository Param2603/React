import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between cursor-pointer h-[70px]  items-center px-15 '>
        <p className=''>CryptoM5</p>
        <ul className='flex gap-5'>
            <li>Home</li>
            <li>About</li>
            <li>Features</li>
            <li>Contacts</li>
             <button className='bg-purple-400 cursor-pointer rounded-2xl'>Get Started</button>
        </ul>
       
    </nav>
  )
}

export default Navbar

