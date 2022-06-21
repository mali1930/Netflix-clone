import React,{useState} from 'react'
import {HiOutlinePlus} from "react-icons/hi"

const FAQSection = ({title,body}) => {
  const[show,setShow]=useState(false)
  return (
  <>
  <div className='flex flex-col'>
  <div className='flex flex-row justify-between items-center m-2 cursor-pointer py-5 text-start px-7 bg-myGray '>
    <p className=' text-white'>{title}</p>
       <HiOutlinePlus onClick={()=>setShow(!show)}  className={`text-3xl ${show ? "rotate-45":"rotate-0"} duration-150 text-white`}/>
    
      </div>
      <div className='px-2'>
      <p className={`bg-myGray p-5  w-full text-white ${show===false? 'hidden' :''} duration-200`}>{body}</p>
      </div>
  </div>
  
  </>
  )
}

export default FAQSection
