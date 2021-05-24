import React from 'react';
import Glitch from './TwitchGlitchPurple.png';
import Home from './Home';
import './Nav.css';

const Nav = ({activeTab, onTabChange}) => {

    const headerClass = (tabName) =>
        `nav-item ${
            (activeTab === tabName) ? 'selected' : ''
        }`;

    return (
    <nav className="nav">
        <ul>
            <li className={headerClass('home')}>
                <button onClick={() => onTabChange('home')}>
                    Home
                </button>
            </li>
            <li className={headerClass('contribute')}>
                <button onClick={() => onTabChange('contribute')}>
                    Contribute
                </button>
            </li>
            <li className={headerClass('kyle')}>
                <button onClick={() => window.open("https://twitch.tv/Kyle", "_blank")}>
                    Kyle
                </button>
            </li>
        </ul>
    </nav>
    );
};

export default Nav;