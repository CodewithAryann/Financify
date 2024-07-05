import { motion } from 'framer-motion'
import React from 'react'

function Secondpage() {
  return (
    <div className='h-[50vh] py-12 rounded-tl-3xl rounded-tr-3xl bg-white'>
        <div className='flex whitespace-nowrap font-["Montserrat"] uppercase font-[600] gap-10 overflow-hidden'>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration: 5}} className='text-[15vw]  leading-none'>WE are Financify</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration: 5}} className='text-[15vw]  leading-none'>WE are Financify</motion.h1>
        </div>
      
    </div>
  )
}

export default Secondpage
