import React from 'react';

function BetterAnswers() {
    return (
        <div className='betterAnswers'>
            <h1>Job Interview Questions and Answers</h1>
            <p className='introStatement'></p>
            <body>
                <div>
                    <h2>Q: Talk about scope in relation to JavaScript.</h2>
                    <p>
                        <h3>SCOPE</h3>
                        <hr />
                        <ul className='outerList'>
                            <li>In JavaScript there are two types of scope:</li>
                            <ul className='innerList'>
                                <li>local scope</li>
                                <li>global scope</li>
                            </ul>
                            <li>Scope determines the accessibility (visibility) of these variables.</li>
                            <li>JavaScript has function scope: each function creates a new scope.</li>
                            <li>Variables defined inside of a function are not accessible (visible) from outside the function.</li>
                            <li>Variable declared within a JavaScript function, become LOCAL to the function.</li>
                            <li>Local variables have Function Scope: They can only be accessed from within the function.</li>
                        </ul>
                        source: <a href="https://www.w3schools.com/js/js_scope.asp">https://www.w3schools.com/js/js_scope.asp</a>
                    </p>
                </div>
                <div>
                    <h2>Q: Talk about a time when you felt like you excelled at JavaScript.</h2>
                    <p>
                        Throughout V School there were coding challenges every morning as well as exercises throughout the curriculum. Most days I would find a way on my own to solve the problems given to us. I can think of a specific one involving 2 dimensional arrays that required you to create different patterns with a 2d array and I was able to do it on my own before we went over it in class and then was able to help my neighbors with the problem. This wasn’t the only time that this happened. There were many other instances where I solved the problem at hand early and was able to help my neighbors. This happened often enough that at the end of the course I was voted class debugger.
                </p>
                </div>
                <div>
                    <h2>Q: Talk about advantages and disadvantages of javascript. Why do some people really like it and others don’t?</h2>
                    <p>
                        <ul className='outerList'>
                            <li>Advantages of JavaScript:
                        <ul className='innerList'>
                                    <li><b>Speed. </b>Being client-side, JavaScript is very fast because any code functions can be run immediately instead of having to contact the server and wait for an answer.</li>
                                    <li><b>Simplicity. </b>JavaScript is relatively simple to learn and implement. </li>
                                    <li><b>Versatility. </b>JavaScript plays nicely with other languages and can be used in a huge variety of applications. Unlike PHP or SSI scripts, JavaScript can be inserted into any web page regardless of the file extension. JavaScript can also be used inside scripts written in other languages such as Perl or PHP. </li>
                                    <li><b>Server Load. </b>Being client-side reduces the demand on the website server. </li>
                                </ul>
                            </li>
                            <li>Disadvantages of JavaScript:
                        <ul className='innerList'>
                                    <li><b>Securiry. </b>Because the code executes on the users’ computer, in some cases it can be exploited for malicious purposes. This is one reason some people choose to disable JavaScript.</li>
                                    <li><b>Reliance on End User. </b>* JavaScript is sometimes interpreted differently by some browsers. Whereas server-side scripts will always produce the same output, client-side scripts can be a little unpredictable. Don’t be overly concerned by this though - as long as you test your script in all the major browsers you should be safe. </li>
                                </ul>
                            </li>
                        </ul>
                        source: <a href="https://www.mediacollege.com/internet/javascript/pros-cons.html">https://www.mediacollege.com/internet/javascript/pros-cons.html</a>
                    </p>
                </div>
                <div>
                    <h2>Q: Tell me about render props in react.</h2>
                    <p>
                        <h3>RENDER PROPS</h3>
                        <hr />
                        <ul className='outerList'>
                            <li>The term “render prop” refers to a simple technique for sharing code between React components using a prop whose value is a function. </li>
                            <li>A component with a render prop TAKES A FUNCTION that returns a React element and calls it instead of implementing its own logic. </li>
                        </ul>
                        source: <a href="https://reactjs.org/docs/render-props.html">https://reactjs.org/docs/render-props.html</a>
                    </p>
                </div>
                <hr />
                <div className='conclusion'>
                    <span className='signOff'>Matt Wright</span>
                    <div className='myFace'></div>
                </div>
            </body>
        </div>
    )
}

export default BetterAnswers
