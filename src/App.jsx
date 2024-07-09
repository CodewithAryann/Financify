// App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Secondpage from './components/Secondpage';
import About from './components/About';
import Eyes from './components/Eyes';
import WhyChoose from './components/Why-choose';
import Assistance from './components/Assistance';
import Calculator from './components/Calculator';
import Contactus from './components/Contact-us';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector('#your-container-id'),
    });
    
    return () => {
      locomotiveScroll.destroy();
    };
  }, []);
  
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='text-black'>
      <Navbar showNavbar={showNavbar} />
      <Landingpage />
      <Secondpage />
      <About />
      <Eyes />
      <WhyChoose />
      <Assistance />
      <Calculator />
      <Contactus />
      <Footer />
    </div>
  );
}

export default App;
