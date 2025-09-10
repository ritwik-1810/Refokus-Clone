import React from 'react'
import Marque from './Marque'
import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/js.png"
import react from "../assets/react.png"
import github from "../assets/github.png"

const Marquees = () => {

  const arr=[html,css,js,react,github,html,css,js]

  return (
    <div className='w-full mb-2 flex flex-col gap-4'>

      <Marque  imageurls={arr} isleft={true}></Marque>
      <Marque  imageurls={arr} isleft={false}></Marque>

    </div>
  )
}

export default Marquees