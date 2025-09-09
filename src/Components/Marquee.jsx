import React from 'react'

const Marquee = ({imageurls}) => {

  return (
    <>
        <div className='w-full bg-gray-400 flex gap-20 py-5 overflow-hidden'>
     {imageurls.map(url => <img src={url} className='flex-shrink-0 w-[120px] h-[100px]'></img>)}
     {imageurls.map(url => <img src={url} className='flex-shrink-0 w-[120px] h-[100px]'></img>)}
    </div>
    <div className='w-full h-3 bg-black'></div>
    </>
    
  )
  
}

export default Marquee
