import React, { useState } from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Left Logo Section */}
        <div className="flex items-center gap-3">
          <img src="./src/assets/react.svg" alt="logo" className="w-8 h-8" />
          <p className="text-xl font-semibold cursor-pointer">Portfolio</p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link to={"/"}><li className='text-[#697af7] cursor-pointer'>Home</li></Link>
          <li className="text-[#fff] hover:text-[#697af7] cursor-pointer">Portfolio</li>
          <li className="text-[#fff] hover:text-[#697af7] cursor-pointer">Testimonials</li>
          <li className="text-[#fff] hover:text-[#697af7]  cursor-pointer">About</li>
        </ul>

        {/* Right Section: Contact Button & Hamburger */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-[#697af7] text-white px-4 py-2 rounded hover:bg-[#fff] hover:text-[#697af7] transition-all duration-500 ease-in-out cursor-pointer">
            Contact Me
          </button>

          {/* Hamburger for Mobile */}
          <button
            className="md:hidden flex flex-col justify-between w-6 h-5 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="block h-0.5 w-full bg-black"></span>
            <span className="block h-0.5 w-full bg-black"></span>
            <span className="block h-0.5 w-full bg-black"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pt-4 pb-6">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">Portfolio</li>
            <li className="hover:text-blue-500 cursor-pointer">Testimonials</li>
            <li className="hover:text-blue-500 cursor-pointer">About</li>
            <li>
              <button className="bg-blue-600 text-white w-full mt-2 py-2 rounded hover:bg-blue-700 transition">
                Contact Me
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar