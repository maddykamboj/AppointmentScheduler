import {combineReducers} from 'redux';
import apptReducer from './apptReducer';

const rootReducer = combineReducers({
    appointments : apptReducer
});

export default rootReducer;