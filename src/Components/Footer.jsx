import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-screen-xl mx-auto flex gap-5 mt-10'>
        <div className='w-1/2 text-9xl'>Be Curious.</div>
        <div className='w-1/2  flex gap-6'>
        <div className='w-[25%] flex flex-col '>
          <h2 className='mt-10 mb-10'>Socials</h2>
           
           <div className='w-full flex flex-col gap-2'>
            <h3>Linkedin</h3>
            <h3>X</h3>
            <h3>Instagram</h3>
           </div>
        </div>
        <div className='w-[25%] flex flex-col  '>

        <h2 className='mt-10 mb-10'>Links</h2>
           
           <div className='w-full flex flex-col gap-2'>
            <h3>Home</h3>
            <h3>Work</h3>
            <h3>Career</h3>
            <h3>Contacts</h3>
           </div>
            
        </div>
        <div className='w-[50%] mt-10 mb-10  flex flex-col items-end'>

        <p>Lorem10djc jdnvlkwnel kndvklnwlkvnnd </p>

        <p className=' mb-10'>lknalk klndsvkkdjvb kjnsdjvb sndvlk</p>

        <img src="https://mud1tx.vercel.app/_next/image?url=%2Fflowbite-react.png&w=256&q=75"></img>
        
        </div>
        </div>
    </div>
  )
}

export default Footer