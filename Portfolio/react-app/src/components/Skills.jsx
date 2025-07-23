import React from 'react'
import { FaAward } from 'react-icons/fa'
import { FaImage, FaYoutube } from 'react-icons/fa6'

const Skills = () => {
  return (
    <>
    <section className='expertise-section'>
        <h2 className='section-title'>My Expertise</h2>
        <p className='sub-heading'>About My Expertise</p>

        <div className='expertise-cards'>
            {
                [
                    {title:"Figma", icon: <img src='./Images/img-1.png'/>},
                    {title:"React", icon: <img src='./src/assets/react.svg'/>},
                    {title:"Photoshop", icon: <img src='./Images/img-3.png'/>},
                    {title:"Angular", icon: <img src='./Images/img-4.png'/>},
                ].map((item,index) => (
                    <div key={index} className='card'>
                        <div className='icon-placeholder'>{item.icon}</div>
                        <h3 className='card-heading'>{item.title}</h3>
                        <p className='cardsubHeading'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, minus expedita voluptatum, atque provident aperiam natus.</p>
                    </div>
                ))
            }
        </div>

        <div className='middle-section'>
            <div className='profile-box'>
                <img src="./Images/mainimg.png" alt="" />
            </div>

            <div className='achievements'>
                <div className='achivementsIcon'><FaAward/></div>
                <p className='award-title'>Special Mention</p>
                <p className='award-desc'>AWARD</p>
            </div>
            <div className='achievements'>
                <div className='achivementsIcon'><FaYoutube/></div>
                <p className='award-title'>Special Mention</p>
                <p className='award-desc'>AWARD</p>
            </div>
            <div className='achievements'>
                <div className='achivementsIcon'><FaImage/></div>
                <p className='award-title'>Special Mention</p>
                <p className='award-desc'>AWARD</p>
            </div>
        </div>

    </section>
    </>
  )
}

export default Skills