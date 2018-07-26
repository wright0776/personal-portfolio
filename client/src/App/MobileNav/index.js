import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './mobile-nav.css';
import './hamburgers.css';

class MobileNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hamClass: 'hamburger hamburger--spin',
            mNavMenuClass: 'mNavMenu',
            hamOpen: false
        }
    }
    
    openHam = () => {
        this.state.hamOpen ? 
        this.setState(prevState => ({
            hamClass: 'hamburger hamburger--spin',
            mNavMenuClass: 'mNavMenu',
            hamOpen: false
        })):
        this.setState(prevState => ({
            hamClass: 'hamburger hamburger--spin is-active',
            mNavMenuClass: 'mNavActive',
            hamOpen: true
        }))
    }

    render() {
        return (
            <div className='mobile-nav'>
                <ul className="mNavButtons">
                    <Link className='mNavButton' to="/" >
                        Matt
                        <div className='underline'></div>
                    </Link>
                    <button onClick={this.openHam} className={this.state.hamClass} to="/contact">
                        <span className='hamburger-box'>
                            <span className='hamburger-inner'></span>
                        </span>
                    </button>
                </ul>
                <ul className={this.state.mNavMenuClass}>
                    <Link className='mNavMenuLink' onClick={this.openHam} to='/portfolio'>Portfolio</Link>
                    <Link className='mNavMenuLink' onClick={this.openHam} to='/resume'>Resume</Link>
                    <Link className='mNavMenuLink' onClick={this.openHam} to='/contact'>Contact</Link>
                </ul>
            </div>
        )
    }
}

export default MobileNav