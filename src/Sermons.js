import React from 'react';
import ReactPlayer from 'react-player';
import submitSermon from './submitSermons';
import './Sermons.css';

const Sermons = () => {

    //var sermonURL = submitSermon.apply.toString;
    var scurl="https://soundcloud.com/outtotunetyrone/btch-dont-take-my-phone-outto-tune-tyrone-feat-x";
    
    return (
        <div className="sermons">
            <ReactPlayer className="ReactPlayer" url={Sermons.scurl} />
            <p className="announcement">All rise mothafucka.</p>
            <br />
        </div>

    );
}

export default Sermons;