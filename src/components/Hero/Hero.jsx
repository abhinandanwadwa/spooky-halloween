import React from 'react';
import './hero.css';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="hero bg-[#131314] mt-[-90px] h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
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
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default Hero