import React from 'react';
import './hero.css';
import { motion } from 'framer-motion';
import logo from '../../assets/logo-no-background.png'
// import Cursor from 'react-cursor-follow';
import AnimatedCursor from "react-animated-cursor";

const Hero = () => {
  return (
    <>
    <AnimatedCursor
      innerSize={13}
      outerSize={13}
      color='207, 126, 44'
      outerAlpha={0.3}
      innerScale={0.7}
      outerScale={4}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    <div className="hero text-white bg-[#131314] mt-[-90px] h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        {/* <Cursor size={45} duration={0.6} hollow={true} pulse={true} color="#4b0082" /> */}
        <motion.div
            initial = {{
                opacity: 0
            }}
            animate = {{
                opacity: [0, 0.7, 1]
            }}
            transition = {{
                duration: 1
            }}
            className="image h-screen w-screen absolute">
        </motion.div>
      <motion.img
      initial = {{
        opacity: 0,
        y: 70,
      }}
      animate = {{
        opacity: 1,
        y: 0,
      }}
      transition = {{
        duration: 0.35
      }}
      src={logo} className="z-10 m-0 w-[200px] md:w-[300px]" alt="" />
    <motion.p
    initial = {{
        opacity: 0,
        y: 50,
    }}
    animate = {{
        opacity: 1,
        y: 0,
    }}
    transition = {{
        duration: 0.35,
        delay: 0.2,
    }}
    className='z-10 about uppercase tracking-widest text-xl max-w-sm mt-[-200px] m-0'>A Fun Loaded Halloween Event organised by <strong>Echoes - TIET</strong></motion.p>
    </div>
    </>
  )
}

export default Hero