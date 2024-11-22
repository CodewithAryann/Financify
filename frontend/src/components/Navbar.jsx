import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { gsap } from 'gsap';

function Navbar({ showNavbar, navbarColor }) {
  const navRef = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      if (showNavbar) {
        console.log('Animating navbar to show');
        gsap.to(navRef.current, {
          y: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
      } else {
        console.log('Animating navbar to hide');
        gsap.to(navRef.current, {
          y: '-100%',
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    }
  }, [showNavbar]);

  return (
    <div
      ref={navRef}
      className={`nav fixed z-[999] w-full pl-[3rem] pr-[3rem] py-[1.5rem] font-["Neue Montreal"] flex justify-between items-center transition-colors duration-300 ${navbarColor}`}
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
            duration={700}
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
