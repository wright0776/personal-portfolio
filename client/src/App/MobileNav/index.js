import React from 'react';
import {Link} from 'react-router-dom';
import './mobile-nav.css';

function MobileNav() {
    return (
        <div className='mobile-nav'>
            <ul className="mNavButtons">
                <Link className='mNavButton' to="/">
                    Matt
                    <div className='underline'></div>
                </Link>
                <Link className='mNavButton' to="/contact">
                    
                    <div className='underline'></div>
                </Link>
            </ul>
        </div>
    )
}

export default MobileNav