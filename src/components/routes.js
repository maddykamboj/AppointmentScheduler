import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '.././components/home/App';
import HomePage from '.././components/home/HomePage';
import AboutPage from '.././components/home/about/AboutPage';
import Appointment from './home/order/Appointment';
import UserDetails from "./home/order/UserDetails";

export default (
 <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage} />
    <Route path="reserve" component={Appointment} />
    <Route path="reserve/:id" component={UserDetails} />
</Route>
);