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
      color='193, 11, 111'
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
    <div className="hero bg-[#131314] mt-[-90px] h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
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
      <img src={logo} className="z-10 m-0 w-[200px] md:w-[350px]" alt="" />
    </div>
    </>
  )
}

export default Hero