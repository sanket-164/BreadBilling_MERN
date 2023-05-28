export const cashier = (data = [], action) => {
    switch (action.type) {
        case "FETCH_PROFILE_CASHIER":
            return action.payload;
        case "UPDATE_PROFILE_CASHIER":
            return action.payload;
        case "FETCH_BREADS_CASHIER":
            return action.payload;
        case "FETCH_BILLS_CASHIER":
            return action.payload;
        default:
            return data;
    }
}