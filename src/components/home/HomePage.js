import React  from 'react';
import {Link} from 'react-router';
import './NavBar.css';

class HomePage extends React.Component {
    render () {
        return(
        <div>
            <h3>Welcome to Appointment Booking Application</h3>
            <Link to="about">Learn More</Link>
        </div>
        );
    }
}

export default HomePage;