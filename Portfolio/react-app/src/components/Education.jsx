import React from 'react'
import { FaGraduationCap, FaNetworkWired } from 'react-icons/fa'

const Education = () => {
    const education = [
        {
            title:'Ait',
            subtitle:'BE in CE',
            date:'2023-2027'
        },
        {
            title:'Ait',
            subtitle:'BE in CE',
            date:'2023-2027'
        },
        {
            title:'Ait',
            subtitle:'BE in CE',
            date:'2023-2027'
        },
    ];

    const work = [
        {
            title:'Ait',
            subtitle:'BE in CE',
            date:'2023-2027'
        },
        {
            title:'Ait',
            subtitle:'BE in CE',
            date:'2023-2027'
        },
        {
            title:'Ait',
            subtitle:'BE in CE',
            date:'2023-2027'
        },
    ]
     
    const rederCard = (item,index) => (
       <div className='EducationCard' key={index}>
        <div>
            <h4>{item.title}</h4>
            <p>{item.subtitle}</p>
        </div>
        <span className='date-label'>{item.date}</span>
       </div>
    ) 

  return (
    <>
    <section className='edu-work'>
        <h2 className='section-title'>My Education & Work Experience</h2>
        <p className='sub-heading'>Education & Work</p>

        <div className='edu-work-container'>
            <div className='box'>
                <div className='box-header'>
                    <span className='icon'> <FaGraduationCap/>
                    </span>
                     <h3> Education</h3>
                     
                </div>
                {education.map((item,index) => rederCard(item,index))}
            </div>

            <div className='box'>
                <div className='box-header'>
                    <span className='icon'>
                        <FaNetworkWired/>
                    </span>
                    <h3>Work Experience</h3>
                </div>
                {work.map((item,index) => rederCard(item,index))}
            </div>
        </div>
    </section>
    </>
  )
}

export default Education