import React, { useState } from 'react';
import Pastor from './PastorPls.gif';
import Glitch from './TwitchGlitchPurple.png';
import Nav from './Nav';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="App">
        <Nav 
          activeTab={activeTab}
          onTabChange={setActiveTab}
          />
        <main className="PastorSlim-content">
          <img src={Pastor} className="Pastor" alt="logo"/> 
          <p>Pastor Alabastor Slim, Bible Salesman</p>
          <p>Welcome, mothafucka.</p>
          <img src={Glitch} className="Glitch" href="https://twitch.tv/Kyle"></img>
        </main> 
    </div>
  );
 };

  const Header = ({tab}) => {
      switch (tab) {
          case 'home':
            return <span>home page</span>;
          case 'kyle':
            return <span>Kyle</span>;
          default:
            break;
      }
  } 

export default App;
