import React from 'react';
import ReactPlayer from 'react-player';
import './Sermons.css';

const Sermons = () => {    
    
    return (
        <div className="sermons">
            <ReactPlayer className="ReactPlayer" url="https://soundcloud.com/outtotunetyrone/btch-dont-take-my-phone-outto-tune-tyrone-feat-x" />
           <p className="announcement">All rise mothafucka.</p>
        </div>

    );
}

export default Sermons;