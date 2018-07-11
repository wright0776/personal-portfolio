import React from 'react'

function ThankyouMessage(props) {
    return (
        <div onClick={props.closeMessage} id='thankyouMessage' className='thankyouMessage'>
            <div id='tyModal' className='tyModal'>
                <button id='closeButton' className='closeButton'>&times;</button>
                <span className='tyModal1'>Thank you for contacting me.</span>
                <span>I will be in touch shortly.</span>
            </div>
        </div>
    )
}

export default ThankyouMessage