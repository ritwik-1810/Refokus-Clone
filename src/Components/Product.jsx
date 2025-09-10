import React from 'react'
import Button from './Button'
import { useState } from 'react';

const Product = ({val,discription,isTrue}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className='w-full p-20 relative'
    onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
    
    <div className='max-w-screen-xl mx-auto flex items-center justify-between'>
        <h1 className='capitalize text-4xl font-semibold'>{val}</h1>
        <div className='w-1/3 dets'>
        <p className='mb-10'>{discription}</p>
        <div className='w-full flex gap-5'>
            <Button val={"Get Started"}></Button>
            {isTrue==true && <Button val={"Case Study"}></Button>}
        </div>
         
        </div>
    </div>

     {hovered && (
        <img
          src="https://images.pexels.com/photos/17485013/pexels-photo-17485013.png"
          className="absolute inset-0 left-[20%] w-[40%] h-full object-cover"
          alt="preview"
        />
      )}
         
    </div>
  )
}

export default Product