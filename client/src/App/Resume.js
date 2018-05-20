import React from 'react'

function Resume() {
    return (
        <div className='resume'>
            <h1 className='resumeTitle' >Matthew Wright</h1>
            <div className='resumeContact'>
                <h5>801-755-0125</h5>
                <h5>matwright2010@gmail.com</h5>
                <h5>4769 S Holladay Blvd, Holladay, UT 84117</h5>
                <h5>matthewwright.io</h5>
            </div>
            <div className='resumeContent'>
                <div className='skills'>
                    <h2>SKILLS</h2>
                    <ul className='skillsContainer'>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>JavaScript</li>
                        <li>Git</li>
                        <li>JSON</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                    </ul>
                </div>
                <div className='education'>
                    <h2>EDUCATION</h2>
                    <ul className='eduContainer'>
                        <li>
                            <h3 className='eduTitle'>V School - Web Development - Full Stack JavaScript</h3>
                            <span className='eduSub'>Salt Lake City, Utah — Completed Course May 2018</span>
                        </li>
                        <li>
                            <h3 className='eduTitle'>Salt Lake Community College</h3>
                            <span className='eduSub'>Salt Lake City, Utah — Spring 2011 - Summer 2013</span>
                        </li>
                    </ul>
                </div>
                <div className='experience'>
                    <h2>EXPERIENCE</h2>
                    <ul className='expContainer'>
                        <li>
                            <h3>Lead Central Sterile Processing Tech III, Salt Lake Regional Medical Center</h3>
                            <span>Salt Lake City, UT — Aug 2014 - Sept 2015, Feb 2017 - Dec 2017</span>
                            <h4>ACCOMPLISHMENTS</h4>
                            <p>Gained experience working in a new capacity relating to surgery. Honed knowledge of the function of Central Services, sterilization processes, surgical instruments and surgical instrument sets. learned to lead a team.</p>
                        </li>
                        <li>
                            <h3>Surgical Support Tech II, Operating Room, Salt Lake Regional Medical Center</h3>
                            <span>Salt Lake City, Utah — Oct 2012 - Dec 2013, Sept 2015 - Feb 2017</span>
                            <h4>ACCOMPLISHMENTS</h4>
                            <p>Learned to work in a very fast paced environment and be part of a team. Sharpened skills in supporting people and learned to be accountable for my own work. Learned how to handle and meet expectations.</p>
                        </li>
                        <li>
                            <h3>Student, Nuclear Field “A” School, Naval Nuclear Power Training Command, United States Navy</h3>
                            <span>Goose Creek, South Carolina, Jan 2014 - Aug 2014 (Honorable Discharge)</span>
                            <h4>ACCOMPLISHMENTS</h4>
                            <p>Learned to take orders, work as a member of a team, follow rules, and handle tough situations. Gained appreciation for civilian life as an American.</p>
                        </li>
                    </ul>
                </div>
                <div className='resPortfolio'>
                    <h2>PORTFOLIO</h2>
                    <ul className='resPortContainer'>
                        <li className='website'>
                            <div className='mLogo'>M</div>
                            <a href="https://matthewwright.io">matthewwright.io</a>
                        </li>
                        <li className='resPort'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="github"/>
                            <a href="https://github.com/wright0776">github.com/wright0776</a>
                        </li>
                    </ul>
                </div>
                <div className='references'>
                    <h2>REFERENCES</h2>
                    <ul className='refContainer'>
                        <li>
                            <h4>Kayleen Evans</h4>
                            <span>Director of Surgical Services</span>
                            <span>Salt Lake Regional Medical Center</span>
                            <span>Salt Lake City, UT</span>
                            <span className='refPhone'>801-350-4111</span>
                        </li>
                        <li>
                            <h4>Laney Kawaguchi</h4>
                            <span>Fellow Student/Friend</span>
                            <span>V-School</span>
                            <span>Salt Lake City, UT</span>
                            <span className='refPhone'>801-906-1610</span>
                        </li>
                        <li>
                            <h4>Austin Walker</h4>
                            <span>Web Developer/Friend</span>
                            <span>Crossroads Technologies Inc.</span>
                            <span>Holladay, UT</span>
                            <span className='refPhone'>801-884-9531</span>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <a href={require("../docs/Matthew-Wright-Resume.pdf")} download="Matthew-Wright-Resume">
                download
            </a> */}
        </div>
    )
}

export default Resume