import React from "react";
import { Link } from 'react-router-dom';

function TopNav() {
    return (
        <div className="topNav">
            <ul className="navButtons">
                <Link className='navButton' to="/">
                    Home
                    <div className='underline'></div>
                </Link>
                <Link className='navButton' to="/portfolio">
                    Portfolio
                    <div className='underline'></div>
                </Link>
                <Link className='navButton' to="/resume">
                    Resume
                    <div className='underline'></div>
                </Link>
                <Link className='navButton' to="/contact">
                    Contact
                    <div className='underline'></div>
                </Link>
            </ul>
        </div>
    )
}

export default TopNav;