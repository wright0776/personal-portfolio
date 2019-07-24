import React from 'react';
import mwresume from '../media/mwresume.pdf';

function Resume() {
    return (
        <div className='resume'>

            <a className='download' href={mwresume} target='_blank'>Download</a>
            
            <div className='page'>

                <div className='header'>

                    <div className='left'>
                        <p>Software Engineer</p>
                        <h1>Matt Wright</h1>
                    </div>

                    <div className='right'>
                        <p>Phone: (801) 755 - 0125</p>
                        <p>Email: matwright2010@gmail.com</p>
                        <p>LinkedIn: https://www.linkedin.com/in/matthew-wright-wright0776/</p>
                        <p>Portfolio: www.matthewwright.io</p>
                    </div>
                </div>

                <h2 className='title-underlined'>Summary</h2>
                <div className='summary'>
                    <ul>
                        <li>Experience building web applications using <b>Angular</b>, <b>React</b> and <b>Node.js</b></li>
                        <li>Designed CRUD Logic method operations for <b>MongoDB (NoSQL)</b> and <b>SQL</b> databases</li>
                        <li>Designed <b>Jasmine with Karma</b> tests to follow <b>Test Driven Development</b></li>
                        <li>Utilized <b>AWS Ecosystem</b> and <b>Docker Containers</b> to develop in a microservices environment</li>
                    </ul>
                </div>

                <h2 className='title-underlined'>Work Experience</h2>
                <div className='experience'>
                    <h2 className='title'>Software Engineer - Assure - Salt Lake City, Utah - September 2018 - June 2018</h2>
                    <h2 className='title2'>Glassboard</h2>
                    <p className='gb-paragraph'>
                        This web application is designed to automate the organization of SPVs (Special Purpose Vehicles) as well as other private equity
                        transactions. It allows organizers to create an entity with all of its associated legal and tax documents as well as onboard investors and
                        generate all of the necessary legal and tax documents for their investment into the SPV.
                    </p>
                    <h2 className='title2'>Responsibilities</h2>
                    <ul>
                        <li>Designing and creating the investor experience front end using <b>Angular 6</b> and <b>RxJs</b></li>
                        <li>Designing and creating the investor experience back end API calls using <b>Express.js</b>, <b>Mongoose</b>, <b>Node.js</b> and <b>MongoDB</b></li>
                        <li>Used <b>Node.js</b>, <b>MongoDB Native Driver</b>, and <b>Bash</b> to write database dump, restore and migration scripts</li>
                        <li>Used <b>Bash</b> to troubleshoot and write database dump, restore, and migration scripts</li>
                        <li>Connected to <b>Webmerge</b> and <b>EsignLive</b> APIs for document generation and signing services</li>
                        <li>Connected to <b>BlockScore</b> and <b>LegalInc</b> APIs for entity creation and KYC/AML (Know Your Client/Anti-Money Laundering) services</li>
                        <li>Used <b>AWS CloudWatch</b> and <b>S3</b> for server error monitoring and file storage</li>
                        <li>Used <b>Lambda</b> and <b>DynamoDB</b> for simplifying API connections and data storage</li>
                        <li>Ran devops for my team's deployments and releases using <b>AWS CodePipeline</b> and <b>Git Release</b>.</li>
                        <li>Mentored interns</li>
                    </ul>
                </div>

                <h2 className='title-underlined'>Achievements</h2>
                <div className='achievements'>
                    <ul>
                        <li>First place in companywide security challege at Assure. </li>
                    </ul>
                </div>

                <h2 className='title-underlined'>Education</h2>
                <div className='education'>
                    <ul>
                        <li>V School - Web Development - Full Stack JavaScript - February 2018 - May 2018</li>
                        <li>Salt Lake Community College - Computer Science - January 2011 - August 2013</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Resume;