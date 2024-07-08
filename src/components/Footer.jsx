import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer w-full h-screen flex gap-10 p-10 pl-20 pr-20'>
      <div className='w-[16vw]'>
        <img className='mb-10' src="https://financify.ae/wp-content/uploads/2023/06/123456.png" alt="" />
        <div className='flex  gap-2'>
        <i className='mt-1'><FaLocationDot /></i>
        <p>Office # 402C, Aspin<br />Commercial Tower, Sheikh <br />Zayed Road, Dubai</p>
        </div>
        <div className='flex items-center'><i><IoIosMail /></i><a href="">info@financify.ae</a></div>
        <div><FaPhoneAlt /></div>
        

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
