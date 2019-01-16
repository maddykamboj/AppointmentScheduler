import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import './Appointment.css';
import UserDetailsEntryForm from './UserDetailsEntryForm';

class Appointment extends React.Component {
    constructor(){
        super()
        this.state = {}

        this.handleAppointmentClick = this.handleAppointmentClick.bind(this);
    }

    show(){
        document.querySelector('#modalDialog1').showModal();
    }

    close(){
        this.setState({show: false})
    }

    handleAppointmentClick () {
        this.show();
    }

    render (){
        const {appointments} = this.props;
        return (
            <div>
                <h3> Select Appointment Slot: </h3>
                {appointments.appointments.map(appointment =>
                    <table>
                        <tr>
                    <a onClick={this.handleAppointmentClick} className={appointment.reserved?'reserved':''}>
                            <td className={appointment.reserved?'reserved':''}>{appointment.timeSlot}</td></a>
                        </tr>
                    </table>

                )}
                <dialog id="modalDialog1"
                        className="test-class" //this will completely overwrite the default css completely
                        style={{background: 'red'}} //overwrites the default background
                        containerStyle={{background: 'blue'}} //changes styling on the inner content area
                        containerClassName="test"
                        closeOnOuterClick={true}
                        show={this.state.show}
                        onClose={this.close.bind(this)}>

                    <a onClick={this.close.bind(this)}>X</a>

                    <UserDetailsEntryForm />

                </dialog>
            </div>
        );
    }
}

Appointment.propTypes = {
    dispatch : PropTypes.func.isRequired,
    appointments : PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) =>{
    // debugger;
    return {
        appointments: state.appointments
    }
}


export default connect(mapStateToProps)(Appointment);