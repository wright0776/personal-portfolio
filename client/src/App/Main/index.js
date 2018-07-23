import React, { Component } from "react";
import { Link } from "react-router-dom";
import './main.css';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            spinY: '270deg',
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
                spinY: '-5deg',
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
                        <h1 className='title'>Matt Wright</h1>
                        <p className='subtitle'>Certified Full Stack Web Developer</p>
                    </div>
                    <div className='card-back'>
                        <span className='card-info1'>Matthew Wright</span>
                        <span className='card-info2'>matthewwright.io</span>
                        <span>matwright2010@gmail.com</span>
                        <span>801-755-0125</span>
                    </div>
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