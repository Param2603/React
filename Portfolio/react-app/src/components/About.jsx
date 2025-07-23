import React from 'react'
import CountUp from 'react-countup';
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <>
    <section className='about-section'>
        <div className='about-text'>
            <h2>About <span>Me</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, facere nihil dolorum corporis iure cupiditate. Perferendis at voluptates enim pariatur, iste sunt dolores fugit eos fugiat, debitis ab autem neque.</p>
            <button className='btn'><FaDownload /> Download CV</button>
        </div>

        <div className='about-stats'>
            <div className='stat-box'>
                <h3><CountUp end={3} duration={2.5}/></h3>
                <p>Years Of Experience</p>
            </div>
            <div className='stat-box'>
                <h3><CountUp end={25} duration={2.5}/></h3>
                <p>Projects Completed</p>
            </div>
            <div className='stat-box'>
                <h3><CountUp end={500} duration={2.5}/></h3>
                <p>Happy Client</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default About