import React from 'react'
import { FaFacebook } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa6"
import { FaXTwitter } from "react-icons/fa6"



const Footer = () => {
  return (
    <footer className=' border-2  bg-[#484872] text-white'>

      <div className='flex gap-10 align-middle p-1 mt-6'>
        <p className='align-middle text-center text-white'>Follow Us :</p>  

          <a href="#" className=" text-shadow-white hover:text-blue-700 transition duration-300">
            <span className="sr-only">Facebook</span>
            <span><FaFacebook/></span>       
          </a>

          <a href="#" className=" text-shadow-white hover:text-purple-500 transition duration-300">
            <span className="sr-only">Instagram</span>
            <span><FaInstagram/></span>
          </a>

          <a href="#" className= "text-shadow-white hover:text-black transition duration-300">
            <span className="sr-only">Twitter</span>
            <span><FaXTwitter/></span>        
          </a>
      </div>
     
      <div className="mt-6 p-6  border-t-3 border-black text-center text-white">
        <p>&copy; 2023 Tours&Travels. All rights reserved.</p>
      </div>
    </footer>
  )
 }

export default Footer