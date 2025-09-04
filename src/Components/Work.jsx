import React from 'react'

const Work = () => {

  let arr=[{

    url:"https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    top:"50%",
    left:"50%",
    isActive:"false",

  },{
     url:"https://images.unsplash.com/photo-1532795077981-fc1c26555bd4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    top:"55%",
    left:"45%",
    isActive:"false",
  },
{
     url:"https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBsYW5ldHN8ZW58MHx8MHx8fDA%3D",
    top:"45%",
    left:"55%",
    isActive:"false",
}]

  return (
    <div className='w-full relative'>
        <div className='max-w-screen-xl mx-auto py-6 flex items-center  justify-center text-[320px]'>
            WORK
               <div className="absolute top-0 left-0 w-full h-full">
          {arr.map((elem, idx) => (
            <img
              key={idx}
              src={elem.url}
              alt={`work-${idx}`}
              className="w-[100px] h-[100px] object-cover rounded-full absolute"
              style={{ top: elem.top, left: elem.left }}
            />
          ))}
        </div>
        </div>

       

    </div>
  )
}

export default Work