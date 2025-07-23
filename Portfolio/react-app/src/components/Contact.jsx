import React from 'react'
import { FaLinkedin, FaSquareFacebook, FaSquareInstagram, FaSquareTwitter } from 'react-icons/fa6'

const Contact = () => {
  return (
    <>
    <div className='contact-container'>
        <div className='contact-wrapper'>
            <div className='contact-info'>
                <img src="./Images/mainimg.png" alt="" />
                <h1 className='name'>Param Shah</h1>
                <h2 className='title'>Full Stack Development</h2>


                <div className='social-icons'>
                    <FaLinkedin/>
                    <FaSquareFacebook/>
                    <FaSquareTwitter/>
                    <FaSquareInstagram/>
                </div>

                <p className='label'>My Personal Contact</p>
                <p className='contact'>977-343-0102</p>

                <p></p>
                <p></p>
            </div>

            <div className='contact-form-box'>
                <h2 className='form-handling'>Contact Me</h2>

                <form className='contact-form'>
                    <div className='form-group'>
                        <label htmlFor="">Enter Your Name</label>
                        <input type="text" className='form-input' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Enter Your Email </label>
                        <input type="email
                        " className='form-input' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Write Your Message Here</label>
                        <textarea rows="3" className='form-input' name="" id=""></textarea>
                        
                    </div>
                    <button className='portfolio-b btn'>Send Message</button>
                </form>

                <div className='form-bg'></div>
            </div>


        </div>
        


    <footer className='footer'>
        <div className='footer-top'>
            <div className='logo'>
                <img src="" alt="" />
                <span>Portfolio</span>
            </div>

            <div className='footer-links'>
                <a href="">Home</a>
                <a href="">Portfolio</a>
                <a href="">Testimonials</a>
                <a href="">About Me</a>
                <a href="">Contact</a>
            </div>
        </div>

        <div className='footer-bottom'>
            &copy; 2025 <span>My Portfolio</span> by. All Rights Reserved
        </div>
    </footer>
    
    </div>

    </>
  )
}

export default Contact