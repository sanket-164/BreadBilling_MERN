import * as api from "../API/api.js";

export const fetchProfile = () => async (dispatch) => {
    try {
        const { data } = await api.fetchProfile();
        
        dispatch({ type: "FETCH_PROFILE_CASHIER", payload: data });
    } catch (err) {
        console.log(err.message);
    }
}

export const updateProfile = (cashier) => async (dispatch) => {
    try {
        const { data } = await api.updateProfile(cashier);
        
        dispatch({ type: "UPDATE_PROFILE_CASHIER", payload: data });
    } catch (err) {
        console.log(err.message);
    }
}

export const fetchBreads = () => async (dispatch) => {
    try {
        const { data } = await api.fetchBreads();
        
        dispatch({ type: "FETCH_BREADS_CASHIER", payload: data });
    } catch (err) {
        console.log(err.message);
    }
}

export const createBillCashier = (bill) => async(dispatch) => {
    console.log(bill);
    try {
        const { data } = await api.createBillCashier(bill);
        
        dispatch({ type: "CREATE_BILL_CASHIER", payload: data });
    } catch (err) {
        console.log(err.message);
    }
}