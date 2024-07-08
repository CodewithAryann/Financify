import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";


function Footer() {
  return (
    <div className='footer w-full h-screen flex gap-10 p-10 pl-20 pr-20 font-["Montserrat"] '>
      <div className='w-[16vw]'>
        <img className='mb-10' src="https://financify.ae/wp-content/uploads/2023/06/123456.png" alt="" />
        <div className='flex  gap-2 mb-5'>
        <i className='mt-1'><FaLocationDot /></i>
        <p>Office # 402C, Aspin<br />Commercial Tower, Sheikh <br />Zayed Road, Dubai</p>
        </div>
        <div className='flex items-center gap-2 mb-5'><i><IoIosMail /></i><a href="">info@financify.ae</a></div>
        <div className='flex gap-2'><i className='mt-2'><FaPhoneAlt /></i><a href="">+971585899398</a></div>
        <a className='ml-6' href="">+971585655007</a>
        

      </div>
      <div className='flex gap-[4rem]'>
        <div className='text-[13px]'>
            <h1 className='mb-7'>Quick Links</h1>
            <div className='flex items-center mb-3'>
                <i><MdKeyboardDoubleArrowRight /></i>
                <a href="">Home</a>
            </div>
            <div className='flex items-center mb-3'>
                <i><MdKeyboardDoubleArrowRight /></i>
                <a href="">About US</a>
            </div>
            <div className='flex items-center mb-3'>
                <i><MdKeyboardDoubleArrowRight /></i>
                <a href="">Services</a>
            </div>
            <div className='flex items-center mb-3'>
                <i><MdKeyboardDoubleArrowRight /></i>
                <a href="">FAQs</a>
            </div>
            <div className='flex items-center mb-3'>
                <i><MdKeyboardDoubleArrowRight /></i>
                <a href="">Career</a>
            </div>
            <div className='flex items-center mb-3'>
                <i><MdKeyboardDoubleArrowRight /></i>
                <a href="">Contact Us</a>
            </div>
            <div className='flex items-center mb-3'>
                <i><MdKeyboardDoubleArrowRight /></i>
                <a href="">Mortgage Calculator</a>
            </div>
            </div>
        <div className='text-[13px]'>
            <h1 className='mb-7'>Our Services</h1>
            <div>
            <div className='flex items-center mb-3'>
                <i><MdKeyboardDoubleArrowRight /></i>
                <a href="">New Purchase</a>
            </div>
            <div className='flex items-center mb-3'>
                <i><MdKeyboardDoubleArrowRight /></i>
                <a href="">Remortgage & Equity Release</a>
            </div>
            <div className='flex items-center mb-3'>
                <i><MdKeyboardDoubleArrowRight /></i>
                <a href="">Mortgage For Handover Properties</a>
            </div>
            <div className='flex items-cente mb-3'>
                <i><MdKeyboardDoubleArrowRight /></i>
                <a href="">Overseas Mortgage</a>
            </div>
            <div className='flex items-center mb-3'>
                <i><MdKeyboardDoubleArrowRight /></i>
                <a href="">Buy To Let Mortgage</a>
            </div>
            <div className='flex items-center mb-3'>
                <i><MdKeyboardDoubleArrowRight /></i>
                <a href="">Building Finance</a>
            </div>
            <div className='flex items-center mb-3'>
                <i><MdKeyboardDoubleArrowRight /></i>
                <a href="">House Construction Finance</a>
            </div>
            <div className='flex items-center mb-3'>
                <i><MdKeyboardDoubleArrowRight /></i>
                <a href="">Shariah-Compliant / Islamic Home Loans</a>
            </div>
            </div>
            </div>
        <div className='text-[13px] '>
            <h1 className='mb-7'>Privacy</h1>
            <div>
            <div className='flex items-center mb-3'>
                <i><MdKeyboardDoubleArrowRight /></i>
                <a href="">Terms & Conditions</a>
            </div>
            <div className='flex items-center mb-3'>
                <i><MdKeyboardDoubleArrowRight /></i>
                <a href="">Privacy Policy</a>
            </div>
            </div>
            </div>
        <div><h1>Social Icons</h1></div>
        
      </div>
    </div>
  )
}

export default Footer
