import { useEffect, useState } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    // eslint-disable-next-line
  }, []);

  // https://mixdesign.club/themeforest/oomph-halloween/img/demo/bg-demo.svg

  return (
    <>
    {isLoading ?
      <Loader />
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
