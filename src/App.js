import React from 'react';
import './App.css';
import Image from './images/covid.png'
import Header from './Components/header'
import FetchGlobalStats from './Components/GlobalData'

function App() {
  return (
    <div className="App">
      <img className = "images" src= {Image} alt ="Covid19" />
      <FetchGlobalStats />
    </div>
  );
}

export default App;
