import { combineReducers } from 'redux';
import queue from './queue';
import status from './status'
import counter from './counter'


export default combineReducers({
    queue,
    status,
    counter
});