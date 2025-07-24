import React from 'react'

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Counter Application (React)",
      img: "./Images/project-1.png",
      url: "https://react-llsg.vercel.app/"
    },
    {
      title: "Registration Form (React)",
      img: "./Images/project-2.png",
      url: "https://react-proj3.vercel.app/"
    },
    {
      title: "Add To Cart (React)",
      img: "./Images/project-3.png",
      url: "https://react-proj-4-dqlf-dpx14my3y-params-projects-27db3b3d.vercel.app/"
    }
  ]

  return (
    <div className='portfolio-section '>
      <div className='portfolio-header '>
        <div>
          <h2 className='section-title'>My Portfolio</h2>
          <p className='section-subtitle'>Recent Projects</p>
        </div>
        <button className='btn'>View All</button>
      </div>

      <div className='portfolio-grid'>
        {portfolioItems.map((item, i) => (
          <div className='portfolio-card ' key={i}>
            <img
              src={item.img}
              alt={item.title}
              className='w-full h-48 object-cover'
            />
            <div className='card-content'>
              <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className='btn'
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
