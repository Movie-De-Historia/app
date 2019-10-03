import React from 'react';
import kachinko_open from './kachinko_open.svg';
import kachinko_close from './kachinko_close.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={kachinko_open} className="App-logo1" alt="logo" />
        <img src={kachinko_close} className="App-logo2" alt="logo" />
        <img src={kachinko_close} className="App-logo3" alt="logo" />
      </header>
    </div>
  );
}

export default App;
