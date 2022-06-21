import React from 'react'
import GrayBorder from './GrayBorder'

const Information = () => {
  return (
  <>
    <div className='bg-black space-y-2 px-18 py-20 md:flex md:flex-row justify-center  '>
    <div className='md:flex flex-[0.6] md:flex-col  space-y-4 md:py-40'>
        <h1 className='text-white text-3xl  font-bold text-center'>Watch everywhere.</h1>
        <p className='text-white text-center px-5 text-xl'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
        </div>
  
            <img style={{width:"300px"}}  className=' flex[0.4] px-8'
             src={require("../img/device.png")} />

    </div>  
    <GrayBorder/>
  </>
  )
}

export default Information
