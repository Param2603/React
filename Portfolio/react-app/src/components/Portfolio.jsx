// import React from 'react'

// const Portfolio = () => {
//   const portfolioItems = [
//     {
//       title: "Counter Application",
//       img: "https://vercel.com/params-projects-27db3b3d/react-llsg"
//     },
//     {
//       title: "Real Estate",
//       img: ""
//     },
//     {
//       title: "Real Estate",
//       img: ""
//     }
//   ]
//   return (
//     <>
//     <div className='portfolio-section'>
//         <div className='portfolio-header'>
//             <div>
//                 <h2 className='section-title'>My Portfolio</h2>
//                 <p className='section-subtitle'>Recent Projects</p>
//             </div>
//             <button className='btn'>View All</button>
//         </div>

//         <div className='portfolio-grid'>
//             {portfolioItems.map((item,i) => (<div className='portfolio-card' key={i}>
//               <img src={item.img}/>
//               <div className='card-content'>
//                 <h3>{item.title}</h3>
//                 <button className='btn'>View In Behance</button>

//               </div>
                
//             </div>))}
//         </div>
//     </div>
//     </>
//   )
// }

// export default Portfolio


import React from 'react'

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Counter Application",
      img: "",
      url: "https://vercel.com/params-projects-27db3b3d/react-llsg"
    },
    {
      title: "Registration Form",
      img: "",
      url: "https://vercel.com/params-projects-27db3b3d/react-proj3"
    },
    {
      title: "Add To Cart",
      img: "",
      url: ""
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
