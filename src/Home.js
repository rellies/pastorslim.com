import React from 'react';
import Pastor from './PastorPls.gif';
import Glitch from './TwitchGlitchPurple.png';
import './Home.css';

const Home = () => {
    return ( 
        <div className="Home">
            <img src={Pastor} className="Pastor" alt="logo"/> 
            <p>Pastor Alabastor Slim, Bible Salesman</p>
            <p>Welcome, mothafucka.</p>
            <img src={Glitch} className="Glitch" alt="Twitch Gltich" href="https://twitch.tv/Kyle"></img>
        </div>
    );
};

export default Home;