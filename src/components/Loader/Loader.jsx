import React from 'react';
import './loader.css';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className='loader flex flex-col h-screen bg-[#131314]'>
        <motion.div
            initial = {{
                opacity: 0.1
            }}
            animate = {{
                opacity: [0.1, 0.4, 0.2, 0.11, 0.05, 0]
            }}
            transition = {{
                duration: 0.6
            }}
            className="image h-screen">
        </motion.div>
    </div>
  )
}

export default Loader