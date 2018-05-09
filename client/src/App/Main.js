import React from "react";
import { Link } from "react-router-dom";

function Main() {
    return (
        <div className="main">
            <h1 className='title'>Matt</h1>
            <p>I'm a web developer, specialized in ReactJS.</p>
            <Link className='black' to='/portfolio'>
                <img src="https://cdn3.iconfinder.com/data/icons/business-vol-1/72/19-512.png" alt="portfolio" />
                portfolio
            </Link>
            <Link className='black' to='/resume'>
                <img src="https://png.icons8.com/ios/1600/resume.png" alt="resume"/>
                Resume
            </Link>
            <Link className='black' to='/contact'>
                <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/79102-200.png" alt="contact"/>
                Contact
            </Link>
        </div>
    )
}

export default Main;