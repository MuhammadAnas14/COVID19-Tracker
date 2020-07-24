import React from 'react';
import './App.css';
import Image from './images/covid.png'
import Header from './Components/header'
import FetchGlobalStats from './Components/GlobalData'
import AllCountries from './Components/Countries'
import Charts from './Components/charts'

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
