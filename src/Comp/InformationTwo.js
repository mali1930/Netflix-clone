import React from 'react'
import GrayBorder from './GrayBorder'

const InformationTwo = () => {
  return (
    <>
     <div className='bg-black space-y-2 px-14 py-20 md:flex md:flex-row justify-center  '>
     <img className=' flex[0.4]'
             src={require("../img/phone.jpg")} />

    <div className='md:flex flex-[0.6] md:flex-col  space-y-4 md:py-40'>
        <h1 className='text-white text-5xl font-bold text-center'>Enjoy on your TV.</h1>
        <p className='text-white text-center text-xl'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
        </div>
  
          
    </div>  
    <GrayBorder/> 
  </>
  )
}

export default InformationTwo







