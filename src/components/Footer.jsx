import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
  return (
    <div className='footer w-full h-screen flex gap-10 p-10 pl-20 pr-20'>
      <div className='w-[16vw]'>
        <img src="https://financify.ae/wp-content/uploads/2023/06/123456.png" alt="" />
        <i><FaLocationDot /></i>

      </div>
      <div className='flex gap-20'>
        <div><h1>Quick Links</h1></div>
        <div><h1>Our Services</h1></div>
        <div><h1>Privacy</h1></div>
        <div><h1>Social Icons</h1></div>
        
      </div>
    </div>
  )
}

export default Footer
