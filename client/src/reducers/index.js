import { combineReducers } from 'redux';
import queue from './queue';
import status from './status'
import counter from './counter'
import alert from './alert'


export default combineReducers({
    queue,
    status,
    counter,
    alert
});