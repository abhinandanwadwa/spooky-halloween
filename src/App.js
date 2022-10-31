import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    // eslint-disable-next-line
  }, []);

  return (
    <>
    {isLoading ?
      <h1>Hello</h1>
      :
      <div className="App bg-red-500">
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
    }
    </>
    
  );
}

export default App;
