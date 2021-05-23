import Pimp from './PimpPls.gif';
import Glitch from './TwitchGlitchPurple.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Pimp} className="Pimp" alt="logo" />
        <p>Pastor Slim, aka Alabaster Slim, Bible Salesman</p> 
        <p>Under Construction, mothafucka.</p>
        <img src={Glitch} className="TwitchGlitch" alt="Twitch Logo" />
        <a href="https://twitch.tv/Kyle">https://twitch.tv/Kyle</a>
       </header>
    </div>
  );
}

export default App;
