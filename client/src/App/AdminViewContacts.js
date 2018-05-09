import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContacts, deleteContact } from '../redux/contacts';

class AdminViewContacts extends Component {

    componentDidMount() {
        this.props.getContacts();
    }

    removeContact = (e) => {
        console.log(e.target.id)
        this.props.deleteContact(e.target.id)
        console.log(this.props)
    }

    render() {
        return (
            <div className='adminViewContacts'>
                <h1>Admin View Contacts</h1>
                {this.props.data.map(contact =>
                    <div className='adminContact' key={contact._id}>
                        <button onClick={this.removeContact} id={contact._id} className='removeButton'>&times;</button>
                        <div className='contactAttb'>
                            name: <span>{contact.name}</span>
                        </div>
                        <div className='contactAttb'>
                            phone: <span>{contact.phone}</span>
                        </div>
                        <div className='contactAttb'>
                            email: <span>{contact.email}</span>
                        </div>
                        <div className='contactAttb'>
                            message: <span>{contact.message}</span>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default connect(state => state.contacts, { getContacts, deleteContact })(AdminViewContacts);