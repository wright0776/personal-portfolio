import React from 'react'

function ContactForm(props) {
    return (
        <form onSubmit={props.handleSubmit} className='contactForm'>
            <div className='messages'>
                {props.noName ?
                    <div className='message'>Please enter your name.</div>
                    : null}
                {props.noPhoneOrEmail ?
                    <div className='message'>Please enter your phone number or email</div>
                    : null}
            </div>
            <label className='contactInputLabel' htmlFor="name">Name:</label>
            <input className='contactInput' onChange={props.handleChange} name="name" value={props.inputs.name} type="text" />

            <label className='contactInputLabel' htmlFor="phone">Phone:</label>
            <input className='contactInput' onChange={props.handleChange} name="phone" value={props.inputs.phone} type="tel" />

            <label className='contactInputLabel' htmlFor="email">Email:</label>
            <input className='contactInput' onChange={props.handleChange} name="email" value={props.inputs.email} type="email" />

            <label className='contactTALabel' htmlFor="message">Message:</label>
            <textarea className='contactTA' onChange={props.handleChange} name="message" value={props.inputs.message} type="text" />

            <div className='contactButtonContainer'>
                <button className='contactSubmit'>Submit</button>
            </div>
        </form>
    )
}

export default ContactForm
