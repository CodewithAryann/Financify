import React from 'react'

function Eyes() {
  return (
    <div className='eyes w-full h-screen overflow-hidden'>
      <div className='relative w-full h-full bg-cover bg-center bg-[url("src/assets/play.png")]'></div>
      <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-1/2 h-96 bg-red-500  '></div>
    </div>
  )
}

export default Eyes
