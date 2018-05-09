import React from 'react'

function ThankyouMessage(props) {
    return (
        <div onClick={props.closeMessage} id='thankyouMessage' className='thankyouMessage'>
            <div id='tyModal' className='tyModal'>
                <button id='closeButton' className='closeButton'>&times;</button>
                <span className='tyModal1'>Thank you for contacting me.</span>
                <span>I will get back to you in a jiffy!</span>
            </div>
        </div>
    )
}

export default ThankyouMessage