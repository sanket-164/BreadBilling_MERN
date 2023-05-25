import { combineReducers } from 'redux';
import { admin, cashiers, bills, breads } from './admin';

export default combineReducers({
    admin,
    cashiers,
    bills,
    breads
})