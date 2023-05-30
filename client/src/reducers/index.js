import { combineReducers } from 'redux';
import { admin, cashiers, bills, breads } from './admin';
import { cashier, cashierProfile } from './cashier';

export default combineReducers({
    admin,
    cashiers,
    bills,
    breads,
    cashier,
    cashierProfile
})