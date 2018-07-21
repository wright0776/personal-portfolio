import React, { Component } from "react";
import { Link } from "react-router-dom";
import './main.css';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            spin: 270,
            animation: 'spinin 2s forwards'
        }
    }

    spinAgain = () => {
        this.setState({spin: `${Math.floor(Math.random() * 1080)}deg`,animation: 'none'});
        console.log(this.state.spin)
    }

    render() {
        return (
            <div className="main">
                <div className='title-container' onClick={this.spinAgain} style={{transform: `rotateY(${this.state.spin})`, animation: this.state.animation}} >
                    <h1 className='title'>Matt</h1>
                    <p className='subtitle'>I'm a web developer, specialized in ReactJS.</p>
                </div>
                <div className='main-links'>
                    <Link className='black' to='/portfolio'>
                        <img src="https://cdn3.iconfinder.com/data/icons/business-vol-1/72/19-512.png" alt="portfolio" />
                        portfolio
                    </Link>
                    <Link className='black' to='/resume'>
                        <img src="https://png.icons8.com/ios/1600/resume.png" alt="resume" />
                        Resume
                    </Link>
                    <Link className='black' to='/contact'>
                        <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/79102-200.png" alt="contact" />
                        Contact
                    </Link>
                </div>
            </div>
        )
    }
}


export default Main;