import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Secondpage from './components/Secondpage'
import About from './components/About'
import Eyes from './components/Eyes'
import WhyChoose from './components/Why-choose'
import Assistance from './components/Assistance'
import Calculator from './components/Calculator'
import Contactus from './components/Contact-us'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
function App() {
const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='text-black'>
      <Navbar />
      <Landingpage/>
      <Secondpage/>
      <About/>
      <Eyes/>
      <WhyChoose/>
      <Assistance/>
      <Calculator/>
      <Contactus/>
      <Footer/>
    </div>
    
  )
}

export default App
