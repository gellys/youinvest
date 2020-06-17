import {combineReducers } from 'redux';
import valueReducer from './valueReducer';

const rootReducer = combineReducers({
    valueinvested: valueReducer
})

export default rootReducer;