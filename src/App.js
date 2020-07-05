import React from 'react';
import './App.css';
import Image from './images/covid.png'
import Header from './Components/header'

function App() {
  return (
    <div className="App">
      <Header />
      <img className = "images" src= {Image} alt ="Covid19" />
    </div>
  );
}

export default App;
