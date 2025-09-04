import React from 'react'
import Navbar from './Components/Navbar'
import Work from './Components/Work'
import Stripes from './Components/Stripes'


const App = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 text-white "  >
      <Navbar></Navbar>
      <Work></Work>
      <Stripes></Stripes>
    </div>
  )
}

export default App