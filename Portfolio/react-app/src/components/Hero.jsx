import React from 'react'

const Hero = () => {
  return (
    <div className=''>
    <section className='hero-section h-[100vh] w-auto'>
      <div className='hero-text'>
        <p className='intro'>Hello There!</p>
        <p className='main-heading'>I'M Param Shah</p>
        <p className='highlight'>Full Stack Development</p>
        <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error asperiores quod et reprehenderit ipsa iusto! Sed, distinctio laudantium blanditiis ipsa corporis officia voluptatem suscipit consectetur. Inventore possimus corrupti neque.</p>

        <div className='button'>
          <button className='btn'>Hire Me</button>
          <button className='portfolio-b btn'>See Portfolio</button>
        </div>
      </div>

      <div className='hero-image'>
        <div className='hero-wrapper'>
          <img src="./Images/mainimg.png" alt="" />
        </div>

      </div>
    </section>

    </div>
  )
}

export default Hero