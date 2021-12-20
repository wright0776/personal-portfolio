import React, { Component } from 'react';
import xkcdIcon from '../media/xkcd.jpeg';
import otfitLongBlack from '../media/otfitLongBlack.png';
import githubIcon from '../media/github.png';
import linkedInIcon from '../media/linkedin.png';

class Portfolio extends Component {

    render() {
        return (
            <div className='portfolio'>
                <h1 className='portfolioTitle slide'>Portfolio</h1>
                <div className='portfolio-items'>
                    <a className='item b' href="http://xkcd-viewer.surge.sh" target='_blank' rel="noopener noreferrer">
                        <h3>XKCD Comic Viewer</h3>
                        <img className='imgWithLabel xkcd' src={xkcdIcon} alt="xkcd viewer" />
                    </a>
                    <a className='item c' href="http://www.oliviataylerfitness.com" target='_blank' rel="noopener noreferrer">
                        <h3>Olivia Tayler Fitness</h3>
                        <img className='imgWithLabel' src={otfitLongBlack} alt="workout builder app" />
                    </a>
                    {/* <a className='item d' href="https://workout-creator.herokuapp.com" target='_blank' rel="noopener noreferrer">
                        <h3>Workout Builder App **</h3>
                        <img className='imgWithLabel' src="https://cdn1.iconfinder.com/data/icons/sports-5/96/Dumbbell-512.png" alt="workout builder app" />
                    </a> */}
                    <a className='item e' href="https://github.com/wright0776/" target='_blank' rel="noopener noreferrer">
                        <h3>Check out my Github:</h3>
                        <img src={githubIcon} alt="github" />
                    </a>
                    <a className='item f' href="https://www.linkedin.com/in/matthew-wright-wright0776/" target='_blank' rel="noopener noreferrer">
                        <h3>Check out my LinkedIn:</h3>
                        <img src={linkedInIcon} alt="linkedin" />
                    </a>
                </div>
            </div>
        )
    }
}

export default Portfolio
