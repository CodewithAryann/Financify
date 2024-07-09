import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

function Navbar({ showNavbar, navbarColor }) {
  return (
    <div
      className={`nav fixed z-[999] w-full pl-[3rem] pr-[3rem] py-[1.5rem] font-["Neue Montreal"] flex justify-between items-center transition-transform duration-300 ${showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'} ${navbarColor}`}
      style={{ backdropFilter: 'blur(5px)' }}
    >
      <div>
        <img className='w-[8rem]' src="https://financify.ae/wp-content/uploads/2023/06/123456.png" alt="Logo" />
      </div>
      <div className='links flex gap-10 cursor-pointer'>
        {["home", "about", "services", "contact", "calculator"].map((item, index) => (
          <Link
            key={index}
            to={item}
            smooth={true}
            duration={500}
            className={`text-lg capitalize font-[400] link-hover ${index === 4 && "ml-32"}`}
          >
            {item.replace(/^\w/, (c) => c.toUpperCase()).replace(/_/g, ' ')}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
