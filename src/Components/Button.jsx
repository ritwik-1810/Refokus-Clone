import React from 'react'
import { BsBoxArrowInRight } from "react-icons/bs";
import { FaArrowTrendDown } from "react-icons/fa6";
const Button = () => {
  return (
    <div className='w-40 h-10 bg-white rounded-[20px] flex items-center gap-10'>

      <div className='text-black pl-2'>Get Started</div>

      <FaArrowTrendDown className="text-black "/>

    </div>
  )
}

export default Button