import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import {Provider} from 'react-redux';
import routes from './components/routes';
import configureStore from './store/configureStore';

const store = configureStore();

console.log('store');
console.log(store.getState());
ReactDOM.render(
    <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('root')
);

