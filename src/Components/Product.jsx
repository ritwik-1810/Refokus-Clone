import React from 'react'
import Button from './Button'

const Product = ({val,discription,isTrue}) => {
  return (
    <div className='w-full p-20 '>
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
         
    </div>
  )
}

export default Product