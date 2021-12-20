import React, { Component } from "react";
import { Link } from "react-router-dom";

class LandingPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            spinY: '0deg',
            spinX: '0deg',
            animation: 'spinin 2s forwards',
        }
    }

    spinAgain = () => {
        this.setState({ spinY: `${Math.floor(Math.random() * 1080)}deg`, animation: 'none' });
    }
    flipOver = () => {
        if(this.state.spinX === '0deg'){
            this.setState({ spinX: '180deg' });
        } else {
            this.setState({ spinX: '0deg' })
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                spinY: '0deg',
                animation: 'none'
            })
        }, 2000)
    }

    render() {
        return (
            <div className="main">
                <div className='card-container'
                    onClick={this.flipOver}
                    style={{ transform: `rotateY(${this.state.spinY}) rotateX(${this.state.spinX})`, animation: this.state.animation }}
                >
                    <div className='card-front'>
                        <h1 className='cardTitle'>Matt Wright</h1>
                        <p className='cardSubtitle'>Full Stack Web Developer</p>
                    </div>
                    <div className='card-back'>
                        <span className='card-info1'>Matthew Wright</span>
                        <span className='card-info2'>matthewwright.io</span>
                        <span>matwright2010@gmail.com</span>
                        <span>801-755-0125</span>
                    </div>
                </div>
                <div className='main-links'>
                    <Link className='landing-link' to='/portfolio'>
                        portfolio
                    </Link>
                    <Link className='landing-link' to='/resume'>
                        Resume
                    </Link>
                    <Link className='landing-link' to='/contact'>
                        Contact
                    </Link>
                </div>
            </div>
        )
    }
}


export default LandingPage;