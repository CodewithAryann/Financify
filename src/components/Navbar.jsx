import React from 'react'

function Navbar() {
  return (
    <div className='nav fixed z-[999] w-full pl-[3rem] pr-[3rem] py-[1.5rem] font-["Neue Montreal"] flex justify-between items-center text-blue-700' style={{ backdropFilter: 'blur(5px)' }}>
      <div>
        <img className='w-[8rem]' src="https://financify.ae/wp-content/uploads/2023/06/123456.png" alt="" />
      </div>
      <div className='links flex gap-10 cursor-pointer'>
        {["Home","About Us","Our Services","Contact Us","Mortgage Calculator"].map((items, index)=>(
            <a key={index} className={`text-lg capitalize font-[400] link-hover ${index=== 4 && "ml-32"}`}>{items}</a>
            ))}

      </div>
    </div>
  )
}

export default Navbar
