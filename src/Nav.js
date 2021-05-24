import React from 'react';
import Glitch from './TwitchGlitchPurple.png';
import './Nav.css';

const Nav = () => (
    <nav className="nav">
        <ul>
            <li className="nav-item">
                <button>Home</button>
            </li>
            <li className="nav-item">
                <button img={Glitch}><a href="https://twitch.tv/Kyle" target="_blank">Kyle</a></button>
            </li>
        </ul>
    </nav>
);

export default Nav;