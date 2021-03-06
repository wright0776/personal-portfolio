import React, { Component } from 'react';
import otfitLongBlack from '../media/otfitLongBlack.png';

class Portfolio extends Component {

    render() {
        return (
            <div className='portfolio'>
                <h1 className='portfolioTitle slide'>Portfolio</h1>
                <div className='portfolio-items'>
                    <a className='item a' href="https://jam-trip-organizer.herokuapp.com/" target='_blank' rel="noopener noreferrer">
                        <h3>Trip Organizer **</h3>
                        <img className='imgWithLabel' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Suitcase_icon.svg/2000px-Suitcase_icon.svg.png" alt="trip organizer" />
                    </a>
                    <a className='item b' href="http://xkcd-viewer.surge.sh" target='_blank' rel="noopener noreferrer">
                        <h3>XKCD Comic Viewer</h3>
                        <img className='imgWithLabel xkcd' src="https://is1-ssl.mzstatic.com/image/thumb/Purple62/v4/d0/2e/b5/d02eb533-c255-b1aa-502b-a0e217b2c7df/contsched.mhtvojhv.png/246x0w.jpg" alt="xkcd viewer" />
                    </a>
                    <a className='item c' href="http://www.oliviataylerfitness.com" target='_blank' rel="noopener noreferrer">
                        <h3>Olivia Tayler Fitness</h3>
                        <img className='imgWithLabel' src={otfitLongBlack} alt="workout builder app" />
                    </a>
                    <a className='item d' href="https://workout-creator.herokuapp.com" target='_blank' rel="noopener noreferrer">
                        <h3>Workout Builder App **</h3>
                        <img className='imgWithLabel' src="https://cdn1.iconfinder.com/data/icons/sports-5/96/Dumbbell-512.png" alt="workout builder app" />
                    </a>
                    <a className='item e' href="https://github.com/wright0776/" target='_blank' rel="noopener noreferrer">
                        <h3>Check out my Github:</h3>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="github" />
                    </a>
                    <a className='item f' href="https://www.linkedin.com/in/matthew-wright-wright0776/" target='_blank' rel="noopener noreferrer">
                        <h3>Check out my LinkedIn:</h3>
                        <img src="https://image.flaticon.com/icons/svg/34/34227.svg" alt="linked in" />
                    </a>
                </div>
                <h4 className='portfolio-note'>** Unfinished</h4>
            </div>
        )
    }
}

export default Portfolio
