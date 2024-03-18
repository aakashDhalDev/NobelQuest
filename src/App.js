import './App.css';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Routings } from './components/Routes';
import { useState } from 'react';

function App() {

  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark':''}>
      <div className='bg-gray-100 dark:bg-gray-900 min-h-screen'>
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        <Routings/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
