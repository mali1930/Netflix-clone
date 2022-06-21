import React from 'react'
import GrayBorder from './GrayBorder'

const Information = () => {
  return (
  <>
    <div className='bg-black space-y-2 px-22 py-20 md:flex md:flex-row justify-center  '>
    <div className='md:flex flex-[0.6] md:flex-col  space-y-4 md:py-40'>
        <h1 className='text-white text-5xl font-bold text-center px-5'>Enjoy on your TV.</h1>
        <p className='text-white text-center px-5 text-xl'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
        </div>
  
            <img style={{width:"320px", margin:"0 auto"}} className=' flex[0.4] px-5'
             src={require("../img/img.jpg")} />

    </div>  
    <GrayBorder/>
  </>
  )
}

export default Information
