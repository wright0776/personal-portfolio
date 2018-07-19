import React from 'react'
import './portfolio.css'

function Portfolio() {
    return (
        <div className='portfolio'>
            <h1 className='title2 slide'>Portfolio</h1>
            <div className='portfolio-items'>
                <a className='item' href="https://jam-trip-organizer.herokuapp.com/" target='_blank' rel="noopener noreferrer">
                    <h3>Trip Organizer *</h3>
                    <img className='imgWithLabel' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Suitcase_icon.svg/2000px-Suitcase_icon.svg.png" alt="trip organizer" />
                </a>
                <a className='item' href="http://xkcd-viewer.surge.sh" target='_blank' rel="noopener noreferrer">
                    <h3>XKCD Comic Viewer</h3>
                    <img className='imgWithLabel' src="https://is1-ssl.mzstatic.com/image/thumb/Purple62/v4/d0/2e/b5/d02eb533-c255-b1aa-502b-a0e217b2c7df/contsched.mhtvojhv.png/246x0w.jpg" alt="xkcd viewer" />
                </a>
                <a className='item' href="http://www.oliviataylerfitness.com" target='_blank' rel="noopener noreferrer">
                    <h3>Olivia Tayler Fitness *</h3>
                    <img className='imgWithLabel' src="https://raw.githubusercontent.com/wright0776/olivia-tayler-fitness/master/client/src/media/otFitBrand2.png" alt="workout builder app" />
                </a>
                <a className='item' href="https://workout-creator.herokuapp.com" target='_blank' rel="noopener noreferrer">
                    <h3>Workout Builder App *</h3>
                    <img className='imgWithLabel' src="https://cdn1.iconfinder.com/data/icons/sports-5/96/Dumbbell-512.png" alt="workout builder app" />
                </a>
                <a className='item' href="https://github.com/wright0776/" target='_blank' rel="noopener noreferrer">
                    <h3>Check out my Github:</h3>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="github" />
                </a>
                <a className='item' href="https://www.linkedin.com/in/matthew-wright-wright0776/" target='_blank' rel="noopener noreferrer">
                    <h3>Check out my LinkedIn:</h3>
                    <img src="https://image.flaticon.com/icons/svg/34/34227.svg" alt="linked in" />
                </a>
            </div>
            <h4 className='portfolio-sub'>* Work in progress.</h4>
        </div>
    )
}

export default Portfolio
