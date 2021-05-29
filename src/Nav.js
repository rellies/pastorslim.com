import React from 'react';
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
                <button onClick={() => onTabChange(<Home />)}>
                    Home
                </button>
            </li>
            <li className={headerClass('contribute')}>
                <button onClick={() => onTabChange('contribute')}>
                    Contribute
                </button>
            </li>
            <li className={headerClass('sermons')}>
                <button onClick={() => onTabChange('sermons')}>
                    Sermons
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