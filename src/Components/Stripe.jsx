import React from 'react'

const Stripe = ({val}) => {
  return (
    <div className="w-[16.66%] px-5 py-4 flex justify-between items-center border-t-[1.4px] border-b-[1.4px] border-r-[1.4px] border-zinc-600 ">
            <img className="h-7 w-10 rounded-full" src={val.url} />
            <span className="font-semibold">{val.number}</span>
        </div>
  )
}

export default Stripe