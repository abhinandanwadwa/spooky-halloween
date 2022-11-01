import React from 'react';
import './hero.css';
import { motion } from 'framer-motion';
import logo from '../../assets/logo-no-background.png'
// import Cursor from 'react-cursor-follow';
import AnimatedCursor from "react-animated-cursor";
import SmokeElement from "smoke-effect-react";

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
        <div style={{marginTop: '-100px !important'}} className='z-10 image-wrapper flex mt-[-100px]'>
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
        </div>
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
    className='z-10 about uppercase tracking-widest text-xl md:max-w-sm max-w-[19rem] mt-[-200px] m-0'>A Fun Loaded Halloween Event organised by <strong>Echoes - TIET</strong></motion.p>
    </div>
    
    <div className="smoke absolute z-[0]">
        <SmokeElement
          opacity="0"
          smokeSrc="https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png"
          smokeOpacity="1"
        />
    </div>

    </>
  )
}

export default Hero