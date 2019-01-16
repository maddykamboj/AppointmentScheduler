import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import './Appointment.css';

class Appointment extends React.Component {
    render (){
        const {appointments} = this.props;
        console.log('Print appts');
        console.log(appointments);
        return (
            <div>
                <h3> Select Appointment Slot: </h3>
                <table>
                    <tr>
                        {appointments.appointments.map(appointment =>
                            <Link  to={`/reserve/${appointment.id}`} activeClassName="active">
                                <td className={appointment.reserved?'reserved':''}>{appointment.timeSlot}</td>
                            </Link>

                        )}
                    </tr>
                </table>
            </div>
        );
    }
}

Appointment.propTypes = {
    dispatch : PropTypes.func.isRequired,
    appointments : PropTypes.array.isRequired
};

const mapStateToProps = (state) =>{
    // debugger;
    return {
        appointments: state.appointments
    }
}


export default connect(mapStateToProps)(Appointment);