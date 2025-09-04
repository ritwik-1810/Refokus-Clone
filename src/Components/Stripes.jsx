import React from 'react'
import Stripe from './Stripe'
const Stripes = () => {
  const arr=[
    {url:"https://images.pexels.com/photos/41951/solar-system-emergence-spitzer-telescope-telescope-41951.jpeg",number:"6"},
     {
            url: "https://images.pexels.com/photos/4220967/pexels-photo-4220967.jpeg",
            number: "2",
        },
        {
            url: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg",
            number: "1",
        },
        {
            url: "https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg",
            number: "5",
        },
        {
            url: "https://images.pexels.com/photos/207529/pexels-photo-207529.jpeg",
            number: "2",
        },
        {
            url: "https://images.pexels.com/photos/816608/pexels-photo-816608.jpeg",
            number:"8",
        },
  ]
  return (
    <div className='flex'>
        {arr.map((elem, idx)=>(
            <Stripe val={elem}/>
        ))}
    </div>
  )
}

export default Stripes