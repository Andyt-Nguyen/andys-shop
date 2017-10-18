import { combineReducers } from 'redux';
import product from './shopReducer';

const rootReducer = combineReducers({
    product
});

export default rootReducer;
