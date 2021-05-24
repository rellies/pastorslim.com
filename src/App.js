import React from 'react';
import Pastor from './PastorPls.gif';
import Glitch from './TwitchGlitchPurple.png';
import Nav from "./Nav";
import './App.css';

const App = () => {
  return (
    <div className="App">
        <Nav />
        <main className="PastorSlim-content" >
          <img src={Pastor} className="Pastor" alt="logo" />
          <p>Pastor Slim, aka Alabaster Slim, Bible Salesman</p> 
          <p>Under Construction, mothafucka.</p>
          <img src={Glitch} className="TwitchGlitch" alt="Twitch Logo" />
          <a href="https://twitch.tv/Kyle">https://twitch.tv/Kyle</a>
        </main> 
    </div>
  );
}

export default App;
