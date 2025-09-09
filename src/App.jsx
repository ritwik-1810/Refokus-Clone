import React from 'react'
import Navbar from './Components/Navbar'
import Work from './Components/Work'
import Stripes from './Components/Stripes'
import Products from './Components/Products'
import Marquees from './Components/Marquees'
import Boxes from './Components/Boxes'


const App = () => {
  return (
    <div className="w-full bg-zinc-900 text-white">
      <Navbar></Navbar>
      <Work></Work>
      <Stripes></Stripes>
      <Products></Products>
      <Marquees></Marquees>
      <Boxes></Boxes>
    </div>
  )
}

export default App