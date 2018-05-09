import React from "react";
import {Link} from 'react-router-dom';

function TopNav () {
    return (
        <div className="topNav">
            <ul className="navButtons">
                <Link className='navButton' to="/">Home</Link>
                <Link className='navButton' to="/portfolio">Portfolio</Link>
                <Link className='navButton' to="/resume">Resume</Link>
                <Link className='navButton' to="/contact">Contact</Link>
            </ul>
        </div>
    )
}

export default TopNav;