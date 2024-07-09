
import React, { useState, useEffect } from 'react';

function Navbar({ navbarColor }) {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowNavbar(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div
      className={`nav fixed z-[999] w-full pl-[3rem] pr-[3rem] py-[1.5rem] font-["Neue Montreal"] flex justify-between items-center transition-transform duration-300 ${showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'} ${navbarColor}`}
      style={{ backdropFilter: 'blur(1px)' }}
    >
      <div>
        <img className='w-[8rem]' src="https://financify.ae/wp-content/uploads/2023/06/123456.png" alt="" />
      </div>
      <div className='links flex gap-10 cursor-pointer'>
        {["Home", "About Us", "Our Services", "Contact Us", "Mortgage Calculator"].map((items, index) => (
          <a key={index} className={`text-lg capitalize font-[400] link-hover ${index === 4 && "ml-32"}`}>{items}</a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
