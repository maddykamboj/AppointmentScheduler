import configureStore from 'redux-mock-store';
import defaultState from '../reducers/reducers';

const middlewares = [];
const MockStore = (state = {}) => {
    const mockStore = configureStore(middlewares);
    const store = mockStore({ ...defaultState, ...state });
    return store;
};

export default MockStore;