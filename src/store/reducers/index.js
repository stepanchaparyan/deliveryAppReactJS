import { combineReducers } from 'redux';
import shopsReducer from './shopReducer.';
import reducer from './reducer';

const allReducers = combineReducers({
    reducerDeliver: reducer,
    shopsList: shopsReducer
});

export default allReducers;