import React from 'react'
import { Link } from 'react-router'
import Navbar from './Navbar'
import { FaSearch } from 'react-icons/fa'

const Header = () => {
  return (
    <div>
      <Link>
      Shoppr <span>.</span>   
      </Link>

    {/* Navbar */}
      <Navbar/>

      <div>
        <div>
          <div>
            <input type="text" placeholder='Type here...' className='bg-transparent w-full outline-none text-[15px]'/>
          </div>

          <div>
            <FaSearch/>
          </div>
        </div>

        <div>
          {/* Menu Toggle */}

        </div>
      </div>

      

    </div>
  )
}

export default Header