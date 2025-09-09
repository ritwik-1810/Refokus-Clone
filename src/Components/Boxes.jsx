import React from 'react'
import Box from './Box'

const Boxes = () => {
  return (
    <div className='max-w-screen-xl mx-auto flex items-center justify-center gap-2 py-10'>
        <Box wid={"w-[300px]"} btn={false} para={false} para1={true}></Box>
        <Box wid={"w-[700px]"} btn={true} para={true}></Box>
    </div>
  )
}

export default Boxes