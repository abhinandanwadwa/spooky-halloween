import { useEffect, useState } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    // eslint-disable-next-line
  }, []);

  // https://mixdesign.club/themeforest/oomph-halloween/img/demo/bg-demo.svg

  return (
    <>
    {isLoading ?
      <h1>Hello</h1>
      :
      <div className="cont flex flex-col">
        <Navbar />
        <Hero />
      </div>
    }
    </>
    
  );
}

export default App;
