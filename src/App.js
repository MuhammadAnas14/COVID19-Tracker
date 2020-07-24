import React from 'react';
import './App.css';
import Image from './images/covid.png'
import FetchGlobalStats from './Components/GlobalData'
import AllCountries from './Components/Countries'


function App() {
  return (
    <div className="App">
      <img className = "images" src= {Image} alt ="Covid19" />
      <FetchGlobalStats />
      <AllCountries />
    </div>
  );
}

export default App;
