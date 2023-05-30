export const cashier = (data = [], action) => {
    switch (action.type) {
        case "CREATE_BILL_CASHIER":
            return true;
        case "FETCH_BREADS_CASHIER":
            return action.payload;
        case "FETCH_BILLS_CASHIER":
            return action.payload;
        default:
            return data;
    }
}

export const cashierProfile = (data = [], action) => {
    switch (action.type) {
        case "FETCH_PROFILE_CASHIER":
            console.log(action.payload)
            return action.payload;
        case "UPDATE_PROFILE_CASHIER":
            return action.payload;
        default:
            return data;
    }
}