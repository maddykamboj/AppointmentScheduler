import React  from 'react';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';
import axios from 'axios';

class UserDetails extends React.Component {
    componentDidMount()
    {
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        const res =  axios.get('http://localhost:8080/appointments');

        console.log('axios response');
        console.log(res);

    }

    state = {
        name: '',
        phoneNum: ''
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
        console.log('form Submitted');
        console.log(this.props);

        this.props.addUserInfo(this.props.params.id, this.state.name, this.state.phoneNum)
        browserHistory.push('/reserve');
    }

    render () {

        const {appointments} = this.props.appointments;
        const timeSlot = appointments.find(timeSlot => timeSlot.id === Number(this.props.params.id))

        return(
            <div>
                <h3>Appointment Details: </h3>


                <form onSubmit={this.handleSubmit}>
                        <label>Full Name </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" name="name" placeholder={timeSlot.name} onChange={this.handleNameChange} />
                        <br/>
                        <label>Phone Number </label>&nbsp;
                        <input type="text" name="phoneNumber" placeholder={timeSlot.phoneNum} onChange={this.handlePhoneNumChange} />
                        <br/>
                        <br/>
                        <button>Book Appointment</button>
                </form>
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
        addUserInfo: (id,name, phoneNum) => {dispatch ({type: 'ADD_USER', id: id, name: name, phoneNum : phoneNum})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserDetails);