import axios from 'axios';

const cashierAPI = axios.create({
    baseURL: "http://localhost:4444/cashier",
    headers: {
        'Content-Type': 'application/json',
        'authToken': JSON.parse(localStorage.getItem('breadBilling'))?.token
    }
});

export const fetchProfile = () => cashierAPI.get('/profile');
export const fetchBreads = () => cashierAPI.get(`/breads`);
export const fetchBills = () => cashierAPI.get(`/bills`);
export const updateProfile = (cashier) => cashierAPI.patch('/update', cashier);
export const createBill = (bill) => cashierAPI.post(`/create/bill`, bill);