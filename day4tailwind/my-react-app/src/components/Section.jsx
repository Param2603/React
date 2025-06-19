import React from 'react'

const Section = () => {
  return (
    <section className='flex justify-between  p-15'>
      <div className=''>
         <p className='text-[#8364E2] p-1 font-bold font-sans text-[20px]' >CRYPTO PLATFORM</p>
        <p className='p-1 text-[#0D0C22]  text-[59px] font-sans font-bold'>Crypto Trade <br/>Agency</p>
        <p className='p-1 text-[#727272] text-[20px] font-sans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br/> eiusmod tempor incididunt labore dolore magna aliqua.</p> <br />
        <button className='bg-[#8364e2] text-[#ffffff]  cursor-pointer rounded-[2rem] w-[150px]' >Get Started</button>
      </div>

      <div className='flex'>
         <img className='h-[400px] w-[550px]  rounded-[2rem]' src="https://mobirise.com/extensions/cryptom5/trade-agency/assets/images/features4.jpg" alt="" />
      </div>
    </section> 
  )
}

export default Section