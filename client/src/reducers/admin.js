export const admin = (data = {}, action) => {
    switch (action.type) {
        case "FETCH_PROFILE":
            return action.payload;
        case "UPDATE_PROFILE":
            return action.payload;
        default:
            return data;
    }
}

export const cashiers = (data = [], action) => {
    switch (action.type) {
        case "FETCH_CASHIERS":
            return action.payload;
        case "HIRE_CASHIER":
            return [...data, action.payload];
        case "UPDATE_CASHIER":
            return data.map((cashier) => cashier._id === action.payload._id ? action.payload : cashier);
        case "DELETE_CASHIER":
            return data.filter((cashier) => cashier._id !== action.payload);
        case "FETCH_CASHIER":
            return action.payload;
        default:
            return data;
    }
}

export const bills = (data = [], action) => {
    switch (action.type) {
        case "FETCH_TODAY_BILLS":
            return action.payload;
        case "FETCH_BILLS":
            return action.payload;
        case "FETCH_BILLS_OF_CASHIER":
            return action.payload;
        case "UPDATE_BILL":
            return data.map((bill) => bill._id === action.payload._id ? action.payload : bill);
        case "DELETE_BILL":
            return data.filter((bill) => bill._id !== action.payload);
        case "FETCH_BILL":
            return action.payload;
        default:
            return data;
    }
}

export const breads = (data = [], action) => {
    switch (action.type) {
        case "FETCH_BREADS":
            return action.payload;
        case "UPDATE_BREAD":
            return data.map((bread) => bread._id === action.payload._id ? action.payload : bread);
        case "DELETE_BREAD":
            return data.filter((bread) => bread._id !== action.payload);
        case "ADD_BREAD":
            return [...data, action.payload];
        default:
            return data;
    }
}