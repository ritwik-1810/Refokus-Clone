import React from 'react'
import Marquee from './Marquee'
import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/js.png"
import react from "../assets/react.png"
import github from "../assets/github.png"

const Marquees = () => {

  const arr=[html,css,js,react,github]

  return (
    <div className='w-full mb-2'>

      <Marquee imageurls={arr}></Marquee>

    </div>
  )
}

export default Marquees