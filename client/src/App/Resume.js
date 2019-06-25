import React from 'react';

function Resume() {
    return (
        <div className='resume'>

            <h1 className='title' >Matthew Wright</h1>

            <div className='contact'>
                <h5>801-755-0125</h5>
                <h5>matwright2010@gmail.com</h5>
                <h5>matthewwright.io</h5>
            </div>

            <div className='resumeContent'>
                <div className='skills'>
                    <h2>SKILLS</h2>
                    <ul className='skillsContainer'>
                        <li>React / Angular 2+ / Vue</li>
                        <li>Node.js</li>
                        <li>JavaScript</li>
                        <li>Git</li>
                        <li>Redux / NGRX / RxJs</li>
                        <li>HTML</li>
                        <li>CSS/Sass/Scss</li>
                        <li>AWS CodePipeline</li>
                        <li>AWS Lambda</li>
                        <li>AWS S3</li>
                        <li>Express</li>
                        <li>NoSQL/SQL</li>
                        <li>Mongoose</li>
                        <li>MongoDB</li>
                        <li>AWS DynamoDB</li>
                    </ul>
                </div>

                <div className='experience'>
                    <h2>EXPERIENCE</h2>
                    <ul className='expList'>
                        <li>
                            <h3>Software Engineer, Assure</h3>
                            <span>Salt Lake City, UT — Sep 2018 - Present</span>
                            <p>Worked with MEAN stack, front and back end. Engaged with several API’s including eSignLive, WebMerge, LegalInc and BlockScore. Used AWS services including CodePipeline, S3, Lambda and DynamoDB. Learned a great deal about finance, business, and tax. Mentored interns fresh out of coding school. </p>
                        </li>
                        <li>
                            <h3>Lead Central Sterile Processing Tech, Salt Lake Regional Medical Center</h3>
                            <span>Salt Lake City, UT — Aug 2014 - Sept 2015, Feb 2017 - Dec 2017</span>
                            <p>Gained experience leading a team and learned how handle and meet deadlines and expectations.</p>
                        </li>
                        <li>
                            <h3>Surgical Support Tech, Salt Lake Regional Medical Center</h3>
                            <span>Salt Lake City, Utah — Oct 2012 - Dec 2013, Sept 2015 - Feb 2017</span>
                            <p>Learned to work in a fast paced environment and be part of a team. Sharpened skills in supporting people and learned to be accountable for my own work. </p>
                        </li>
                    </ul>
                </div>

                <div className='education'>
                    <h2>EDUCATION</h2>
                    <ul className='eduContainer'>
                        <li>
                            <h3 className='eduTitle'>V School - Web Development - Full Stack JavaScript</h3>
                            <span className='eduSub'>Salt Lake City, Utah — Feb 2018 - May 2018</span>
                        </li>
                        <li>
                            <h3 className='eduTitle'>Salt Lake Community College - Computer Science</h3>
                            <span className='eduSub'>Salt Lake City, Utah — Jan 2011 - Aug 2013</span>
                        </li>
                    </ul>
                </div>

                <div className='resPortfolio'>
                    <h2>PORTFOLIO</h2>
                    <ul className='portfolioList'>
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
                    <ul className='referencesList'>
                        <li className='ref'>
                            <h4>Jeremiah Matthews</h4>
                            <span>Software Engineer and Technical Team Lead</span>
                            <span>Assure Services</span>
                            <span className='refPhone'>+1 808.748.9082</span>
                        </li>
                        <li className='ref'>
                            <h4>Mark Nielsen</h4>
                            <span>Software Engineer and Technical Team Lead</span>
                            <span>Assure Services</span>
                            <span className='refPhone'>+1 801.867.0109</span>
                        </li>
                        <li className='ref'>
                            <h4>Ken Diederich</h4>
                            <span>Business Information Systems Professional and Software Developer</span>
                            <span>Snap Finance</span>
                            <span className='phone'>+1 801.712.9728</span>
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

export default Resume;