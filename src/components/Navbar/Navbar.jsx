import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import './navbar.css'


const Navbar = () => {
  return (
    <header className='navbar flex md:m-[0px 140px] m-0 items-start justify-between sticky top-0 p-3 md:p-5 max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div
        initial = {{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate = {{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition = {{
            duration: 1.5, // In Seconds
        }}
        className='flex flex-row items-center md:space-x-3 -space-x-1'>
            {/* Social Icons */}
            <SocialIcon target={"_blank"} url="https://www.youtube.com/channel/UCCiCitznAVUTBdcEhhPQRfQ" fgColor='gray' bgColor='transparent' />
            <SocialIcon target={"_blank"} url="https://www.linkedin.com/in/abhinandan-wadhwa-a30552137/" fgColor='gray' bgColor='transparent' />
            <SocialIcon target={"_blank"} url="https://github.com/abhinandanwadwa" fgColor='gray' bgColor='transparent' />
            {/* <SocialIcon url="https://www.youtube.com" fgColor='gray' bgColor='transparent' /> */}

        </motion.div>

        <motion.div
        initial = {{
            x: 500,
            opacity: 0,
            scale: 0.5
        }}
        animate = {{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition = {{
            duration: 1.5
        }}
        className='flex flex-row items-center text-gray-300'>
            {/* <SocialIcon
                network='email'
                fgColor='gray'
                bgColor='transparent'
            /> */}
            <button id='box' className='gradient-border uppercase border border-gray-500 rounded-lg md:p-3 p-[0.5rem] text-xs md:mt-0 mt-2 md:inline-block md:text-sm text-gray-400 font-bold'>Grab Your Tickets!</button>
        </motion.div>
    </header>
  )
}

export default Navbar