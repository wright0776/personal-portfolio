import React from 'react'

function Portfolio() {
    return (
        <div className='portfolio'>
            <h1 className='title slide'>Portfolio</h1>
            <p>Workout Builder App created by me!</p>
            <p>(currently optimized for mobile)</p>
            <a className='blueLink' href="https://workout-creator.herokuapp.com">
                <img className='imgWithLabel' src="https://cdn1.iconfinder.com/data/icons/sports-5/96/Dumbbell-512.png" alt="workout builder app"/>
            </a>
            <p>Check out my Github:</p>
            <a href="https://github.com/wright0776/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="github"/>
            </a>
            <p>Check out my LinkedIn:</p>
            <a href="https://www.linkedin.com/in/matthew-wright-wright0776/">
                <img src="https://image.flaticon.com/icons/svg/34/34227.svg" alt="linked in"/>
            </a>
        </div>
    )
}

export default Portfolio
