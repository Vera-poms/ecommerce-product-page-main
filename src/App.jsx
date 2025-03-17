import { useState } from 'react'
import Attribution from './components/Attribution/Attribution.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import ImageDisplay from './components/ImageDisplay/ImageDisplay.jsx'
import Description from './components/Description/Description.jsx'

function App() {


  return (


    <div className='h-screen'>

      <Navbar/>
      <ImageDisplay/>
      <Description/>
      <Attribution/>
    </div>
  )
}

export default App
