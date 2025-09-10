import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import Button from "./Button.jsx"
const Box = ({wid,btn,para,para1}) => {
  return (
    <div className={`${wid} bg-gray-800 p-4 rounded-[10px] h-[400px] flex flex-col justify-between  hover:bg-blue-900`}>
    <div>
        <div className="w-full flex items-center justify-between">
        <p>Get in Touch</p>
        <IoIosArrowRoundForward></IoIosArrowRoundForward>
     </div>
     <h1 className='text-3xl pt-4'>Who Are We</h1>
    </div>

    <div>
    {
        para1 && <p className='text-gray-300'>Explore what drive our team</p>
    }
    {
       para && <h1 className='text-6xl mb-3'>
            Start A Project
        </h1>
    }
      {   btn && <Button val={"Get Started"}></Button>
       
    }
    </div>
        
    </div>
  )
}

export default Box