import React  from 'react';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';
import axios from 'axios';
import {createActionAddUser} from "../actions/apptAction";

class UserDetails extends React.Component {
    constructor(props) {
        super(props);
        axios.get('http://localhost:8080/appointments')
        .then(res => {
                this.setState({
                    ...props,
                name : res.data.name,
                phoneNum: res.data.phoneNum
            })
    });
   }


    handleNameChange = (e) => {
           this.setState({
            name : e.target.value
        })
    }

    handlePhoneNumChange = (e) => {
        this.setState({
            phoneNum : e.target.value
        })
    }

    handleSubmit = (e) => {
       e.preventDefault();
       this.props.addUserInfo(e.target.elements.id.value, this.state.name, this.state.phoneNum);
       browserHistory.push('/reserve');
    }

    render () {
        const {appointments} = this.props;
         const selectedSlot = appointments.appointments.filter( appt => { return appt.isIDSelected === true});

        return(
            <div>
                <h3>Appointment Details: </h3>
                { selectedSlot.map(slot =>
                    <form onSubmit={this.handleSubmit}>

                        <label>Full Name </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" name="name" placeholder={slot.name} onChange={this.handleNameChange} />
                        <br/>
                        <label>Phone Number </label>&nbsp;
                        <input type="text" name="phoneNumber" placeholder={slot.phoneNum} onChange={this.handlePhoneNumChange} />
                        <br/>
                        <br/>
                        <input type="hidden" name="id" value={slot.id}/>
                        <button>Book Appointment</button>

                </form>
                )}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        appointments : state.appointments
          }
}

const mapDispatchToProps = dispatch => {
    return {
        addUserInfo: (id,name,phoneNum) => {dispatch (createActionAddUser(id, name,phoneNum))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserDetails);