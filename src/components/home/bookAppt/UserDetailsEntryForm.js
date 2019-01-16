import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import './Appointment.css';


class UserDetailsEntryForm extends React.Component {
    constructor () {
        super();

        this.state = {
            phone: '',
            name: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (evt) {
        evt.preventDefault(); // do some stuff

        document.querySelector('#modalDialog1').close(); // close manually
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Phone <input type="tel" value={this.state.phone} /></label>
                <label>Name <input type="text" value={this.state.name} /></label>
                <button>Submit</button>
            </form>
        )
    }
}

export default UserDetailsEntryForm;