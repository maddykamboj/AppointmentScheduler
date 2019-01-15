import React from 'react';
import {Link} from 'react-router';


class AboutPage extends React.Component {
    render () {
        return(

            <div>
                <h3>Book Your Appointment by providing Full Name and Phone Number</h3>
                <Link to="reserve">Book Appointment</Link>
            </div>
    );
    }
}

export default AboutPage;