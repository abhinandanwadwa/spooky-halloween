import React from 'react';
import './loader.css';
import { motion } from 'framer-motion';
import logo from '../../assets/logo-no-background.png'

const Loader = () => {
  return (
    <div className='loader flex flex-col justify-center items-center h-screen bg-[#131314]'>
        <motion.div
            initial = {{
                opacity: 0.1
            }}
            animate = {{
                opacity: [0.1, 0.4, 0.2, 0.11, 0.05, 0]
            }}
            transition = {{
                duration: 0.4
            }}
            className="image h-screen w-screen absolute">
        </motion.div>
        <motion.img
        initial = {{
            opacity: 0
        }}
        animate = {{
            // opacity: [0, 0.2, 0.4, 0.6, 0.8, 0.9, 1, 0.9, 0.8, 0.6, 0.4, 0.2, 0]
            // opacity: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0]
            opacity: [0, 1, 0]
        }}
        transition = {{
            duration: 1.5,
            delay: 0.4,
            type: 'spring'
        }}
        className='mt-[33px] w-[100px] md:w-[150px]' src={logo} alt="" />
    </div>
  )
}

export default Loader