import React, { useState } from 'react'
import logo from "../assets/logo (3).png"
import Button from './Button'
import MusicPlayer from './MusicPlayer'
const Navbar = () => {
  const [isActive,setisActive]=useState(null)

  const arr=["Home","Work","Culture","","News"]

  return (
    <div className='max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[2px] '>
         
         <div className='flex items-center'><div className='flex gap-1  '>
            <img className='w-9 h-7' src={logo} alt=''></img>
            <span className='w-9 h-7 text-white '>Refokus</span>
         </div>

         <div className='links ml-32 flex gap-20'>

          {arr.map((e,idx) => (
            e.length==0 ? <span>|</span> :
            <a onMouseEnter={()=>setisActive(idx)} onMouseLeave={()=>setisActive(null)} className='text-gray-400 flex gap-1 items-center justify-center' href='#' >
               {e.length!=0 && idx==isActive  ? <span style={{'box-shadow':' 0 0 10px #00ff99, 0 0 20px #00ff99, 0 0 30px #00ff99'}} className='w-1 h-1 rounded-full bg-green-300'></span>: <span className="w-1 h-1"></span>}
              {e}
            </a>
          ))}

          <MusicPlayer></MusicPlayer>
         </div>
       </div>
       <Button val={"Get Started"}></Button>
    </div>
  )
}

export default Navbar