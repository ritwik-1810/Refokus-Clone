import React from 'react'
import logo from "../assets/logo (3).png"
import Button from './Button'
const Navbar = () => {
  return (
    <div className='max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[2px] '>
         
         <div className='flex items-center'><div className='flex gap-1  '>
            <img className='w-9 h-7' src={logo} alt=''></img>
            <span className='w-9 h-7 text-white '>Refokus</span>
         </div>

         <div className='links ml-32 flex gap-20'>

          {["Home","Work","Culture","|","News"].map((e,idx) => (

            <a className='text-gray-400 flex gap-1 items-center justify-center' href='#' >
               {e.length!=0 && idx==1  && <span className='w-1 h-1 rounded-full bg-green-300'></span>}
              {e}
            </a>
          ))}
         </div>
       </div>
       <Button></Button>
    </div>
  )
}

export default Navbar