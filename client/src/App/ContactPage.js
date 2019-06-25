import React, { Component } from 'react';
import ContactForm from './ContactForm';
import { connect } from 'react-redux';
import { postContact } from '../redux/contacts';
import ThankyouMessage from './ThankyouMessage';
import email from '../media/email.png';
import telephone from '../media/telephone.png';

class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                name: "",
                phone: "",
                email: "",
                message: ""
            },
            noName: false,
            noPhoneOrEmail: false,
            displayMessage: false
        }
        this.state = this.initialState;
    }

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, phone, email } = this.state.inputs;
        if (!name) return this.setState({ noName: true });
        if (!phone && !email) return this.setState({
            noName: false,
            noPhoneOrEmail: true
        })
        this.props.postContact(this.state.inputs);
        this.setState({ displayMessage: true })
    }

    displayMessage = (e) => {
        this.setState({
            displayMessage: true
        })
    }

    closeMessage = (e) => {
        if (e.target.id === 'closeButton' || e.target.id === 'thankyouMessage') {
            this.setState(this.initialState);
        }
    }

    render() {
        return (
            <div className='contactPage'>
                <h1 className='contactTitle'>Contact Me</h1>
                <div className='contactPhone'>
                    <img src={telephone} alt="phone" />
                    <span>801-755-0125</span>
                </div>
                <div className='contactEmail'>
                    <img src={email} alt="email" />
                    <span>matwright2010@gmail.com</span>
                </div>
                <ContactForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    closeMessage={this.closeMessage}
                    {...this.state}
                />
                {this.state.displayMessage ?
                    <ThankyouMessage closeMessage={this.closeMessage} />
                    : null}
            </div>
        )
    }
}

export default connect(null, { postContact })(ContactPage);