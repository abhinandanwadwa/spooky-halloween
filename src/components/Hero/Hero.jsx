import React from 'react';
import './hero.css'

const Hero = () => {
  return (
    <div className="hero bg-[#131314] mt-[-90px] h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
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