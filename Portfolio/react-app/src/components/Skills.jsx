import React from 'react'

const Skills = () => {
  return (
    <>
    <section className='experience-section'>
        <h2 className='section-title'>My Expertise</h2>
        <p>About My Expertise</p>

        <div className='expertise-cards'>
            {
                [
                    {title:"Figma", icon: <img></img>},
                    {title:"Figma", icon: <img></img>},
                    {title:"Figma", icon: <img></img>},
                    {title:"Figma", icon: <img></img>},
                ].map((item,index) => {
                    <div key={index} className='card'>
                        <div className='icon'>{item.icon}</div>
                        <h3 className='card-heading'>{item.title}</h3>
                    </div>
                })
            }
        </div>
    </section>
    </>
  )
}

export default Skills