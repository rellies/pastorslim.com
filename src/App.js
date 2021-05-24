import React, { useState } from 'react';
import Nav from './Nav';
import Home from './Home';
import Sermons from './Sermons';
import Footer from './Footer';
import Contribute from './Contribute';
import './App.css';

// Do I need any more hooks? Probably.

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
          case 'sermons':
            return <Sermons />;
          default:
            return <Home />;
      }
  } 

export default App;
