import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Secondpage from './components/Secondpage'
import About from './components/About'
import Eyes from './components/Eyes'

function App() {
  return (
    <div className='   text-black'>
      <Navbar />
      <Landingpage/>
      <Secondpage/>
      <About/>
      <Eyes/>
    </div>
    
  )
}

export default App
