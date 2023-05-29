import axios from 'axios';

const cashierAPI = axios.create({
    baseURL: "http://localhost:4444/cashier"
});

export const fetchProfile = () => cashierAPI.get('/profile');
export const updateProfile = (cashier) => cashierAPI.patch('/update', cashier);
export const fetchBreads = () => cashierAPI.get(`/breads`);
export const createBill = (bill) => cashierAPI.post(`/create/bill`, bill);