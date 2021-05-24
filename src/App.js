import React, { useState } from 'react';
import Pastor from './PastorPls.gif';
import Glitch from './TwitchGlitchPurple.png';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
import Contribute from './Contribute';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState();

  return (
    <div className="App">
        <Nav activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="PastorSlim-content">
          <Header tab={activeTab} />
        </main> 
        <Footer />
    </div>
  );
 };

  const Header = ({tab}) => {
      switch (tab) {
          case 'home':
            return <Home />;
          case 'contribute':
            return <Contribute />;
          default:
            return <Home />;
      }
  } 

export default App;
