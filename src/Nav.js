import React from 'react';
import Glitch from './TwitchGlitchPurple.png';
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
            <li className={headerClass('kyle')}>
                <button onClick={() => onTabChange('kyle')}>
                    Kyle
                </button>
            </li>
        </ul>
    </nav>
    );
};

export default Nav;