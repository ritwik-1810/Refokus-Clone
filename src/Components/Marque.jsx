import React from 'react'
import Marquee from "react-fast-marquee";

const Marque = ({imageurls,isleft}) => {

  return (
    <Marquee speed={50} pauseOnHover  direction={isleft ? 'left' : 'right'} >
        <div className='w-full flex flex-shrink-0 gap-20 py-5 px-10 overflow-hidden  bg-gray-800'>
     {imageurls.map(url => <img src={url} className='flex-shrink-0 w-[120px] h-[100px]'></img>)}
    </div>
    <div className='w-full h-3 bg-black'></div>
    </Marquee>
    
  )
  
}

export default Marque

