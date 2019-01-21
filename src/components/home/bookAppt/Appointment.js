import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './Appointment.css';
import UserDetails from './UserDetails';
import {createActionClickedId} from "../actions/apptAction";

class Appointment extends React.Component {
    constructor(){
        super()
        this.state = {}
        this.handleAppointmentClick = this.handleAppointmentClick.bind(this);
        this.close.bind = this.close.bind(this);
    }

    show(){
        document.querySelector('#modalDialog1').showModal();
    }

    close(){
        this.setState({show: false})
    }

    handleAppointmentClick (id) {
        this.props.clickedId(id);
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
                            <a onClick={()=> (this.handleAppointmentClick(appointment.id))} className={appointment.reserved?'reserved':''}>
                                <td className={appointment.reserved?'reserved':''}>{appointment.timeSlot}</td></a>
                        </tr>
                    </table>

                )}
                <dialog id="modalDialog1"
                        className="test-class"
                        style={{background: 'white'}}
                        containerStyle={{background: 'blue'}}
                        containerClassName="test"
                        closeOnOuterClick={true}
                        show={this.show}
                        onClose={this.close.bind(this)}>

                    <a onClick={this.close.bind(this)}>X</a>

                    <UserDetails />

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

const mapDispatchToProps = dispatch => {

    return {
        clickedId: (id) => {
            console.log('CLICKED_ID',id);
            dispatch (createActionClickedId(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Appointment);