import React from 'react'

function Navbar() {
  return (
    <div className='w-full h-screen px-20 py-8'>
      <div>
        <img src="https://financify.ae/wp-content/uploads/2023/06/123456.png" alt="" />
      </div>
      <div className='links '>
        {["Home","About Us","Our Services","Career","Contact Us"]}

      </div>
    </div>
  )
}

export default Navbar
