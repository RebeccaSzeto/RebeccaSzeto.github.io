import React from 'react';
import logo from './theor_logo.svg';
import './App.css';
import Details from './components/Details.js';
import Sidebar from './components/Sidebar.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
        <Sidebar />
      </header>
      
      <div className="App-body">
        <Details />
      </div>
    </div>
  );
}

export default App;
