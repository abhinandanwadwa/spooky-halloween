import { useEffect, useState } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar';
import { Helmet } from 'react-helmet';

const TITLE = 'Spooky Halloween | ECHOES';

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
    <Helmet>
      <title>{ TITLE }</title>
    </Helmet>
    {isLoading ?
      <Loader />
      :
      <div className="cont flex flex-col overflow-x-hidden	">
        <Navbar />
        <Hero />
      </div>
    }
    </>
    
  );
}

export default App;
