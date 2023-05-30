import * as api from "../API/api.js";

export const fetchProfile = () => async (dispatch) => {
    try {
        const { data } = await api.fetchProfile();

        dispatch({ type: "FETCH_PROFILE", payload: data });
    } catch (err) {
        console.log(err.message);
    }
}

export const updateProfile = (admin) => async (dispatch) => {
    try {
        const { data } = await api.updateProfile(admin);

        dispatch({ type: "UPDATE_PROFILE", payload: data });
    } catch (err) {
        console.log(err.message);
    }
}

export const fetchCashiers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCashiers();

        dispatch({ type: "FETCH_CASHIERS", payload: data });
    } catch (err) {
        console.log(err.message);
    }
}

export const hireCashier = (cashier) => async (dispatch) => {
    try {
        const { data } = await api.hireCashier(cashier);

        dispatch({ type: "HIRE_CASHIER", payload: data });
    } catch (err) {
        console.log(err.message);
    }
}

export const updateCashier = (id, cashier) => async (dispatch) => {
    try {
        const { data } = await api.updateCashier(id, cashier);
        dispatch({ type: "UPDATE_CASHIER", payload: data });
    } catch (err) {
        console.log(err.message);
    }
}

export const deleteCashier = (id) => async (dispatch) => {
    try {
        await api.deleteCashier(id);

        dispatch({ type: "DELETE_CASHIER", payload: id });
    } catch (err) {
        console.log(err.message);
    }
}

export const fetchTodayBills = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTodayBills();

        dispatch({ type: "FETCH_TODAY_BILLS", payload: data });
    } catch (err) {
        console.log(err.message);
    }
}

export const fetchBills = () => async (dispatch) => {
    try {
        const { data } = await api.fetchBills();

        dispatch({ type: "FETCH_BILLS", payload: data });
    } catch (err) {
        console.log(err.message);
    }
}

export const fetchBillsOfCashier = (cashierId) => async (dispatch) => {
    try {
        const { data } = await api.fetchBillsOfCashier(cashierId);
        console.log(data, cashierId);
        dispatch({ type: "FETCH_BILLS_OF_CASHIER", payload: data });
    } catch (err) {
        console.log(err.message);
    }
}

export const updateBill = (id, bill) => async (dispatch) => {
    try {
        const { data } = await api.updateBill(id, bill);

        dispatch({ type: "UPDATE_BILL", payload: data });
    } catch (err) {
        console.log(err.message);
    }
}

export const deleteBill = (id) => async (dispatch) => {
    try {
        const { data } = await api.deleteBill(id);

        dispatch({ type: "DELETE_BILL", payload: data });
    } catch (err) {
        console.log(err.message);
    }
}

export const fetchBreads = () => async (dispatch) => {
    try {
        const { data } = await api.fetchBreads();

        dispatch({ type: "FETCH_BREADS", payload: data });
    } catch (err) {
        console.log(err.message);
    }
}

export const updateBread = (id, bill) => async (dispatch) => {
    try {
        const { data } = await api.updateBread(id, bill);

        dispatch({ type: "UPDATE_BREAD", payload: data });
    } catch (err) {
        console.log(err.message);
    }
}

export const addBread = (bread) => async (dispatch) => {
    try {
        console.log(bread)
        const { data } = await api.addBread(bread);

        dispatch({ type: "ADD_BREAD", payload: data });
    } catch (err) {
        console.log(err.message);
    }
}

export const deleteBread = (id) => async (dispatch) => {
    try {
        const { data } = await api.deleteBread(id);

        dispatch({ type: "DELETE_BREAD", payload: data });
    } catch (err) {
        console.log(err.message);
    }
}