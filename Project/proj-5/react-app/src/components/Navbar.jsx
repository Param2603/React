import React from 'react'
import { FaSearch } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav>
        <div>
            <h1>Logo</h1>
        </div>
        <div>
            <ul>
                <li>HOME</li>
                <li>COLLECTION</li>
                <li>TESTIMONIAL</li>
                <li>CONTACT</li>
            </ul>
        </div>


        <span><FaSearch /></span>

        <button>Get Started</button>
    </nav>
  )
}

export default Navbar