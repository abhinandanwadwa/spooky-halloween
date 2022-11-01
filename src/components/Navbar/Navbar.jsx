import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import './navbar.css'
import pumpkLogo from '../../assets/pumpk.jpg';
import useSound from 'use-sound';
import popEffect from '../../assets/popEffect.flac';
import { useDetectClickOutside } from 'react-detect-click-outside';

const Navbar = () => {
    const [playSound] = useSound(popEffect);

    
    const toggleForm = () => {
        const theForm = document.getElementById('button-form');
        if (theForm.style.display === "block") {
            theForm.style.display = "none";
        }
        else {
            theForm.style.display = "block";
        }
    }

    const clickedOutsideForm = () => {
        const theForm = document.getElementById('button-form');
        if (theForm.style.display === "block") {
            theForm.style.display = "none";
        }
    }
    
    const ref = useDetectClickOutside({ onTriggered: clickedOutsideForm });
    
  return (
    <header className='navbar flex md:m-[0px 140px] m-0 items-start justify-between sticky top-0 p-3 md:p-5 max-w-7xl mx-auto z-20 xl:items-center'>
        <audio id='pop-audio'>
	        <source src={popEffect}></source>
        </audio>
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

        <button className='hidden' id='testId'></button>

        <div className='pumpk-image scale-150 absolute md:top-12 top-7 left-[51%] md:left-[50%] z-[1]'></div>
        <motion.img
        initial = {{
            // y: -20,
            opacity: 0,
        }}
        animate = {{
            // y: 0,
            opacity: 1,
        }}
        transition = {{
            duration: 0.4,
            delay: 0.2
        }}
        onMouseEnter={playSound} className='main-image md:w-[70px] w-[50px] relative z-[2] hover:scale-125 transition-all' src={pumpkLogo} alt="" />

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
            <div ref={ref} className="button-wrapper">
                <button onClick={toggleForm} id='box' className='gradient-border uppercase border border-gray-500 rounded-lg md:p-3 p-[0.5rem] text-xs md:mt-0 mt-2 md:inline-block md:text-sm text-gray-400 font-bold'>Grab Your Tickets!</button>
                
                <form id='button-form' className="hidden fixed p-6 md:max-w-sm max-w-[10rem] m-[0px -100px] bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </form>
            </div>

        </motion.div>
    </header>
  )
}

export default Navbar